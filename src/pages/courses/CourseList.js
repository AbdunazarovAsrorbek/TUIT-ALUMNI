import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/course.js';
import { useDispatch, useSelector } from "react-redux";
import { getNews as onGetNews } from "../../slice/news/thunk";
import { Link, useLocation, useHistory } from "react-router-dom";
import Pagination from "../../components/Pagination";
import i18n from '../../i18n/index.js';
import title from "../../data/course/title.json"

const useQuery = () => new URLSearchParams(useLocation().search);

const CourseList = ({ location }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();


    const lang = location.pathname.split('/')[1];

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    const pageFromUrl = parseInt(query.get('page')) || 1;
    const [pagination, setPagination] = useState(pageFromUrl);
    const size = 6;

    const News = useSelector((state) => state.News?.news?.data || []);
    // console.log(News);
    const totalPages = useSelector((state) => state.News?.news?.pagination?.pageCount || 1);
    // console.log(totalPages)

    useEffect(() => {
        const data = {
            page: pagination,
            size: size
        };
        // console.log(data);
        dispatch(onGetNews(data));
    }, [dispatch, pagination]);


    useEffect(() => {
        const params = new URLSearchParams(location.search);
        params.set("page", pagination);
        history.replace({ search: params.toString() });
    }, [pagination, history, location.search]);

    return (
        <div className="main-wrapper course-page">
            <HeaderTwo lang={lang} />
            <BreadcrumbBox title={title[lang]?.title} lang={lang} />

            <Styles>
                {/* Course Grid */}
                <section className="course-list-area">
                    <Container>
                        <div className="course-items2">
                            <Row>
                                {Array.isArray(News) && News.map((item, i) => {
                                    const imageUrl = item.image?.base_url && item.image?.path
                                        ? `${item.image?.base_url}/${item.image.path}`
                                        : "/assets/images/default.jpg";

                                    return (
                                        <Col md="12" key={i}>
                                            <div className="course-item d-flex">
                                                <div className="course-image-box">
                                                    <div className="course-image"
                                                        style={{ backgroundImage: `url(${imageUrl})` }} />
                                                </div>
                                                <div className="course-content" style={{ textAlign: "justify" }}>
                                                    <h6 className="heading">
                                                        <Link
                                                            to={`/${lang}/event-details?id=${item.id}`}>{item._translations?.[`title_${lang}`] || item.title}</Link>
                                                    </h6>
                                                    <p className="desc">{item._translations?.[`info_${lang}`] || item.info}</p>
                                                    <Link className="details-btn" to={`/${lang}/event-details?id=${item.id}`}>
                                                        {title[lang]?.button}
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    );
                                })}

                                <Col md="12" className="text-center">
                                    <Pagination
                                        currentPage={pagination}
                                        totalPages={totalPages}
                                        onPageChange={(page) => setPagination(page)}
                                    />
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </section>
            </Styles>

            {/* Footer 2 */}
            <FooterTwo lang={lang} />

        </div>
    )
}

export default CourseList