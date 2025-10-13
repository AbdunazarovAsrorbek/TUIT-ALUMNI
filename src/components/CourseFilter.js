import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/courseFilter.js";
import { useDispatch, useSelector } from "react-redux";
import { getNews as onGetNews } from "../slice/news/thunk";
import courseFilter from "../data/course/courseFilter.json"

const CourseFilter = ({ lang }) => {
    const dispatch = useDispatch();

    const News = useSelector(
        (state) => state.News?.news?.data || []
    );
    useEffect(() => {
        const data = {
            page: 0,
            size: 6
        }
        dispatch(onGetNews(data));
    }, [dispatch]);

    console.log(News);
    return (
        <Styles>
            {/* Course Area */}
            <section className="course-filter">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{courseFilter[lang].title}</h4>
                            </div>
                        </Col>
                        <Col md="12">

                            <Row className="filter-items">
                                {Array.isArray(News) && News.map((data, i) => (
                                    <Col lg="4" md="6" key={i}>
                                        <div className="course-item">
                                            <Link to={`/${lang}/event-details?id=${data.id}`}>
                                                <div
                                                    className="course-image"
                                                    style={{
                                                        backgroundImage: `url(${data.image?.base_url}/${data.image?.path})`,
                                                    }}
                                                >
                                                    <div className="author-img d-flex">
                                                        <div className="img">
                                                            <img
                                                                src={`${data.image?.base_url}/${data.image?.path}`}
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="course-content">
                                                <h6 className="heading">
                                                    <Link to={`/${lang}/event-details?id=${data.id}`}>
                                                        {data._translations?.[`title_${lang}`] || data.title}
                                                    </Link>
                                                </h6>
                                                <p className="desc">{data._translations?.[`info_${lang}`] || data.info}</p>

                                                <div className="course-face d-flex justify-content-between">
                                                    <div className="duration">
                                                        <div className="d-flex align-items-center">
                                                            <p><i className="las la-clock"></i></p>
                                                            <p>{data.created_at}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                            </Row>
                        </Col>
                        <Col md="12" className="text-center">
                            <div className="viewall-btn">
                                <Link to={`/${lang}/news`}>{courseFilter[lang].button}</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default CourseFilter
