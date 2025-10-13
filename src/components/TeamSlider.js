import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/teamSlider.js";
import { connect } from 'react-redux';
import { getClubMember } from '../slice/clubMember/thunk.js';
import teamSilder from "../data/instructor/teamSilderjson.json"

const url = process.env.REACT_APP_API_URL;

class TeamSlider extends Component {
    componentDidMount() {
        const data = { page: 1, size: 12 };
        this.props.getClubMember(data);
    }

    render() {
        const { clubMembers } = this.props;
        console.log("zxc", clubMembers);
        const { lang } = this.props;
        const settings = {
            slidesPerView: 4,
            loop: false,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 30,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }
            }
        };

        return (
            <Styles>
                <section className="team-member-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{teamSilder[lang]?.title}</h4>
                                </div>
                            </Col>
                            <Col md="12" className="team-slider">
                                <Swiper key={clubMembers.length} {...settings}>
                                    {clubMembers.map((item) => (
                                        <div className="team-item" key={item.id}>
                                            <img src={url + item.imageUrl} alt="image" />
                                            <div className="img-content text-center">
                                                <h5>{item.fullName}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

const mapStateToProps = (state) => ({
    clubMembers: state.ClubMember.clubMember?.content || []
});

export default connect(mapStateToProps, { getClubMember })(TeamSlider);
