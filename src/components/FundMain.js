import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from './styles/fundMain.js';
import { useTranslation } from 'react-i18next';
import oneImage from '../assets/image/imagesPay/2.PNG';
import twoImage from '../assets/image/imagesPay/3.PNG';
import threeImage from '../assets/image/imagesPay/4.PNG';
import fourImage from '../assets/image/imagesPay/5.PNG';
import fiveImage from '../assets/image/imagesPay/6.PNG';
import sixImage from '../assets/image/imagesPay/7.PNG';
import sevenImage from '../assets/image/imagesPay/8.PNG';
import eightImage from '../assets/image/imagesPay/9.PNG';
import { IoChevronBack } from "react-icons/io5";


const FundMain = ({ lang }) => {
  const { t } = useTranslation('fundMain');
  const [isModal, setIsModal] = useState(false);

  const features = t('features', { returnObjects: true }) || [];
  const paymeSteps = t('donation.payme.steps', { returnObjects: true }) || [];
  const bankDetails = t('donation.bank.details', { returnObjects: true }) || [];

  const modalSteps = t('modal.steps', { returnObjects: true }) || [];

  return (
    <Styles>
      <section className="fundMain-us">
        <Container>

          {/* TITLE */}
          <div className="fund-header">
            <h2>{t('title')}</h2>
            <p className="quote">“{t('quote')}”</p>
            <p className="desc">{t('description')}</p>
          </div>

          {/* FEATURES CARD */}
          <Row>
            {features.map((item, index) => (
              <Col md="6" key={index}>
                <div className="feature-card">
                  <span>✔</span>
                  <p>{item}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* TRANSPARENCY */}
          <div className="info-card">
            <h4>{t('transparency')}</h4>
          </div>

          {/* DONATION */}
          <Row className="mt-4 align-items-stretch">
            {/* PAYME */}
            <Col md="6" className="left-col">
              <div className="donation-card">
                <h5>{t('donation.payme.title')}</h5>
                <ul>
                  {paymeSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>


              <button className="fund-btn" onClick={() => setIsModal(true)}>
                {t('modal.button')}
              </button>

              {
                isModal && (
                  <div
                    className='fund-modal'
                    onClick={() => setIsModal(false)}
                  >
                    <div
                      className='modal-row'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h3>{t('modal.title')}</h3>

                      {modalSteps.map((step, i) => {
                        const images = [
                          oneImage,
                          twoImage,
                          threeImage,
                          fourImage,
                          fiveImage,
                          sixImage,
                          sevenImage,
                          eightImage
                        ];

                        return (
                          <div className='modal-col' key={i}>
                            <p>{step}</p>
                            <img src={images[i]} alt={`step ${i + 1}`} />
                          </div>
                        );
                      })}

                      <button className='modal-close-btn' onClick={() => setIsModal(false)}>
                        <IoChevronBack />
                      </button>

                    </div>
                  </div>
                )
              }


            </Col>

            {/* BANK */}
            <Col md="6">
              <div className="donation-card">
                <h5>{t('donation.bank.title')}</h5>
                <ul>
                  {bankDetails.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </Styles>
  );
};

export default FundMain;