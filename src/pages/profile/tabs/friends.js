import React, { useEffect, useState } from "react";
import { getFriends as onGetFriends } from "../../../slice/friends/thunk";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ChatToggle from "../../../components/ChatToggle";
import "../styles/profile"
import { getChatFriends as onGetChatFriends } from "../../../slice/chat/thunk";
import { readMessage } from "../../../slice/chat/thunk";
import SockJS from "sockjs-client";
import { over } from "stompjs";
import ModalImage from "react-modal-image";
import friendsText from "../../../data/profile/friendsJson.json";

const url = process.env.REACT_APP_API_URL;

const Friends = ({ profile }) => {
    const dispatch = useDispatch();
    const [listView, setListView] = useState([]);
    const [input, setInput] = useState("");
    const [modalData, setModalData] = useState({
        firstName: "",
        lastName: "",
        patronymic: "",
        phoneNumber: "",
        email: "",
        graduationYear: "",
        currentCompany: "",
        position: "",
        imageUrl: ""
    });
    const [show, setShow] = useState(false);

    const [chatOpen, setChatOpen] = useState(false);
    const [chatUser, setChatUser] = useState(null);
    const [messageList, setMessageList] = useState([]);

    const chatFriends = useSelector((state) => state.Messages.chatFriends)

    const lang = window.location.pathname.split('/')[1];
    const text = friendsText[lang];

    useEffect(() => {
        if (profile.id) {
            const socket = new SockJS(`${url}/ws`);
            const stomp = over(socket);

            stomp.connect({}, () => {
                // console.log('✅ Connected to WebSocket');

                // Send message
                stomp.subscribe(`/topic/send-messages/${profile.id}`, (msg) => {
                    const body = JSON.parse(msg.body);
                    // console.log('New message:', body);
                    dispatch(onGetChatFriends());
                    setMessageList(prev => [...prev, body]);
                });

                // Edit message
                stomp.subscribe(`/topic/edit-messages/${profile.id}`, (msg) => {
                    const updated = JSON.parse(msg.body);
                    // console.log('Edited message:', updated);
                    dispatch(onGetChatFriends());
                    setMessageList(prev =>
                        prev.map(m => m.id === updated.id ? updated : m)
                    );
                });

                // Delete message
                stomp.subscribe(`/topic/delete-messages/${profile.id}`, (msg) => {
                    const deletedId = JSON.parse(msg.body).id;
                    // console.log('Deleted message:', deletedId);
                    dispatch(onGetChatFriends());
                    setMessageList(prev =>
                        prev.filter(m => m.id !== deletedId)
                    );
                });

                // Read message
                stomp.subscribe(`/topic/read-messages/${profile.id}`, (msg) => {
                    const readData = JSON.parse(msg.body);
                    // console.log('Read messages:', readData);
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

    }, [profile]);

    useEffect(() => {
        if (chatUser?.unreadMessageIds) {
            dispatch(readMessage({
                toAlumniId: chatUser?.friendId,
                messageIds: chatUser?.unreadMessageIds
            }));
            dispatch(onGetChatFriends());
        }
    }, [chatUser]);


    const getAllFriends = createSelector(
        (state) => state.Friends,
        (friend) => ({
            friends: friend.friends.content
        })
    );

    const handleClose = () => setShow(false);

    const { friends } = useSelector(getAllFriends);


    useEffect(() => {
        dispatch(onGetFriends());
        dispatch(onGetChatFriends());
    }, [dispatch, messageList, chatOpen]);

    useEffect(() => {
        if (friends, chatFriends) {
            setListView(friends, chatFriends);
        }
    }, [friends, chatFriends])

    const handleChange = (ele) => {
        let search = ele.target.value;
        setInput(search);
        if (search) {
            setListView(friends?.filter((item) => {
                const strData = `${item?.firstName} ${item?.lastName} ${item?.patronymic}`
                return strData.toLowerCase().includes(search.toLowerCase());
            }));
        } else {
            setListView(friends);
        }
    };

    const handleAdd = (data) => {
        setModalData(data);
        setShow(true);
    }

    return (
        <>
            <div className={"notification_header"}>
                <h4 className="tab-title">{text.friends_title}</h4>
                <input
                    type="text"
                    className="form-control"
                    placeholder={text.search_placeholder}
                    value={input}
                    onChange={handleChange}
                />
            </div>
            <hr />
            <div className="friends-list">
                {
                    listView?.length > 0 ? listView.map((item, index) => (
                        <div className="graduate-box" key={index}>
                            <div className={"content_box"}>
                                <p className={"graduate_num"}>{index + 1}</p>
                                <div className={"graduate_img-content"}>
                                    {
                                        item.imageUrl ? (
                                            <div className={"graduate_img-box"}>
                                                <img src={url + item.imageUrl} alt="Graduates" />
                                            </div>
                                        ) : (
                                            <div className={"not_img"}>
                                                <p>{item.firstName?.charAt(0)}</p>
                                            </div>
                                        )
                                    }
                                </div>

                                <h4>{item?.firstName} {item?.lastName} <span>{item?.patronymic}</span></h4>
                            </div>
                            <div className={"friends_eye"}>

                                <button onClick={() => handleAdd(item)}>
                                    <i className="las la-eye"></i> <p>{text.view}</p>
                                </button>

                                <button
                                    onClick={() => {
                                        setChatUser(item);
                                        setChatOpen(true);
                                    }}
                                >
                                    <i className="las la-comment"></i> <p>{text.chat}</p>
                                </button>

                            </div>



                        </div>

                    )) : (
                        <div className={"not_data"}>
                            <div style={{ textAlign: "center", marginTop: "40px" }}>
                                <div style={{ color: "#888" }}>
                                    <svg width="74" height="74" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        <line x1="8" y1="11" x2="14" y2="11"></line>
                                    </svg>
                                    <p style={{ marginTop: "16px", fontSize: "18px" }}>{text.no_data}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <Modal show={show} onHide={handleClose} className={"reg-modal p-3"}>
                <Modal.Body>

                    <div className={'event-box'}>
                        <div className="event-content">
                            <div className="content-box">
                                <Row>
                                    <Col md="4">
                                        <div className="event-img"
                                            style={{ marginBottom: 10 }}
                                        >
                                            {modalData?.imageUrl ? (
                                                <ModalImage
                                                    small={`${url}${modalData.imageUrl}`}
                                                    large={`${url}${modalData.imageUrl}`}
                                                    alt="profile_avatar"
                                                    className="img-fluid"
                                                />
                                            ) : (
                                                <div className={"notification_not-img"}>
                                                    <p>{modalData.firstName?.charAt(0)}.{modalData.lastName?.charAt(0)}</p>
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                    <Col md="8">
                                        <div className="event-title">
                                            <h6>
                                                <Link
                                                    to={"#"}>{modalData.firstName} {modalData.lastName} {modalData.patronymic}</Link>
                                            </h6>
                                        </div>

                                        <div className="event-desc">
                                            <p><span>{text.workplace}</span> {modalData.currentCompany}</p>
                                            <p><span>{text.position}</span> {modalData.position}</p>
                                            <p><i className="las la-calendar"></i> {modalData.graduationYear}</p>
                                            <p><i className="las la-book"></i> {modalData.faculty}</p>
                                            <p><i className="las la-envelope"></i> {modalData.email}</p>
                                            <p><i className="las la-phone"></i> {modalData.phoneNumber}</p>
                                        </div>

                                    </Col>


                                </Row>
                            </div>
                        </div>

                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <Button onClick={handleClose} style={{ backgroundColor: "#4a2559", border: "none" }}>
                        {text.close}
                    </Button>
                </Modal.Footer>

            </Modal>


            <ChatToggle open={chatOpen} onClose={() => setChatOpen(false)} user={chatUser} profile={profile} signalChat={messageList} />

        </>
    )
}

export default Friends;