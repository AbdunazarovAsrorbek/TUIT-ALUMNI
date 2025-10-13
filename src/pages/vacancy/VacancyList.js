import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './style/vacancyList';
import { useDispatch, useSelector } from "react-redux";
import { getVacancy as onGetVacancy, getVacancyById as onGetVacancyById } from "../../slice/vacancy/thunk";
import { useLocation } from "react-router-dom";
import VacancySidebar from './VacancySidebar';
import vacancyText from "../../data/vacancy/vacancyListJson.json";
import i18n from "../../i18n"

const baseUrl = process.env.REACT_APP_API_URL;

const VacancyList = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const locations = useLocation();
    const searchParams = new URLSearchParams(locations.search);
    const id = searchParams.get("id");

    const dispatch = useDispatch();

    const Vacancy = useSelector(
        (state) => state.Vacancy?.vacancyList || []
    );
    // console.log(Vacancy);
    const VacancyById = useSelector(
        (state) => state.Vacancy?.vacancyById || []
    );

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        const data = {
            page: 1,
            size: 5
        }
        dispatch(onGetVacancy(data));
    }, [dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(onGetVacancyById(id))
        }
    }, [dispatch, id]);

    // console.log(VacancyById)

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper vacancy-details-page">

                {/* Header 2 */}
                <HeaderTwo lang={lang} />

                {/* Breadcroumb */}
                <BreadcrumbBox title={vacancyText[lang].breadcrumb} lang={lang} />

                {/* Vacancy Details Area */}
                <section className="vacancy-details-area">
                    <Container>
                        {Object.keys(VacancyById).length !== 0 ? (
                            <Row>
                                <Col lg="9" md="8" sm="12">

                                    <div className="vacancy-details-content">
                                        <div className="heading" style={{ textAlign: 'justify' }}>
                                            <h4>{VacancyById?.title || "Sarlavha mavjud emas"}</h4>
                                        </div>

                                        <div className="vacancy-icon">
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item">
                                                    <i className="las la-calendar"></i>
                                                    {VacancyById?.createdAt}
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="las la-city"></i>
                                                    {VacancyById?.company}
                                                </li>
                                                <li className="list-inline-item">
                                                    <i className="las la-money-bill-wave"></i>
                                                    {VacancyById?.salary} {VacancyById?.currency}
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="Vacancy-details-banner">
                                            <img
                                                src={`${baseUrl}${VacancyById?.imageUrl}`}
                                                alt={vacancyText[lang].vacancy_image_alt}
                                            />
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: VacancyById?._translations?.[`content_${lang}`] || VacancyById?.content }} />

                                    </div>
                                </Col>

                                <Col lg="3" md="4" sm="12">
                                    <div className="Vacancy-details-sidebar">
                                        <Row>
                                            <Col md="12">
                                                <VacancySidebar vacancyList={Vacancy.content} lang={lang} />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        ) : (
                            <div className={"not_data"}>
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
                                            {vacancyText[lang].no_data}
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

export default VacancyList
