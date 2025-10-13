import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import Personal from "./personal";
import Friends from "./friends";
import Certificate from "./certificate";
import Graduates from "./graduates";
import Notification from "./notification";
import { logoutUser } from "../../../slice/auth/login/thunk";
import { useDispatch } from "react-redux";
import { getProfile as onGetProfile } from "../../../slice/profile/thunk";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { updateProfile as onUpdateProfile } from "../../../slice/profile/thunk";
import Messages from './messages';
import tabBoxText from "../../../data/profile/tabBoxJson.json";
import i18n from '../../../i18n';

const TabBox = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const lang = location.pathname.split('/')[1];

    const params = new URLSearchParams(location.search);
    const activeTab = params.get('tab') || 'personal';

    const handleSelect = (key) => {
        history.push(`${location.pathname}?tab=${key}`);
    };
    const logOut = () => {
        dispatch(logoutUser());
        window.location.reload();
    }

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const selectProfile = createSelector(
        (state) => state.Profile,
        (profile) => ({
            profile: profile.profile
        })
    );
    const { profile } = useSelector(selectProfile);
    useEffect(() => {
        dispatch(onGetProfile());
    }, [dispatch]);

    const updateProfile = async (profile) => {
        const res = await dispatch(onUpdateProfile(profile));
        if (res) {
            dispatch(onGetProfile());
        }
    }

    const selectUnreadCount = createSelector(
        (state) => state.Messages.chatFriends,
        (chatFriends) => {
            if (!Array.isArray(chatFriends)) return 0;
            return chatFriends.reduce((sum, f) => sum + (f.unreadCount || 0), 0);
        }
    );


    const unreadMessages = useSelector(selectUnreadCount);
    // console.log(unreadMessages);

    return (
        <>
            <section className="tab-section">
                <Container>
                    <Tab.Container defaultActiveKey="personal" activeKey={activeTab} onSelect={handleSelect}>
                        <Row>
                            <Col lg="3" md="4">
                                <Nav className="flex-column course-details-feature">
                                    <Nav.Item>
                                        <Nav.Link eventKey="personal">
                                            <i className="las la-user"></i> {tabBoxText[lang].personal_info}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="friends">
                                            <i className="las la-users"></i> {tabBoxText[lang].friends}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            eventKey="messages"
                                            style={{
                                                position: "relative",
                                            }}
                                        >
                                            <i className="las la-comments"></i> {tabBoxText[lang].messages}
                                            {unreadMessages > 0 && activeTab !== "messages" && (
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        top: 10,
                                                        right: 10,
                                                        background: "#182B49",
                                                        color: "#fff",
                                                        borderRadius: "50%",
                                                        width: 20,
                                                        height: 20,
                                                        fontSize: "12px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    {unreadMessages}
                                                </span>
                                            )}
                                        </Nav.Link>
                                    </Nav.Item>


                                    <Nav.Item>
                                        <Nav.Link eventKey="certificate">
                                            <i className="las la-certificate"></i> {tabBoxText[lang].certificate}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="graduates">
                                            <i className="las la-graduation-cap"></i> {tabBoxText[lang].graduates}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="notification">
                                            <i className="las la-bell"></i> {tabBoxText[lang].notifications}
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={logOut}>
                                            <i className="las la-sign-out-alt"></i> {tabBoxText[lang].logout}
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg="9" md="8" className={"px-1"}>
                                <Tab.Content className={"bg-white p-4 tab-section-content"}
                                    style={{ margin: "0 15px" }}
                                >
                                    <Tab.Pane eventKey="personal">
                                        <Personal profile={profile} updateProfile={updateProfile} />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="friends">
                                        <Friends profile={profile} />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="messages">
                                        <Messages profile={profile} />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="certificate">
                                        <Certificate profile={profile} />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="graduates">
                                        <Graduates />
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="notification">
                                        <Notification />
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>
        </>
    )
}

export default TabBox
