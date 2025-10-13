import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerTwo.js";
import logo from "../assets/image/logo.png";
import { useTranslation } from "react-i18next";

function FooterTwo({ lang }) {
    
    const { t } = useTranslation("footerTwo");

    return (
        <Styles>
            {/* Footer Two */}
            <footer
                className="footer2"
                style={{ backgroundImage: `url(https://static.tuit.uz/assets/c4c88c23/img/bg/home-bg.jpg)` }}
            >
                <Container>
                    <Row>
                        {/* Left logo + description */}
                        <Col md="3">
                            <div className="footer-logo-info">
                                <img src={logo} alt="img" className="img-fluid" />
                                <p>{t("footer.description")}</p>
                            </div>
                        </Col>

                        {/* Useful Links */}
                        <Col md="3">
                            <div className="f-links">
                                <h5>{t("footer.useful_links_title")}</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://tuit.uz/">
                                            <i className="las la-angle-right"></i> {t("footer.useful_links.tuit")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://admission.tuit.uz/">
                                            <i className="las la-angle-right"></i> {t("footer.useful_links.admission")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://70.tuit.uz/">
                                            <i className="las la-angle-right"></i> {t("footer.useful_links.anniversary")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://unilibrary.uz/">
                                            <i className="las la-angle-right"></i> {t("footer.useful_links.library")}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://tuit.uz/rektorat">
                                            <i className="las la-angle-right"></i> {t("footer.useful_links.management")}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        {/* Quick Links */}
                        <Col md="3">
                            <div className="f-links">
                                <h5>{t("footer.quick_links_title")}</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to={`/${lang}/regulation`}>
                                            <i className="las la-angle-right"></i> {t("footer.quick_links.regulation")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/${lang}/news`}>
                                            <i className="las la-angle-right"></i> {t("footer.quick_links.news")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/${lang}/events`}>
                                            <i className="las la-angle-right"></i> {t("footer.quick_links.events")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/${lang}/instructor`}>
                                            <i className="las la-angle-right"></i> {t("footer.quick_links.graduates")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={`/${lang}/graduates-association`}>
                                            <i className="las la-angle-right"></i> {t("footer.quick_links.graduates_association")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        {/* Contact */}
                        <Col md="3">
                            <div className="f-links">
                                <h5>{t("footer.contact_title")}</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="#">
                                            <i className="las la-map-marker"></i> {t("footer.contact.address")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="las la-envelope"></i> {t("footer.contact.email")}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="las la-phone"></i> {t("footer.contact.phone")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        {/* Copyright + Social */}
                        <Col md="12">
                            <div className="copytext-area text-center">
                                <p>
                                    {t("footer.copyright.text")};
                                    {/* &nbsp; */}
                                    <Link to="#" target="_blank" rel="noopener noreferrer">
                                        {t("footer.copyright.author")}
                                    </Link>
                                </p>

                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://t.me/tuituz_official" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.youtube.com/channel/UC0aN4MLNCjMAyvUOgGXzBSA"
                                            target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/tuit.official/?r=nametag"
                                            target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/TUIT1955" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top  */}
                <BackToTop />
            </footer>
        </Styles>
    );
}

export default FooterTwo;
