import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/iconBox.js";
import { useTranslation } from 'react-i18next';
import Datas from '../data/icon-box/icon-box.json';

const IconBox = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const datas = Datas[currentLang] || Datas['uz'];

    return (
        <Styles>
            <section className="icon-box-area">
                <Container>
                    <Row>
                        {datas.map((data, i) => (
                            <Col md="4" key={i}>
                                <div className="full-icon-box">
                                    <div className="icon-box d-flex">
                                        <div className={data.uniqClass}>
                                            <i className={data.boxIcon}></i>
                                        </div>
                                        <div className="box-title">
                                            <h6>{data.title}</h6>
                                            <p>{data.subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </Styles>
    );
};

export default IconBox;
