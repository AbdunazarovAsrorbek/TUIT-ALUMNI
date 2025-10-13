import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/pageNotFound.js';
import Image404 from "../../assets/image/404.png";
import textData from "../../data/404/error.json";
import i18n from "../../i18n"

const PageNotFound = ({ location }) => {
    const lang = location.pathname.split('/')[1] || 'uz';

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    return (
        <Styles>
            <div className="main-wrapper error-page">
                <HeaderTwo lang={lang} />

                <section
                    className="error-area"
                    style={{ backgroundImage: `url(${Image404})` }}
                >
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="error-box text-center">
                                    <h1>4<span>0</span>4</h1>
                                    <h3>{textData[lang].title}</h3>
                                    <p>{textData[lang].text}</p>
                                    <Link to={`/${lang}`}>{textData[lang].home}</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <FooterTwo lang={lang} />
            </div>
        </Styles>
    );
}

export default PageNotFound;
