import React, { useEffect } from 'react';
import Datas from '../../data/blog/grid.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/blog.js';
import i18n from "../../i18n"

const BlogGrid = ({ location }) => {
    const lang = location.pathname.split('/')[1];
    const data = Datas[lang];

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    return (
        <Styles>
            <div className="main-wrapper blog-grid-page">

                {/* Header */}
                <HeaderTwo lang={lang} />

                {/* Breadcrumb */}
                <BreadcrumbBox title={data.title} lang={lang} />

                {/* Blog Grid */}
                <section className="blog-grid-area">
                    <Container>
                        <Row>
                            {data.posts.map((item, i) => (
                                <Col lg="4" md="12" key={i}>
                                    <div className="blog-item">
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <Link to={process.env.PUBLIC_URL + item.postLink}>
                                                        {item.postTitle}
                                                    </Link>
                                                </h6>
                                            </div>
                                            <div className="blog-desc">
                                                <p>{item.postDesc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>

                    {/* YouTube Section */}
                    <div className='blog_iframe'>
                        <Container>
                            <h6>{data.appeal}</h6>
                            <div className='blog_row'>
                                <div className='blog_col'>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/yO6a-wlh5TM"
                                        title="Motivatsiya video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className='blog_col'>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/5_4XHVCW9Fg"
                                        title="Ta'lim va o‘qish haqida"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className='blog_col'>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/kvBd9-_aJP8"
                                        title="Ilm-fan haqida video"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className='blog_col'>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/VtLQHElvMAA"
                                        title="Universitet hayoti"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className='blog_col'>
                                    <iframe
                                        width="100%"
                                        height="315"
                                        src="https://www.youtube.com/embed/i6k_8QXPMOE"
                                        title="YouTube video player"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </Container>
                    </div>

                </section>

                {/* Footer */}
                <FooterTwo lang={lang} />
            </div>
        </Styles>
    );
};

export default BlogGrid;
