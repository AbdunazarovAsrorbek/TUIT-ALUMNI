import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import Sidebar from './common/Sidebar';
import StickyMenu from './common/StickyMenu';
import MobileMenu from './common/MobileMenu';
import { Styles } from "./styles/header.js";
import { logoutUser } from "../slice/auth/login/thunk";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from 'reselect';
import headerJson from "../data/header/headerJson.json";

const Header = ({ lang }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('authAlumni'));
    const [activeLang, setActiveLang] = useState(lang);

    const t = headerJson[activeLang];

    const handleChangeLang = (lang) => {
        setActiveLang(lang);
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/(uz|ru|en)/, `/${lang}`);
        history.push(newPath);
    };

    const langFlags = {
        uz: "/assets/images/uz.png",
        ru: "/assets/images/ru.png",
        en: "/assets/images/en.png",
    };

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
    );

    const unreadMessages = useSelector(selectUnreadCount);

    return (
        <Styles>
            {/* Top Bar */}
            <section className="top-bar">
                <Container>
                    <Row>
                        <Col lg="6" md="5">
                            <div className="bar-left">
                                <ul className="list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <i className="las la-map-marker"></i> {t.topBar.address}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="6" md="7">
                            <div className="bar-right d-flex justify-content-end">
                                <ul className="list-unstyled list-inline bar-social">
                                    <li className="list-inline-item">
                                        <a href={t.topBar.socials.telegram} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href={t.topBar.socials.youtube} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href={t.topBar.socials.instagram} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href={t.topBar.socials.facebook} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled list-inline bar-lang">
                                    <li className="list-inline-item">
                                        <Dropdown>
                                            <Dropdown.Toggle as="a" className="dropdown-toggle"
                                                style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                                <img src={process.env.PUBLIC_URL + langFlags[activeLang]} alt="lang" style={{ width: 40, height: 11, borderRadius: 0 }} />
                                                <span>{t.languages[activeLang]}</span>
                                                <i className="las la-angle-down"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                {Object.keys(t.languages).map((l) => (
                                                    <Dropdown.Item key={l} as="li" onClick={() => handleChangeLang(l)}
                                                        style={{ display: "flex", alignItems: "center", gap: 5 }}>
                                                        <img src={process.env.PUBLIC_URL + langFlags[l]} alt={l} style={{ width: 20 }} />
                                                        <span>{t.languages[l]}</span>
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                                {!user ? (
                                    <ul className="list-unstyled list-inline bar-login">
                                        <li className="list-inline-item">
                                            <Link to={`/${activeLang}/login`}><i className="las la-user"></i> {t.topBar.login}</Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to={`/${activeLang}/registration`}><i className="las la-user-edit"></i> {t.topBar.register}</Link>
                                        </li>
                                    </ul>
                                ) : ""}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Logo Area */}
            <section className="logo-area">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col md="3">
                            <div className="logo">
                                <Link to={`/${activeLang}`}>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" style={{ width: "55px", height: "55px" }} />
                                    <span>{t.universityName.text}</span>
                                </Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="logo-contact-box d-flex align-items-center justify-content-end">
                                <div className="emcontact-box d-flex">
                                    <div className="box-icon"><i className="flaticon-phone-call"></i></div>
                                    <div className="box-content">
                                        <p>{t.topBar.contacts.phoneLabel}</p>
                                        <span>{t.topBar.contacts.phone}</span>
                                    </div>
                                </div>
                                <div className="emcontact-box d-flex">
                                    <div className="box-icon"><i className="flaticon-envelope"></i></div>
                                    <div className="box-content">
                                        <p>{t.topBar.contacts.emailLabel}</p>
                                        <span>{t.topBar.contacts.email}</span>
                                    </div>
                                </div>
                                {!user ? (
                                    <div className="apply-btn">
                                        <Link to={`/${activeLang}/registration`}><i className="las la-clipboard-list"></i>{t.topBar.apply}</Link>
                                    </div>
                                ) : (
                                    <div className="user-settings">
                                        <div className="user-info">
                                            <div className="user_icon">
                                                <span>{user.lastName?.charAt(0)}</span>
                                            </div>
                                            <div className="user-settings-name">
                                                <span>{`${user.firstName} ${user.lastName}`}</span>
                                            </div>
                                        </div>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=personal`}><i className="las la-user"></i> {t.userMenu.personal}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=messages`}><i className="las la-comment"></i> {t.userMenu.messages}
                                                    {unreadMessages > 0 && <span style={{ position: "absolute", top: 8, right: 8, background: "#182B49", borderRadius: "50%", width: 10, height: 10, display: "inline-block" }} />}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=notification`}><i className="las la-bell"></i> {t.userMenu.notifications}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=certificate`}><i className="las la-certificate"></i> {t.userMenu.certificate}</Link>
                                            </li>
                                            <li className="nav-item">
                                                <p className="nav_button" onClick={logOut}><i className="las la-sign-out-alt"></i> {t.userMenu.logout}</p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Navbar */}
            <section className="main-menu">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="main-menu-box">
                                <div className="menu-box d-flex justify-content-between">
                                    <ul className="nav menu-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to={`/${activeLang}/`}>{t.navbar.home}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={`/${activeLang}/about`}>{t.navbar.about}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link dropdown-toggle" to={`/${activeLang}/regulation`}>{t.navbar.regulation}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={`/${activeLang}/news`}>{t.navbar.news}</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={`/${activeLang}/events`}>{t.navbar.events}</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={"#"}>{t.navbar.graduates} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                                <li className="nav-item"><Link className="nav-link" to={`/${activeLang}/instructor`}>{t.navbar.graduatesDropdown.graduatesList}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={`/${activeLang}/graduates-association`}>{t.navbar.graduatesDropdown.alumniClub}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={`/${activeLang}/vacancy`}>{t.navbar.graduatesDropdown.vacancy}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to={`/${activeLang}/media`}>{t.navbar.media}</Link>
                                        </li>
                                    </ul>
                                    <ul className="nav search-cart-bar">
                                        <li className="nav-item side-box"><Sidebar lang={activeLang} /></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Sticky Menu */}
            <StickyMenu lang={activeLang} />

            {/* Mobile Menu */}
            <MobileMenu lang={activeLang} />
        </Styles>
    )
}

export default Header;
