import React from 'react';
import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import {Styles} from "./styles/tabBox.js";
import { useLocation, useHistory } from 'react-router-dom';

const TabBox = () => {

    const location = useLocation();
    const history = useHistory();

    const params = new URLSearchParams(location.search);
    const activeTab = params.get('tab') || 'why';

    const handleSelect = (key) => {
        history.push(`${location.pathname}?tab=${key}`);
    };
    const logOut = ()=> {
        console.log("logOut")
    }

    return (
        <Styles>
            {/* Tab Box Area */}
            <section className="tab-section">
                <Container>
                    <Tab.Container defaultActiveKey="why" activeKey={activeTab} onSelect={handleSelect}>
                        <Row>
                            <Col lg="3" md="4">
                                <Nav className="flex-column course-details-feature">
                                    <Nav.Item>
                                        <Nav.Link eventKey="why">
                                            <i className="las la-user"></i> Shaxsiy ma'lumotlar
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="mission"> <i
                                            className="las la-users"></i> Do'stlarim</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="vision">
                                            <i className="las la-certificate"></i> Sertifikat</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="ranking"><i
                                            className="las la-graduation-cap"></i> Bitiruvchilar
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="notifikation"><i
                                            className="las la-bell"></i> Bildirishnomalar
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={logOut}>
                                            <i className="las la-sign-out-alt"></i> Tizimdan chiqish
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg="9" md="8" className={"px-1"}>
                                <Tab.Content className={"bg-white p-4 tab-section-content"}>
                                    <Tab.Pane eventKey="why">
                                        <h4 className="tab-title">Why Edulyn</h4>
                                        <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus
                                            facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem
                                            ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                                            Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga
                                            ipsum quia debitis totam, tempore laudantium quasi dicta dolorem
                                            deleniti.</p>
                                        <ul className="list-unstyled check-list">
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="mission">
                                        <h4 className="tab-title">Our Mission</h4>
                                        <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus
                                            facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem
                                            ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                                            Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga
                                            ipsum quia debitis totam, tempore laudantium quasi dicta dolorem
                                            deleniti.</p>
                                        <ul className="list-unstyled check-list">
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="vision">
                                        <h4 className="tab-title">Our Vision</h4>
                                        <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus
                                            facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem
                                            ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                                            Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga
                                            ipsum quia debitis totam, tempore laudantium quasi dicta dolorem
                                            deleniti.</p>
                                        <ul className="list-unstyled check-list">
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="ranking">
                                        <h4 className="tab-title">Our Ranking</h4>
                                        <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus
                                            facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem
                                            ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                                            Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga
                                            ipsum quia debitis totam, tempore laudantium quasi dicta dolorem
                                            deleniti.</p>
                                        <ul className="list-unstyled check-list">
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="notifikation">
                                        <h4 className="tab-title">Our Ranking</h4>
                                        <p className="tab-desc">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus
                                            facere a nisi fuga rem quas molestias, eveniet minima molestiae. Lorem
                                            ipsum dolor, sit amet consectetur adipisicing elit. Ea, recusandae?
                                            Assumenda, error. Quam dicta iusto saepe. Odit minus voluptas, fuga
                                            ipsum quia debitis totam, tempore laudantium quasi dicta dolorem
                                            deleniti.</p>
                                        <ul className="list-unstyled check-list">
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                            <li><i className="fa fa-check"></i>Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis
                                                necessitatibus hic natus facere.
                                            </li>
                                        </ul>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>
        </Styles>
    )

}

export default TabBox
