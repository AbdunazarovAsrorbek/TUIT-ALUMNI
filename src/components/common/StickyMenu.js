import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import { logoutUser } from "../../slice/auth/login/thunk";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from 'reselect';
import { useTranslation } from 'react-i18next';

function StickyMenu({ lang }) {
    const dispatch = useDispatch();
    const { t } = useTranslation("stickyMenu"); // <-- shu yerda namespace tanlanadi

    useEffect(() => {
        const handleScroll = () => {
            const stickyMenu = document.querySelector(".sticky-menu");
            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const user = JSON.parse(localStorage.getItem('authAlumni'));

    const logOut = () => {
        dispatch(logoutUser());
        window.location.reload();
    }

    const selectUnreadCount = createSelector(
        (state) => state.Messages.chatFriends,
        (chatFriends) => {
            if (!Array.isArray(chatFriends)) return 0;
            return chatFriends.reduce((sum, f) => sum + (f.unreadCount || 0), 0)
        }
    )
    const unreadMessages = useSelector(selectUnreadCount);

    return (
        <Styles>
            <section className="sticky-menu">
                <Container>
                    <Row style={{ display: "flex", alignItems: "center" }}>
                        <Col md="3">
                            <div className="logo">
                                <Link to={`/${lang}`}>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt=""
                                        style={{ width: "55px", height: "55px" }} />
                                    <span>{t("title")}</span>
                                </Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box">
                                <ul className="nav menu-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to={`/${lang}`}>
                                            {t("home")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/${lang}/regulation`}>
                                            {t("regulation")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/${lang}/news`}>
                                            {t("news")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/${lang}/events`}>
                                            {t("events")}
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={`/${lang}#`}>
                                            {t("graduates")} <i className="las la-angle-down"></i>
                                        </Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/instructor`}>
                                                    {t("graduates_list")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/graduates-association`}>
                                                    {t("graduates_association")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/vacancy`}>
                                                    {t("vacancy")}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/${lang}/media`}>
                                            {t("media")}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={`/${lang}/fund`}>
                                            {t("fund")}
                                        </Link>
                                    </li>
                                </ul>

                                {!user ? (
                                    <div className="apply-btn">
                                        <Link to={`/${lang}/registration`}>
                                            <i className="las la-clipboard-list"></i> {t("join")}
                                        </Link>
                                    </div>
                                ) : (
                                    <div className={"user-settings"}>
                                        <div className={"user-info"}>
                                            <div className={"user_icon"}>
                                                <span>{user.lastName?.charAt(0)}</span>
                                            </div>
                                            <div className="user-settings-name">
                                                <span>{`${user.firstName} ${user.lastName}`}</span>
                                            </div>
                                        </div>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/profile?tab=personal`}>
                                                    <i className="las la-user"></i> {t("profile")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/profile?tab=messages`}>
                                                    <i className="las la-comment"></i> {t("messages")}
                                                    {unreadMessages > 0 && (
                                                        <span style={{
                                                            position: "absolute",
                                                            top: 8,
                                                            right: 8,
                                                            background: "#182B49",
                                                            borderRadius: "50%",
                                                            width: 10,
                                                            height: 10,
                                                            display: "inline-block"
                                                        }} />
                                                    )}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/profile?tab=notification`}>
                                                    <i className="las la-bell"></i> {t("notifications")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${lang}/profile?tab=certificate`}>
                                                    <i className="las la-certificate"></i> {t("certificate")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <p className="nav_button" onClick={logOut}>
                                                    <i className="las la-sign-out-alt"></i> {t("logout")}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu;
