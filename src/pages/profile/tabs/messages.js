import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatFriends as onGetChatFriends, readMessage } from "../../../slice/chat/thunk";
import "../styles/style.css";
import ChatMessages from "../../../components/ChatMessages";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import messagesText from "../../../data/profile/messageJson.json";

const url = process.env.REACT_APP_API_URL;

const Messages = ({ profile }) => {
    const dispatch = useDispatch();
    const [listView, setListView] = useState([]);
    const [input, setInput] = useState("");
    const [chatOpen, setChatOpen] = useState(false);
    const [chatUser, setChatUser] = useState(null);
    const [messageList, setMessageList] = useState([]);

    const chatFriends = useSelector((state) => state.Messages.chatFriends);

    const lang = window.location.pathname.split('/')[1];
    const text = messagesText[lang];

    useEffect(() => {
        if (profile.id) {
            const socket = new SockJS(`${url}/ws`);
            const stomp = over(socket);

            stomp.connect({}, () => {
                // console.log('✅ Connected to WebSocket');

                stomp.subscribe(`/topic/send-messages/${profile.id}`, (msg) => {
                    const body = JSON.parse(msg.body);
                    dispatch(onGetChatFriends());
                    setMessageList(prev => [...prev, body]);
                });

                stomp.subscribe(`/topic/edit-messages/${profile.id}`, (msg) => {
                    const updated = JSON.parse(msg.body);
                    dispatch(onGetChatFriends());
                    setMessageList(prev =>
                        prev.map(m => m.id === updated.id ? updated : m)
                    );
                });

                stomp.subscribe(`/topic/delete-messages/${profile.id}`, (msg) => {
                    const deletedId = JSON.parse(msg.body).id;
                    dispatch(onGetChatFriends());
                    setMessageList(prev => prev.filter(m => m.id !== deletedId));
                });

                stomp.subscribe(`/topic/read-messages/${profile.id}`, (msg) => {
                    const readData = JSON.parse(msg.body);
                    dispatch(onGetChatFriends());
                    setMessageList(prev =>
                        prev.map(m =>
                            readData.messageIds?.includes(m.id)
                                ? { ...m, read: true }
                                : m
                        )
                    );
                });
            });

            return () => {
                if (stomp.connected) stomp.disconnect();
            };
        }
    }, [profile, dispatch]);

    useEffect(() => {
        if (chatUser?.unreadMessageIds) {
            dispatch(readMessage({
                toAlumniId: chatUser?.friendId,
                messageIds: chatUser?.unreadMessageIds
            }));
            dispatch(onGetChatFriends());
        }
    }, [chatUser, dispatch]);

    useEffect(() => {
        dispatch(onGetChatFriends());
    }, [dispatch, messageList, chatOpen]);

    useEffect(() => {
        if (Array.isArray(chatFriends)) {
            setListView(chatFriends);
        } else {
            setListView([]);
        }
    }, [chatFriends]);

    const handleChange = (ele) => {
        let search = ele.target.value;
        setInput(search);
        if (search) {
            setListView(chatFriends?.filter((item) =>
                item?.friendName?.toLowerCase().includes(search.toLowerCase())
            ));
        } else {
            setListView(chatFriends);
        }
    };

    return (
        <>
            <div className="notification_header">
                <h4 className="tab-title">{text.messages_title}</h4>
                <input
                    type="text"
                    className="form-control"
                    placeholder={text.search_placeholder}
                    value={input}
                    onChange={handleChange}
                />
            </div>
            <hr />

            {listView?.length > 0 ? (
                listView.map((item, index) => (
                    <div
                        key={index}
                        className="graduate-box"
                        onClick={() => {
                            setChatUser(item);
                            setChatOpen(true);
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="content_box">
                            <p className="graduate_num">{index + 1}</p>
                            <div className="graduate_img-content">
                                {item.friendAvatar ? (
                                    <div className="graduate_img-box">
                                        <img src={url + item.friendAvatar} alt="user" />
                                    </div>
                                ) : (
                                    <div className="not_img">
                                        <p>{item.friendName?.charAt(0)}</p>
                                    </div>
                                )}
                            </div>

                            <div className="graduate_text">
                                <p className="graduate_text-friendName">{item.friendName}</p>
                                <div className="graduate_text-lastMessageText">
                                    <p className="graduate_text-lastMessageText-main">{item.lastMessageText}</p>
                                    <div className="graduate_check-message">
                                        {item.lastMessageSenderId === profile.id &&
                                            (item.lastMessageRead
                                                ? <i className="las la-check-double text-primary" />
                                                : <i className="las la-check text-primary" />
                                            )}
                                    </div>
                                </div>
                            </div>

                            <div className="graduate_right">
                                <div className="graduate_unreadCount">
                                    {item.unreadCount > 0 && <p>{item.unreadCount}</p>}
                                </div>
                                <div>{item.lastMessageSendTime}</div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="not_data">
                    <div style={{ textAlign: "center", marginTop: "40px" }}>
                        <div style={{ color: "#888" }}>
                            <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                            <p style={{ marginTop: "16px", fontSize: "18px" }}>{text.no_data}</p>
                        </div>
                    </div>
                </div>
            )}

            <ChatMessages
                open={chatOpen}
                onClose={() => setChatOpen(false)}
                user={chatUser}
                profile={profile}
                signalChat={messageList}
            />
        </>
    );
};

export default Messages;
