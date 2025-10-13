import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo.js';
import { BreadcrumbBox } from '../../components/common/Breadcrumb.js';
import FooterTwo from '../../components/FooterTwo.js';
import { Styles } from './style/vacancy.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from "react-router-dom";
import { getVacancy as onGetVacncy } from "../../slice/vacancy/thunk.js";
import Pagination from '../../components/Pagination.js';
import i18n from "../../i18n"
import vacancyJson from "../../data/vacancy/vacancyJson.json"

const baseUrl = process.env.REACT_APP_API_URL;

const useQuery = () => new URLSearchParams(useLocation().search);

const Vacancy = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const dispatch = useDispatch()
    const history = useHistory();
    const query = useQuery();

    const pageFromUrl = parseInt(query.get('page')) || 1;
    const [pagination, setPagination] = useState(pageFromUrl);
    const size = 12;

    const totalPages = useSelector(
        (state) => state.Vacancy?.vacancyList?.page?.totalPages || 1
    );

    const Vacancy = useSelector(
        (state) => state.Vacancy.vacancyList
    );

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        const data = {
            page: pagination,
            size: size
        }
        dispatch(onGetVacncy(data))
    }, [dispatch, pagination]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        params.set("page", pagination);
        history.replace({ search: params.toString() });
    }, [pagination, history, location.search]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const truncateText = (text, length) => {
        if (!text) return "";
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <Styles>
            <div className="main-wrapper blog-grid-page">
                <HeaderTwo lang={lang} />
                <BreadcrumbBox title={vacancyJson[lang].title} lang={lang} />

                <section className="course-filter">
                    <Container>
                        <Row className="filter-items">
                            {Array.isArray(Vacancy?.content) && Vacancy.content.map((data, i) => (
                                <Col lg="3" md="6" key={i}>
                                    <div className="course-item">
                                        <Link to={`/${lang}/vacancyList?id=${data.id}`}>
                                            <div
                                                className="course-image"
                                            // style={{
                                            //     backgroundImage: `url(${baseUrl}${data.imageUrl})`,
                                            // }}
                                            >
                                                <img
                                                    src={`${baseUrl}${data.imageUrl}`}
                                                    alt=''
                                                />
                                                <div className="author-img d-flex">
                                                    <div className="img">
                                                        <img
                                                            src={`${baseUrl}${data.imageUrl}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="course-content">
                                            <h6 className="heading">
                                                <Link to={`/${lang}/vacancyList?id=${data.id}`}>
                                                    {truncateText(
                                                        data._translations?.[`title_${lang}`] || data.title,
                                                        isMobile ? 40 : 18
                                                    )}
                                                </Link>
                                            </h6>

                                            <div className="desc">
                                                <i className="las la-city"></i>
                                                <span className='desc_text'>{vacancyJson[lang].company}: </span>
                                                {truncateText(
                                                    data._translations?.[`info_${lang}`] || data.company,
                                                    isMobile ? 20 : 10
                                                )}
                                                <br />

                                                {/* SALARY */}
                                                <i className="las la-money-bill-wave"></i>
                                                <span className='desc_text'>{vacancyJson[lang].salary}: </span>
                                                {truncateText(
                                                    data._translations?.[`info_${lang}`] || data.salary,
                                                    isMobile ? 28 : 14
                                                )}{" "}
                                                {data._translations?.[`info_${lang}`] || data.currency}
                                            </div>

                                            <div className="course-face d-flex justify-content-between">
                                                <div className="duration">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className='d-flex align-items-center'>
                                                            <p><i className="las la-calendar"></i></p>
                                                            <p>{data.createdAt}</p>
                                                        </div>
                                                        <div className='viewall-btn'>
                                                            <Link to={`/${lang}/vacancyList?id=${data.id}`}>
                                                                {vacancyJson[lang].details}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            <Col md="12" className="text-center">
                                <Pagination
                                    currentPage={pagination}
                                    totalPages={totalPages}
                                    onPageChange={(page) => setPagination(page)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <FooterTwo lang={lang} />
            </div>
        </Styles>
    )
}

export default Vacancy;
