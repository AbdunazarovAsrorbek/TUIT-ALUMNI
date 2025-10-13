import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Styles } from './styles/mobileMenu.js';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../slice/auth/login/thunk';
import { createSelector } from 'reselect';
import menuText from '../../data/mbSidebar/mbSidebarJson.json';
import i18n from "../../i18n";

function MobileMenu({ lang }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [activeLang, setActiveLang] = useState(lang);
    const [userData, setUserData] = useState(null);

    const mbTextJson = React.useMemo(() => menuText[activeLang], [activeLang]);

    const langLabels = mbTextJson.language;

    useEffect(() => {
        const savedLang = localStorage.getItem('appLang') || lang;
        setActiveLang(savedLang);
        i18n.changeLanguage(savedLang);
    }, [lang]);


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('authAlumni'));
        setUserData(user);
    }, []);

    const handleChangeLang = (lng) => {
        setActiveLang(lng);
        i18n.changeLanguage(lng);
        localStorage.setItem('appLang', lng); 
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/(uz|ru|en)/, `/${lng}`);
        history.push(newPath);
    };

    const logOut = () => {
        dispatch(logoutUser());
        localStorage.removeItem('authAlumni');
        history.push(`/${lang}/login`);
    };

    // Sidebar toggle
    useEffect(() => {
        const hmBtn = document.getElementById('mb-sidebar-btn');
        const mdSidebarOverlay = document.getElementById('mb-sidebar-overlay');
        const mdSidebarBody = document.getElementById('mb-sidebar-body');
        const mdSidebarExit = document.getElementById('close-mb-sidebar');

        const toggleSidebar = (e) => {
            e.preventDefault();
            if (mdSidebarOverlay) mdSidebarOverlay.classList.toggle('visible');
            if (mdSidebarBody) mdSidebarBody.classList.toggle('opened');
        };

        const closeSidebar = (e) => {
            e.preventDefault();
            if (mdSidebarOverlay) mdSidebarOverlay.classList.remove('visible');
            if (mdSidebarBody) mdSidebarBody.classList.remove('opened');
        };

        if (hmBtn) hmBtn.addEventListener('click', toggleSidebar);
        if (mdSidebarOverlay) mdSidebarOverlay.addEventListener('click', closeSidebar);
        if (mdSidebarExit) mdSidebarExit.addEventListener('click', closeSidebar);

        return () => {
            if (hmBtn) hmBtn.removeEventListener('click', toggleSidebar);
            if (mdSidebarOverlay) mdSidebarOverlay.removeEventListener('click', closeSidebar);
            if (mdSidebarExit) mdSidebarExit.removeEventListener('click', closeSidebar);
        };
    }, []);

    // Expandable menu toggle
    useEffect(() => {
        const menuButtons = document.querySelectorAll('.mb-menu-button');

        const handleToggle = (e) => {
            const button = e.currentTarget;
            button.classList.toggle('active');
            const content = button.nextElementSibling;

            if (button.classList.contains('active')) {
                content.className = 'mb-menu-content show';
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.className = 'mb-menu-content';
                content.style.maxHeight = '0';
            }
        };

        menuButtons.forEach((button) => button.addEventListener('click', handleToggle));

        return () => {
            menuButtons.forEach((button) => button.removeEventListener('click', handleToggle));
        };
    }, []);

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
            {/* Topbar and logo */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between align-items-center">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>{menuText[activeLang].topbar_phone}</p>
                                </div>
                                <div className="topbar-item">
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                            <Dropdown>
                                                <Dropdown.Toggle style={{ backgroundColor: "transparent", border: "none", outline: "none", padding: 0, boxShadow: "none" }} aria-controls="basic-dropdown">
                                                    {langLabels[activeLang]}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu as="ul">
                                                    <Dropdown.Item as="li" onClick={() => handleChangeLang('uz')}>{langLabels.uz}</Dropdown.Item>
                                                    <Dropdown.Item as="li" onClick={() => handleChangeLang('ru')}>{langLabels.ru}</Dropdown.Item>
                                                    <Dropdown.Item as="li" onClick={() => handleChangeLang('en')}>{langLabels.en}</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-logo-area d-flex justify-content-between align-items-center">
                                <div className="mb-logo-box d-flex align-items-center">
                                    <div className="hm-button">
                                        <Link to={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </Link>
                                    </div>
                                </div>

                                {!userData ? (
                                    <div className={"login-register"}>
                                        <ul className="list-unstyled list-inline">
                                            <li className="list-inline-item">
                                                <Link to={`/${lang}/login`}>{menuText[activeLang].login}</Link>
                                            </li>
                                            <li className="list-inline-item">/</li>
                                            <li className="list-inline-item">
                                                <Link to={`/${lang}/registration`}>{menuText[activeLang].register}</Link>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className={"user-setting"}>
                                        <div className={"user-info"}>
                                            <div className={"user_icon"}>
                                                <span>{userData.lastName?.charAt(0)}</span>
                                            </div>
                                            <div className="user-settings-name">
                                                <span>{`${userData?.firstName} ${userData?.lastName}`}</span>
                                            </div>
                                        </div>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=personal`}>
                                                    <i className="las la-user"></i> {menuText[activeLang].user_profile}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=messages`}>
                                                    <i className="las la-comment"></i> {menuText[activeLang].messages}
                                                    {unreadMessages > 0 && (
                                                        <span style={{ position: "absolute", top: 6, right: 6, background: "#182B49", borderRadius: "50%", width: 10, height: 10, display: "inline-block" }} />
                                                    )}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=notification`}>
                                                    <i className="las la-bell"></i> {menuText[activeLang].notifications}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={`/${activeLang}/profile?tab=certificate`}>
                                                    <i className="las la-certificate"></i> {menuText[activeLang].certificate}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <p className="nav_button" onClick={logOut}>
                                                    <i className="las la-sign-out-alt"></i> {menuText[activeLang].logout}
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

            {/* Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                    <h5>{menuText[activeLang].menu.home}</h5>
                    <a href="#" id="close-mb-sidebar"><i className="las la-times"></i></a>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item"><Link to={`/${lang}`} className="mb-menu-Link">{menuText[activeLang].menu.home}</Link></div>
                    <div className="mb-menu-item"><Link to={`/${lang}/about`} className="mb-menu-Link">{menuText[activeLang].menu.about}</Link></div>
                    <div className="mb-menu-item"><Link to={`/${lang}/regulation`} className="mb-menu-Link">{menuText[activeLang].menu.regulation}</Link></div>
                    <div className="mb-menu-item"><Link to={`/${lang}/news`} className="mb-menu-Link">{menuText[activeLang].menu.news}</Link></div>
                    <div className="mb-menu-item"><Link to={`/${lang}/events`} className="mb-menu-Link">{menuText[activeLang].menu.events}</Link></div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button"><p>{menuText[activeLang].bitiruvchilar_expand} <i className="las la-plus"></i></p></button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                                <li><Link to={`/${lang}/instructor`}>{menuText[activeLang].menu.graduates}</Link></li>
                                <li><Link to={`/${lang}/graduates-association`}>{menuText[activeLang].menu.graduates_club}</Link></li>
                                <li><Link to={`/${lang}/vacancy`}>{menuText[activeLang].menu.vacancy}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item"><Link to={`/${lang}/media`} className="mb-menu-Link">{menuText[activeLang].menu.media}</Link></div>
                </div>
            </section>

            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    );
}

export default MobileMenu;
