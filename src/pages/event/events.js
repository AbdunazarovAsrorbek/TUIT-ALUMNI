import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/event';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { getEvent as onGetEvent } from "../../slice/event/thunk";
import i18n from '../../i18n';
import title from "../../data/event/title.json"

const baseUrl = process.env.REACT_APP_API_URL;

const useQuery = () => new URLSearchParams(useLocation().search);



const EventsList = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();

    const pageFromUrl = parseInt(query.get('page')) || 1;
    const [pagination, setPagination] = useState(pageFromUrl);
    const size = 6;

    const totalPages = useSelector((state) => state.Event?.eventList?.page?.totalPages || 1);
    // console.log(totalPages)

    const eventLists = useSelector((state) => state.Event.eventList || {});
    // console.log("EVENTLISTS", eventLists);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        const data = {
            page: pagination,
            size: size
        };
        // console.log(data);
        dispatch(onGetEvent(data));
    }, [dispatch, pagination]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        params.set("page", pagination);
        history.replace({ search: params.toString() });
    }, [pagination, history, location.search]);

    const truncateText = (text, length = 100) => {
        if (!text) return "";
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <div className="main-wrapper course-page">
            <HeaderTwo lang={lang} />
            <BreadcrumbBox title={title[lang]?.title} lang={lang} />

            <Styles>
                <section className="course-list-area">
                    <Container>
                        <div className="course-items2">
                            <Row>
                                {Array.isArray(eventLists?.content) && eventLists.content.map((item, i) => {

                                    return (
                                        <Col md="12" key={i}>
                                            <div className="course-item d-flex">
                                                <div className="course-image-box">
                                                    <div className="course-image"
                                                        style={{ backgroundImage: `url(${baseUrl}${item.imageUrl})` }} />
                                                </div>
                                                <div className="course-content" style={{ textAlign: "justify" }}>
                                                    <h6 className="heading">
                                                        <Link to={`/${lang}/eventById?id=${item.id}`}>
                                                            {truncateText(item._translations?.[`title_${lang}`] || item.title, 170)}
                                                        </Link>
                                                    </h6>

                                                    <p className="desc">
                                                        {truncateText(item._translations?.[`info_${lang}`] || item.shortInfo, 200)}
                                                    </p>
                                                    <p className='desc' style={{ display: "flex", alignItems: "center", justifyContent: "left", gap: 3 }}>
                                                        <i className="las la-clock"></i>{item.eventDate}
                                                    </p>

                                                    <Link className="details-btn" to={`/${lang}/eventById?id=${item.id}`}>
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

            <FooterTwo lang={lang} />
        </div >
    )
}

export default EventsList;
