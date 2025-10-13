import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ModalVideo from 'react-modal-video';
import CountUp from 'react-countup';
import { Styles } from './styles/aboutUs.js';
import aboutImg1 from '../assets/image/mockup_12.jpg';
import aboutImg2 from '../assets/image/mockup_13.jpg';
import { useTranslation } from 'react-i18next';

const AboutUs = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('aboutUsMain'); 

  const openModal = () => {
    setIsOpen(true);
  };

  const counters = t('counters', { returnObjects: true });

  return (
    <Styles>
      <section className="about-us">
        <Container>
          <Row>
            <Col md="6">
              <div className="about-image">
                <img src={aboutImg2} className="main-img" alt="" />
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/pattern.png'}
                  className="pattern-img"
                  alt=""
                />
                <div className="video-player" style={{ backgroundImage: `url(${aboutImg1})` }}>
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="uXFUl0KcIkA"
                    onClose={() => setIsOpen(false)}
                  />
                  <button onClick={openModal} className="play-button">
                    <i className="las la-play"></i>
                  </button>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="about-content">
                <h4 className="about-title">{t('title')}</h4>
                <p className="about-para text-justify">{t('description')}</p>
                <Row>
                  {counters.map((counter, index) => (
                    <Col sm="4" key={index}>
                      <div className={`counter-box box${index + 1} text-center`}>
                        <h3>
                          <CountUp end={counter.end} duration={5} delay={1.5} />
                          <i className="las la-plus"></i>
                        </h3>
                        <p>{counter.label}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Link className="readmore-btn" to={`/${lang}/about`}>
                  {t('readmore')}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default AboutUs;
