import React, { useState, useEffect, useRef } from "react";
import { Drawer } from "antd";
import { Styles } from "./styles/chatToggle";
import { messageSend, getMessage, deleteMessage as deleteMessageAPI, editMessage as editMessageAPI } from "../helper/helper";
import { useDispatch } from "react-redux";
import { readMessage } from "../slice/chat/thunk";

export default function ChatToggle({ open, onClose, user, signalChat }) {
    const dispatch = useDispatch();
    const url = process.env.REACT_APP_API_URL;
    const [newMessage, setNewMessage] = useState("");
    const chatRef = useRef();
    const [messages, setMessages] = useState([]);
    
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                if (user?.id) {
                    const res = await getMessage(user.id);
                    const formatted = res.map((msg) => ({
                        ...msg,
                        id: msg.messageId,
                        sender: msg.meSender ? "self" : "other",
                        time: msg.sendTime,
                        isEditing: false,
                    }));

                    setMessages(formatted);

                    const lastElement = res.at(-1);
                    if (open && lastElement && (lastElement.senderId === user.friendId)) {
                        dispatch(readMessage({
                            toAlumniId: user?.friendId,
                            messageIds: [lastElement.messageId],
                        }));
                    }
                }
            } catch (err) {
                console.error("Xabarlarni olishda xatolik:", err);
            }
        };

        fetchMessages();
    }, [user, signalChat, dispatch, open]);





    const handleSend = async () => {
        if (newMessage.trim() === "") return;

        const messageData = {
            text: newMessage.trim(),
            toAlumniId: user?.id || 0,
        };

        try {
            await messageSend(messageData);

            const res = await getMessage(user.id);
            const formatted = res.map((msg) => ({
                ...msg,
                id: msg.messageId,
                sender: msg.meSender ? "self" : "other",
                time: msg.sendTime,
                isEditing: false,
            }));
            setMessages(formatted);
            setNewMessage("");
        } catch (error) {
            console.error("Xabar yuborishda xatolik:", error);
        }
    };


    const startEdit = (id) => {
        setMessages((prev) =>
            prev.map((item) => (item.id === id ? { ...item, isEditing: true } : item))
        );
    };


    const saveEdit = async (id) => {
        const editedMsg = messages.find((msg) => msg.id === id);
        if (!editedMsg || editedMsg.text.trim() === "") return;
        const dataText = {
            text: editedMsg.text
        }

        try {
            console.log(id, user.id, dataText);
            await editMessageAPI(id, user.id, dataText);

            const res = await getMessage(user.id);
            const formatted = res.map((msg) => ({
                ...msg,
                id: msg.messageId,
                sender: msg.meSender ? "self" : "other",
                time: msg.sendTime,
                isEditing: false,
            }));
            setMessages(formatted);
        } catch (err) {
            console.error("Xabarni tahrirlashda xatolik:", err);
        }
    };


    const handleDelete = async (messageId, toAlumniId) => {
        try {
            await deleteMessageAPI(toAlumniId, messageId);
            setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
        } catch (error) {
            console.error("Xabarni o‘chirishda xatolik:", error);
        }
    };


    const handleEditChange = (id, newText) => {
        setMessages((prev) =>
            prev.map((item) => (item.id === id ? { ...item, text: newText } : item))
        );
    };


    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <Drawer
            styles={{
                header: { display: "none" },
                body: { padding: 0 },
            }}
            placement="right"
            open={open}
            width={350}
            onClose={onClose}
            maskClosable={true}
        >
            <Styles>
                <div className="chatToggle__title">
                    <div className="chatToggle__right">
                        {user?.imageUrl ? (
                            <div className="chatToggle__title-main">
                                <img src={url + user.imageUrl} alt="Avatar" />
                            </div>
                        ) : (
                            <div className="chatToggle__title-main">
                                <span>{user?.firstName?.charAt(0)}</span>
                            </div>
                        )}
                        <span>{user?.firstName} {user?.lastName}</span>
                    </div>
                    <button className="chatToggle__left" onClick={onClose}>
                        <i className="las la-times"></i>
                    </button>
                </div>

                <div className="chatToggle-chat">
                    <div className="chatToggle-chat-main" ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.sender}`}>
                                <div className="chat-message-content">
                                    {msg.isEditing ? (
                                        <input
                                            value={msg.text}
                                            onChange={(e) => handleEditChange(msg.id, e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && saveEdit(msg.id)}
                                            autoFocus
                                        />
                                    ) : (
                                        <span>{msg.text}</span>
                                    )}
                                </div>

                                <div className="chat-message-meta">
                                    <small>{msg.time}</small>
                                    {msg.sender === "self" && (
                                        <div className="chat-actions">
                                            <button className="chatToggle-edit" onClick={() => startEdit(msg.id)}>
                                                <i className="las la-edit"></i>
                                            </button>
                                            <button className="chatToggle-delete" onClick={() => handleDelete(msg.id, user.id)}>
                                                <i className="las la-trash"></i>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="chatToggle-chat-footer">
                        <input
                            type="text"
                            placeholder="Xabar yozing..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button onClick={handleSend}>
                            <i className="las la-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </Styles>
        </Drawer>
    );
}
