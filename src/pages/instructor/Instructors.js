import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/instructor.js';

import { useDispatch, useSelector } from 'react-redux';
import { getClubMember } from '../../slice/clubMember/thunk.js';
import Pagination from '../../components/Pagination.js';
import title from "../../data/instructor/title.json"
import i18n from "../../i18n"


const url = process.env.REACT_APP_API_URL;

const useQuery = () => new URLSearchParams(useLocation().search);

const Instructor = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();

    const pageFromUrl = parseInt(query.get('page')) || 1;
    const [pagination, setPagination] = useState(pageFromUrl);
    const size = 12;

    const totalPages = useSelector((state) => state.ClubMember?.clubMember?.page?.totalPages || 1);
    // console.log(totalPages)

    const { content = [] } = useSelector((state) => state.ClubMember.clubMember);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        const data = {
            page: pagination,
            size: size
        };
        // console.log("zxczxc",data);
        dispatch(getClubMember(data));
    }, [dispatch, pagination]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        params.set("page", pagination);
        history.replace({ search: params.toString() });
    }, [pagination, history, location.search]);

    // console.log("content", content);

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper instructor-page">

                {/* Header 2 */}
                <HeaderTwo lang={lang} />

                {/* Breadcroumb */}
                <BreadcrumbBox title={title[lang]?.title} lang={lang} />

                {/* Instructor Area */}
                <section className="instructor-area">
                    <Container>
                        <Row>

                            {content.map((item, i) => (
                                <Col lg="3" md="4" sm="6" key={i}>
                                    <div className="instructor-item">
                                        <Link to={""}>
                                            <img src={url + item.imageUrl} className="img-fluid" alt='img-fluid' />
                                        </Link>
                                        <div className="img-content text-center">
                                            <h5>{item.fullName}</h5>
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

                {/* Footer 2 */}
                <FooterTwo lang={lang} />

            </div>
        </Styles>
    )

}

export default Instructor