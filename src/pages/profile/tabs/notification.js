import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import {
    getNotification as onGetNotification,
    acceptRequest as onAcceptRequest,
    rejectRequest as onRejectRequest,
    getAllAcceptRequest as onGetAllAcceptRequest,
    getAllRejectRequest as onGetAllRejectRequest,
} from "../../../slice/notification/thunk";
import { getFriends as onGetFriends } from "../../../slice/friends/thunk"
import notificationText from "../../../data/profile/notificationJson.json";

const url = process.env.REACT_APP_API_URL;

const Notification = () => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState("pending");
    const [resData, setResData] = useState([]);

    const location = useLocation();
    const lang = location.pathname.split('/')[1];
    const text = notificationText[lang];

    const selectGraduate = createSelector(
        (state) => state.Notification,
        (graduate) => ({
            graduate: graduate.notification.content
        })
    );

    const { graduate } = useSelector(selectGraduate);

    useEffect(() => {
        switch (status) {
            case "pending":
                dispatch(onGetNotification());
                break;
            case "rejected":
                dispatch(onGetAllRejectRequest());
                break;
            case "accepted":
                dispatch(onGetAllAcceptRequest());
                break;
            default:
                return
        }
    }, [dispatch, status]);

    useEffect(() => {
        if (graduate) setResData(graduate);
    }, [graduate]);

    const handleReject = (item) => {
        if (item.id) dispatch(onRejectRequest(item.id));
    }
    const handleAccept = (item) => {
        if (item.id) dispatch(onAcceptRequest(item.id));
        dispatch(onGetFriends());
    }

    return (
        <>
            <div className={"notification_header"}>
                <h4 className="tab-title">{text.notification_title}</h4>
                <select onChange={(e) => setStatus(e.target.value)}>
                    <option value={"pending"}>{text.status_pending}</option>
                    <option value={"accepted"}>{text.status_accepted}</option>
                    <option value={"rejected"}>{text.status_rejected}</option>
                </select>
            </div>
            <hr />
            {resData.length > 0 ? graduate.map((item, i) => (
                <div className="event-box" key={i}>
                    <div className="event-content">
                        <div className="content-box">
                            <Row>
                                <Col md="2">
                                    <div className="event-img">
                                        {item.imageUrl ? (
                                            <Link to={"#"}>
                                                <img src={url + item.imageUrl} alt="" className="img-fluid" />
                                            </Link>
                                        ) : (
                                            <div className={"notification_not-img"}>
                                                <p>{item.firstName?.charAt(0)}.{item.lastName?.charAt(0)}</p>
                                            </div>
                                        )}
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="event-title">
                                        <h6>
                                            <Link to={"#"}>{item.firstName} {item.lastName} {item.patronymic}</Link>
                                        </h6>
                                    </div>

                                    <div className="event-desc">
                                        <div>
                                            <p><i className="las la-calendar"></i> {item.graduationYear}</p>
                                            <p><i className="las la-book"></i> {item.faculty}</p>
                                        </div>
                                        <p><i className="las la-envelope"></i> {item.email}</p>
                                        <p><i className="las la-phone"></i> {item.phoneNumber}</p>
                                    </div>

                                </Col>

                                <Col md="4" className="text-center p-0">
                                    <div className="event-date">
                                        <p>{item.createdAt?.slice(0, 10)}</p>
                                    </div>
                                    {status === "pending" && (
                                        <div className={"button_notification"}>
                                            <div className="join-btn">
                                                <button onClick={() => handleReject(item)}>
                                                    <i className="las la-times"></i> {text.button_reject}
                                                </button>
                                            </div>
                                            <div className="join-btn">
                                                <button className={"btn_light"} onClick={() => handleAccept(item)}>
                                                    <i className="las la-check"></i> {text.button_accept}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                    {status === "rejected" && (
                                        <div className={"notification_reject"}>
                                            <p>
                                                <i className="las la-times"></i> {text.status_rejected}
                                            </p>
                                        </div>
                                    )}
                                    {status === "accepted" && (
                                        <div className={"notification_accept"}>
                                            <i className="las la-check"></i> {text.status_accepted}
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </div>
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
            )}
        </>
    )
}

export default Notification;
