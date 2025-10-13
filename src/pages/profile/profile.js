import React, { useEffect } from "react";
import HeaderTwo from "../../components/HeaderTwo";
import FooterTwo from "../../components/FooterTwo";
import { Styles } from "./styles/profile";
import TabBox from "./tabs/TabBox";
import i18n from "../../i18n"

const About = ({ location }) => {
    const lang = location.pathname.split('/')[1];

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    return (
        <Styles>
            <div className="main-wrapper profile-page">
                <HeaderTwo lang={lang} />
                <TabBox lang={lang} />
                <FooterTwo lang={lang} />
            </div>
        </Styles>
    )
}

export default About