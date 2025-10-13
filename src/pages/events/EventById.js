import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/eventDetails.js';
import { useDispatch, useSelector } from "react-redux";
import { getEvent as onGetEvent, getEventById as onGetEventById } from "../../slice/event/thunk";
import { useLocation } from "react-router-dom";
import SidebarPopularCourse from '../events/SidebarPopularCourse.js';
import i18n from "../../i18n"

// JSON import
import eventByIdJson from "../../data/event/eventById.json";

const baseUrl = process.env.REACT_APP_API_URL;

const EventById = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const locations = useLocation();
    const searchParams = new URLSearchParams(locations.search);
    const id = searchParams.get("id");

    const dispatch = useDispatch();

    const Event = useSelector(
        (state) => state.Event?.eventList || []
    );
    const EventById = useSelector(
        (state) => state.Event?.eventById || []
    );

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        const data = {
            page: 1,
            size: 5
        }
        dispatch(onGetEvent(data));
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(onGetEventById(id))
        }
    }, [dispatch, id]);

    return (
        <Styles>
            <div className="main-wrapper event-details-page">
                {/* Header 2 */}
                <HeaderTwo lang={lang} />

                {/* Breadcrumb */}
                <BreadcrumbBox title={eventByIdJson[lang]?.breadcrumb} lang={lang} />

                {/* Event Details Area */}
                <section className="event-details-area">
                    <Container>
                        {Object.keys(EventById).length !== 0 ? (
                            <Row>
                                <Col lg="9" md="8" sm="12">
                                    <div className="event-details-content">
                                        <div className="heading" style={{ textAlign: 'justify' }}>
                                            <h4>{EventById?.title || eventByIdJson[lang]?.noTitle}</h4>
                                        </div>

                                        <div className="event-icon">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                    <i className="las la-clock"></i>
                                                    {EventById?.eventDate}
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="event-details-banner">
                                            <img
                                                src={`${baseUrl}${EventById?.imageUrl}`}
                                                alt={EventById?.title || eventByIdJson[lang]?.imageAlt}
                                                style={{ width: "100%" }}
                                            />
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: EventById?._translations?.[`content_${lang}`] || EventById?.description }} />
                                    </div>
                                </Col>

                                <Col lg="3" md="4" sm="12">
                                    <div className="event-details-sidebar">
                                        <Row>
                                            <Col md="12">
                                                <SidebarPopularCourse eventList={Event.content} lang={lang} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        ) : (
                            <div className="not_data">
                                <div style={{ textAlign: "center", marginTop: "40px" }}>
                                    <div style={{ color: "#888" }}>
                                        <svg width="74" height="74" viewBox="0 0 24 24" fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            <line x1="8" y1="11" x2="14" y2="11"></line>
                                        </svg>
                                        <p style={{ marginTop: "16px", fontSize: "18px" }}>
                                            {eventByIdJson[lang]?.noData}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo lang={lang} />
            </div>
        </Styles>
    )
}

export default EventById;
