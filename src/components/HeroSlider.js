import React from 'react';
import Datas from '../data/hero/hero-slider.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/heroSlider.js";
import { colors } from './common/element/elements.js';

const HeroSlider = ({ lang }) => {

    const authAlumni = JSON.parse(localStorage.getItem("authAlumni"));

    const settings = {
        slidesPerView: 1,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        watchSlidesVisibility: true,
        effect: 'fade',
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev'
        },
        // renderPrevButton: () => (
        //     <div className="swiper-btn slider-button-prev"><i className="flaticon-arrow-left-th"></i></div>
        // ),
        // renderNextButton: () => (
        //     <div className="swiper-btn slider-button-next"><i className="flaticon-arrow-right-th"></i></div>
        // )
    };

    return (
        <Styles>
            {/* Hero Slider */}
            <section className="hero-slider-area">
                <Swiper {...settings}>
                    {
                        Datas[lang].map((data, i) => (
                            <div className="slider-item" key={i}>
                                <div className="image-container">
                                    <img src={process.env.PUBLIC_URL + `/assets/img/${data.backgroundImage}`}
                                        className="slider-image" alt={data.backgroundImage} />
                                </div>
                                <div className="slider-table">
                                    <div className="slider-tablecell">
                                        <Container>
                                            <Row>
                                                <Col md="12">
                                                    <div className={data.uniqClass}>
                                                        <div className="slider-title"
                                                        >
                                                            <p
                                                                style={{
                                                                    ...data.style,
                                                                    ...(data.id === "2" && {
                                                                        background: colors.gr_bg,
                                                                        display: "inline-block",
                                                                        padding: "4px 8px",
                                                                        borderRadius: "5px"
                                                                    })
                                                                }}
                                                            >{data.title}</p>
                                                        </div>

                                                        <div className="slider-desc"
                                                        >
                                                            <h1
                                                                style={{
                                                                    ...data.style,
                                                                    ...(data.id === "2" && {
                                                                        background: colors.gr_bg,
                                                                        display: "inline",
                                                                        maxWidth: "600px",
                                                                        padding: "4px 8px",
                                                                        borderRadius: "5px",
                                                                        fontWeight: "500",
                                                                        fontSize: "36px",
                                                                        lineHeight: "1.7",
                                                                        WebkitBoxDecorationBreak: "clone",
                                                                        boxDecorationBreak: "clone",
                                                                        whiteSpace: "pre-line",
                                                                    })
                                                                }}
                                                            >{data.desc}</h1>
                                                        </div>
                                                        {!authAlumni && data.id === "1" && (
                                                            <div className="slider-btn">
                                                                <Link className="slider-btn1" to={`/${lang}/login`}>
                                                                    {data.login}
                                                                </Link>
                                                                <Link className="slider-btn2" to={`/${lang}/register`}>
                                                                    {data.register}
                                                                </Link>
                                                            </div>
                                                        )}
                                                        {!authAlumni && data.id === "2" && (
                                                            <div className="slider-btn">
                                                                <Link className="slider-btn2" to={`/${lang}/${data.btnOneLink}`}>
                                                                    {data.register}
                                                                </Link>
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Swiper>
            </section>
        </Styles >
    )

}

export default HeroSlider
