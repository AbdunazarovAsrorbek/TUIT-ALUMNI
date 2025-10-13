import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import courseDetails from "../../data/course/courseDetails.json"
import i18n from "../../i18n"

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

function CourseDetails({ location }) {
    const lang = location.pathname.split('/')[1];
    const locations = useLocation();
    const history = useHistory();

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    const submitData = (e) => {
        e.preventDefault();
        const queryParams = new URLSearchParams(locations.search);
        const token = queryParams.get("token");

        if (token) {
            axios
                .get(`/api/v1/auth/verify?token=${token}`)
                .then((res) => {
                    console.log("res", res);
                    alert(courseDetails[lang]?.success);
                    history.push(`/${lang}/login`);
                })
                .catch((err) => {
                    console.log(err);
                    alert(courseDetails[lang]?.error);
                });
        } else {
            alert(courseDetails[lang]?.notFound);
            history.push(`/${lang}/register`);
        }
    };

    return (
        <div className="main-wrapper course-details-page">

            {/* Header 2 */}
            < HeaderTwo lang={lang} />

            {/* Breadcroumb */}
            < BreadcrumbBox title={courseDetails[lang]?.breadcrumb} lang={lang} />

            <Styles>
                {/* Course Details */}
                <section className="course-details-area">
                    <Container>
                        <Row>

                            <Col lg="12">
                                <div className="single-details-sidbar">
                                    <Row>
                                        <Col md="9" className={"m-auto"}>
                                            <div className="course-details-feature">
                                                <h5 className="title">{courseDetails[lang]?.title}</h5>
                                                <p className="mb-5">
                                                    {courseDetails[lang]?.desc}
                                                </p>
                                                <button type="button" className="enroll-btn" onClick={submitData}>
                                                    {courseDetails[lang]?.button}
                                                </button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <FooterTwo lang={lang} />

        </div>
    )
}

export default CourseDetails