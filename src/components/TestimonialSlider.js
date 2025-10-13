import React, { useEffect, useState } from 'react';
import Datas from '../data/testimonial/testimonial-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/testimonialSlider.js";
import bgImage from "../assets/image/banner4.png";
import imgAvatar from "../assets/image/userAvatar.png";
import i18n from '../i18n/index.js';

const TestimonialSlider = ({ lang }) => {

  const testimonialJson = Datas[lang] || Datas['uz']

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const settings = {
    slidesPerView: 2,
    loop: true,
    speed: 1000,
    autoplay: { delay: 3000, disableOnInteraction: false },
    spaceBetween: 30,
    watchSlidesVisibility: true,
    pagination: { el: '.slider-dot.text-center', clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 }
    }
  };

  return (
    <Styles>
      <section className="testimonial-area" style={{ backgroundImage: `url(${bgImage})` }}>
        <Container>
          <Row>
            <Col md="12">
              <div className="sec-title text-center">
                <h4>{testimonialJson.secTitle}</h4>
              </div>
            </Col>
            <Col md="12" className="testimonial-slider">
              <Swiper key={lang} {...settings}>
                {testimonialJson.dataList.map((data, i) => (
                  <div className="slider-item" key={i}>
                    <div className="desc">
                      <h5>{data.testimonialTitle}</h5>
                      <p>{data.testimonialDesc}</p>
                    </div>
                    <div className="writer">
                      <img src={imgAvatar} className="slider-image" alt="author" />
                      <h6>{data.authorName}</h6>
                      <p>{data.authorTitle}</p>
                    </div>
                  </div>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default TestimonialSlider;
