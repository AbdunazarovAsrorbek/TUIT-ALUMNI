import React, { useEffect } from 'react';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from "./styles/fund.js";
import i18n from "../../i18n/index.js";
import { useTranslation } from 'react-i18next';
import FundMain from '../../components/FundMain.js';

const Fund = ({ location }) => {

    const lang = location.pathname.split('/')[1];

    const { t } = useTranslation("fundMain");

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <Styles>
            {/* Main Wrapper */}
            <div className="main-wrapper fund-page">

                {/* Header 2 */}
                <HeaderTwo lang={lang} />

                {/* Breadcroumb */}
                <BreadcrumbBox title={t("breadcrumbTitle")} lang={lang} />

                <FundMain lang={lang} />

                {/* Footer 2 */}
                <FooterTwo lang={lang} />

            </div>
        </Styles>
    )
}

export default Fund