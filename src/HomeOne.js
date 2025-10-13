import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import CourseFilter from './components/CourseFilter';
import TestimonialSlider from './components/TestimonialSlider';
// import FaqEvent from './components/FaqEvent';
import TeamSlider from './components/TeamSlider';
// import HelpArea from './components/HelpArea';
// import CampusTour from './components/CampusTour';
import FooterTwo from './components/FooterTwo';
import i18n from "./i18n"
import homeOneJson from "./data/homeOne.json"

const HomeOne = ({ location }) => {
    const lang = location.pathname.split('/')[1];

    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    return (
        <div className="main-wrapper">

            {showBanner && (
                <div style={{
                    minWidth: "100%",
                    overflow: "hidden",
                    background: "#2A3B56",
                    fontSize: 17,
                    color: "white",
                    zIndex: 9999,
                    padding: "5px 40px",
                    position: "relative",
                    fontWeight: 300
                }}>
                    <div className="marquee">
                        {homeOneJson[lang]}
                    </div>
                    <button
                        onClick={() => setShowBanner(false)}
                        style={{
                            position: "absolute",
                            top: "1px",
                            right: "10px",
                            background: "transparent",
                            border: "none",
                            color: "white",
                            fontSize: "20px",
                            cursor: "pointer"
                        }}
                    >
                        ×
                    </button>
                </div>
            )}

            <style>
                {`
                .marquee {
                    display: inline-block;
                    white-space: nowrap;
                    padding-left: 100%;
                    animation: marquee 20s linear infinite;
                }
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                `}
            </style>

            {/* Header */}
            <Header lang={lang} />

            {/* Hero Slider */}
            < HeroSlider lang={lang} />

            {/* Icon Box */}
            < IconBox lang={lang} />

            {/* About Area */}
            < AboutUs lang={lang} />

            {/* Course Filter */}
            < CourseFilter lang={lang} />

            {/* Testimonial Slider */}
            < TestimonialSlider lang={lang} />

            {/* Faq & Event Area */}
            {/*< FaqEvent />*/}

            {/* Team Slider */}
            < TeamSlider lang={lang} />

            {/* Help Area */}
            {/*< HelpArea />*/}

            {/* Blog Area */}
            {/*< HomeBlog />*/}

            {/* Campus Tour */}
            {/*< CampusTour />*/}

            {/* Newsletter Form */}
            {/*< NewsletterForm />*/}

            {/* Footer */}
            < FooterTwo lang={lang} />

        </div>
    )

}
export default HomeOne;
