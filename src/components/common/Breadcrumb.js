import React, { Component } from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Styles } from "./styles/breadcrumb.js";
import bgImage from "../../assets/image/banner4.png";
import { Link } from 'react-router-dom';
import BreadcrumbData from "../../data/breadcrumb/Breadcrumb.json";

export class BreadcrumbBox extends Component {
    render() {
        
        const lang = this.props.lang || 'uz'; 

        return (
            <Styles>
                <section
                    className="breadcrumb-area"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <Container>
                        <Row>
                            <Col md="12" className="text-center">
                                <div className="breadcrumb-box">
                                    <h2 className="breadcrumb-title">{this.props.title}</h2>
                                    <Breadcrumb>
                                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                                            {BreadcrumbData[lang].home}
                                        </Breadcrumb.Item>
                                        <Breadcrumb.Item active>{this.props.title}</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        );
    }
}
