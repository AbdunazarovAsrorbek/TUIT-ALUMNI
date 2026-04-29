import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/gallery.js';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom";
import { getMedia as onGetMedia } from "../../slice/media/thunk.js";
import { getMediaCategory as onGetMediaCategory } from "../../slice/media/thunk.js";
import ModalImage from 'react-modal-image';
import Pagination from '../../components/Pagination.js';
import i18n from "../../i18n"
import mediaJson from "../../data/gallery/mediaJson.json"

const useQuery = () => new URLSearchParams(useLocation().search);

const baseUrl = process.env.REACT_APP_API_URL;

const Gallery = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const dispatch = useDispatch();
    const history = useHistory();
    const query = useQuery();

    const pageFromUrl = parseInt(query.get('page')) || 1;
    const [pagination, setPagination] = useState(pageFromUrl);
    const size = 9;

    const totalPages = useSelector((state) => state.Media?.mediaList?.page?.totalPages || 1);
    const mediaList = useSelector((state) => state.Media?.mediaList || {});
    const mediaCategories = useSelector((state) => state.Media?.mediaCategoryList || []);

    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    useEffect(() => {
        const data = {
            page: pagination,
            size: size
        };
        // console.log(data);
        dispatch(onGetMediaCategory(data));
    }, [dispatch, pagination]);

    useEffect(() => {
        if (mediaCategories.length > 0 && !selectedCategoryId) {
            const lastId = mediaCategories[mediaCategories.length - 1].id;
            setSelectedCategoryId(lastId);

            const data = { page: pagination, size: size };
            dispatch(onGetMedia({ data, categoryId: lastId }));
        }
    }, [mediaCategories, selectedCategoryId, pagination, dispatch]);

    useEffect(() => {
        if (selectedCategoryId) {
            const data = { page: pagination, size: size };
            dispatch(onGetMedia({ data, categoryId: selectedCategoryId }));
        }
    }, [dispatch, pagination, selectedCategoryId]);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        params.set("page", pagination);
        history.replace({ search: params.toString() });
    }, [pagination, history, location.search]);

    return (
        <Styles>
            <div className="main-wrapper gallery-page">

                <HeaderTwo lang={lang} />

                <BreadcrumbBox title={mediaJson[lang]?.title} lang={lang} />

                <div className="category-area">
                    <Container>
                        <Row className="category-row">
                            {mediaCategories.map((item) => (
                                <Col className='category-col' key={item.id}>
                                    <Card
                                        className={`category-card ${selectedCategoryId === item.id ? "active" : ""}`}
                                        onClick={() => setSelectedCategoryId(item.id)}
                                    >
                                        <h6 className="text-center">{item.name}</h6>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>

                <section className="gallery-page-area">
                    <Container>
                        <Row className='media-row'>
                            {mediaList?.content?.length > 0 ? (
                                mediaList.content.map((data, i) => (
                                    <Col className='media-col' key={i}>
                                        <div className="gallery-box">
                                            <ModalImage
                                                small={`${baseUrl}${data.imageUrl}`}
                                                large={`${baseUrl}${data.imageUrl}`}
                                                alt=""
                                                className="preview-img"
                                            />
                                        </div>
                                    </Col>
                                ))
                            ) : (
                                <Col>
                                    <p className="text-subtitle">{mediaJson[lang].notFound}</p>
                                </Col>
                            )}
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
    );
};

export default Gallery;
