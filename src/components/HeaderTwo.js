import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/headerTwo.js";
import { logoutUser } from "../slice/auth/login/thunk";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/image/logo.png";
import { createSelector } from 'reselect';
import { useTranslation } from "react-i18next";
import Sidebar from "../components/common/Sidebar.js"
import i18n from "../i18n"

const HeaderTwo = ({ lang }) => {
    const { t } = useTranslation("headerTwo");
    const dispatch = useDispatch();
    const [activeLang, setActiveLang] = useState(lang);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const handleChangeLang = (lang) => {
        setActiveLang(lang);
        changeLanguage(lang);
    };

    const langLabels = {
        uz: t("header.languages.uz"),
        ru: t("header.languages.ru"),
        en: t("header.languages.en")
    };

    const langFlags = {
        uz: "/assets/images/uz.png",
        ru: "/assets/images/ru.png",
        en: "/assets/images/en.png",
    };
    const user = JSON.parse(localStorage.getItem('authAlumni'));
    const logOut = () => {
        dispatch(logoutUser());
        window.location.reload();
    }

    const history = useHistory();

    const changeLanguage = (lng) => {
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/(uz|ru|en)/, `/${lng}`);
        history.push(newPath);
    };

    const selectUnreadCount = createSelector(
        (state) => state.Messages.chatFriends,
        (chatFriends) => {
            if (!Array.isArray(chatFriends)) return 0;
            return chatFriends.reduce((sum, f) => sum + (f.unreadCount || 0), 0)
        }
    )

    const unreadMessages = useSelector(selectUnreadCount);

    return (<Styles>
        <section className="top-bar2">
            <Container>
                <Row>
                    <Col lg="7" md="9">
                        <div className="bar-left">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><i className="las la-phone"></i>{t("header.phone")}</li>
                                <li className="list-inline-item"><i className="las la-envelope"></i>{t("header.email")}</li>
                                <li className="list-inline-item"><i className="las la-map-marker"></i>{t("header.address")}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="5" md="3">
                        <div className="bar-right d-flex justify-content-end">
                            <ul className="list-unstyled list-inline bar-lang">
                                <li className="list-inline-item">
                                    <Dropdown>
                                        <Dropdown.Toggle style={{ display: "flex", alignItems: "center", justifyContent: "left", gap: 1 }}>
                                            <img
                                                src={process.env.PUBLIC_URL + langFlags[activeLang]}
                                                alt="lang"
                                                style={{ width: 40, height: 11 }}
                                            />
                                            <span style={{ padding: 0, marginTop: 2 }}>{langLabels[activeLang]}</span> <i className="las la-angle-down"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul">
                                            <Dropdown.Item as="li" onClick={() => handleChangeLang('uz')} style={{ display: "flex", alignItems: "center", justifyContent: "left", gap: 1 }}>
                                                <img src={process.env.PUBLIC_URL + "/assets/images/uz.png"} alt="uz" style={{ width: 20 }} />
                                                <span>{t("header.languages.uz")}</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item as="li" onClick={() => handleChangeLang('ru')} style={{ display: "flex", alignItems: "center", justifyContent: "left", gap: 1 }}>
                                                <img src={process.env.PUBLIC_URL + "/assets/images/ru.png"} alt="ru" style={{ width: 20 }} />
                                                <span>{t("header.languages.ru")}</span>
                                            </Dropdown.Item>
                                            <Dropdown.Item as="li" onClick={() => handleChangeLang('en')} style={{ display: "flex", alignItems: "center", justifyContent: "left", gap: 1 }}>
                                                <img src={process.env.PUBLIC_URL + "/assets/images/en.png"} alt="en" style={{ width: 20 }} />
                                                <span>{t("header.languages.en")}</span>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                            <ul className="list-unstyled list-inline bar-social">
                                <li className="list-inline-item">
                                    <a href={"https://t.me/tuituz_official"} target={"_blank"} rel="noopener noreferrer">
                                        <i className="fab fa-telegram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.youtube.com/channel/UC0aN4MLNCjMAyvUOgGXzBSA"}
                                        target={"_blank"} rel="noopener noreferrer">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.instagram.com/tuit.official/?r=nametag"} target={"_blank"} rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={"https://www.facebook.com/TUIT1955"} target={"_blank"} rel="noopener noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                            </ul>

                            <ul className="list-unstyled list-inline sidebar-button">
                                <li className="list-inline-item nav-item side-box">
                                    <Sidebar lang={lang} />
                                </li>

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Logo Area 2 */}
        <section className="logo-area2">
            <Container>
                <Row style={{ display: "flex", alignItems: "center" }}>
                    <Col md="3">
                        <div className="logo">
                            <Link to={`/${lang}`}>
                                <img src={logo} alt="img" style={{ width: "55px", height: "55px" }} />
                                <span>{t("header.university")}</span>
                            </Link>
                        </div>
                    </Col>
                    <Col md="9">
                        <div className="menu-box d-flex justify-content-between align-items-center">
                            <ul className="nav menu-nav">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={`/${lang}`}>{t("header.menu.home")}</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to={`/${lang}/regulation`}>{t("header.menu.regulation")}</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={`/${lang}/news`}>{t("header.menu.news")}</Link></li>
                                <li className="nav-item"><Link className="nav-link" to={`/${lang}/events`}>{t("header.menu.events")}</Link></li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to={`/${lang}#`}>
                                        {t("header.menu.graduates")} <i className="las la-angle-down"></i>
                                    </Link>
                                    <ul className="dropdown list-unstyled">
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/instructor`}>{t("header.menu.graduates_list")}</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/graduates-association`}>{t("header.menu.graduates_association")}</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/Vacancy`}>{t("header.menu.vacancy")}</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to={`/${lang}/media`}>{t("header.menu.media")}</Link></li>
                            </ul>

                            {!user ? (
                                <div className="apply-btn">
                                    <Link to={`/${lang}/registration`}>
                                        <i className="las la-clipboard-list"></i>{t("header.auth.join")}
                                    </Link>
                                </div>
                            ) : (
                                <div className="user-settings">
                                    <div className="user-info">
                                        <div className="user_icon"><span>{user.lastName?.charAt(0)}</span></div>
                                        <div className="user-settings-name"><span>{`${user?.firstName} ${user?.lastName}`}</span></div>
                                    </div>
                                    <ul className="dropdown list-unstyled">
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/profile?tab=personal`}><i className="las la-user"></i> {t("header.auth.profile")}</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/profile?tab=messages`}><i className="las la-comment"></i> {t("header.auth.messages")}
                                            {unreadMessages > 0 && <span style={{ position: "absolute", top: 8, right: 8, background: "#182B49", borderRadius: "50%", width: 10, height: 10, display: "inline-block" }} />}
                                        </Link></li>
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/profile?tab=notification`}><i className="las la-bell"></i> {t("header.auth.notifications")}</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to={`/${lang}/profile?tab=certificate`}><i className="las la-certificate"></i> {t("header.auth.certificate")}</Link></li>
                                        <li className="nav-item"><p className="nav_button" onClick={logOut}><i className="las la-sign-out-alt"></i> {t("header.auth.logout")}</p></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Sticky Menu */}
        <StickyMenu lang={lang} />
        <MobileMenu lang={lang} />
    </Styles>)
}

export default HeaderTwo
