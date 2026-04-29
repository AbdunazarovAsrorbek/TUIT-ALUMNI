import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Uzbek
import uzRegulation from "./locales/uz/uzRegulation.json";
import uzHeaderTwo from "./locales/uz/uzHeaderTwo.json";
import uzFooterTwo from "./locales/uz/uzFooterTwo.json";
import uzStickyMenu from "./locales/uz/uzStickyMenu.json"
import uzAboutUs from "./locales/uz/uzAboutUs.json"
import uzAboutUsMain from "./locales/uz/uzAboutUsMain.json"
import uzFundMain from "./locales/uz/uzFundMain.json"

// Russian
import ruRegulation from "./locales/ru/ruRegulation.json";
import ruHeaderTwo from "./locales/ru/ruHeaderTwo.json";
import ruFooterTwo from "./locales/ru/ruFooterTwo.json";
import ruStickyMenu from "./locales/ru/ruStickyMenu.json"
import ruAboutUs from "./locales/ru/ruAboutUs.json"
import ruAboutUsMain from "./locales/ru/ruAboutUsMain.json"
import ruFundMain from "./locales/ru/ruFundMain.json"

// English
import enRegulation from "./locales/en/enRegulation.json";
import enHeaderTwo from "./locales/en/enHeaderTwo.json";
import enFooterTwo from "./locales/en/enFooterTwo.json";
import enStickyMenu from "./locales/en/enStickyMenu.json"
import enAboutUs from "./locales/en/enAboutUs.json"
import enAboutUsMain from "./locales/en/enAboutUsMain.json"
import enFundMain from "./locales/en/enFundMain.json"

i18n    
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: {
                headerTwo: uzHeaderTwo,
                stickyMenu: uzStickyMenu,

                aboutUs: uzAboutUs,
                aboutUsMain: uzAboutUsMain,

                regulation: uzRegulation,
                footerTwo: uzFooterTwo,
                fundMain: uzFundMain,
            },
            ru: {
                headerTwo: ruHeaderTwo,
                stickyMenu: ruStickyMenu,

                aboutUs: ruAboutUs,
                aboutUsMain: ruAboutUsMain,

                regulation: ruRegulation,
                footerTwo: ruFooterTwo,
                fundMain: ruFundMain,
            },
            en: {
                headerTwo: enHeaderTwo,
                stickyMenu: enStickyMenu,

                aboutUs: enAboutUs,
                aboutUsMain: enAboutUsMain,

                regulation: enRegulation,
                footerTwo: enFooterTwo,
                fundMain: enFundMain,
            },
        },
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
