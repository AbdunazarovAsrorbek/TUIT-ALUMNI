import React, { useEffect } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import {BreadcrumbBox} from '../../components/common/Breadcrumb';
import AboutUs from '../../components/AboutUs';
import IconBox from '../../components/IconBox';
import FooterTwo from '../../components/FooterTwo';
import {Styles} from "./styles/about.js";
import i18n from "../../i18n/index.js";
import { useTranslation } from 'react-i18next';

const About = ({location}) => {

    const lang = location.pathname.split('/')[1];

    const { t } = useTranslation("aboutUs");

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper about-page">

                {/* Header 2 */}
                <HeaderTwo lang={lang}/>

                {/* Breadcroumb */}
                <BreadcrumbBox title={t("breadcrumbTitle")} lang={lang}/>

                {/* About Area */}
                <AboutUs lang={lang}/>

                {/* Icon Box Area */}
                <IconBox lang={lang}/>

                {/* Footer 2 */}
                <FooterTwo lang={lang}/>

            </div>
        </Styles>
    )
}

export default About