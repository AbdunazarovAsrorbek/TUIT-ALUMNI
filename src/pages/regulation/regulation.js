import { useTranslation } from "react-i18next";
import { Styles } from './styles/regulation';
import HeaderTwo from "../../components/HeaderTwo";
import { BreadcrumbBox } from "../../components/common/Breadcrumb";
import React, { useEffect } from "react";
import FooterTwo from "../../components/FooterTwo";
import { Container } from 'react-bootstrap';
import i18n from "../../i18n";


const Regulation = ({ location }) => {
    const lang = location.pathname.split('/')[1];

    const { t } = useTranslation("regulation");

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    return (
        <Styles>
            <div className="regulation">
                <HeaderTwo lang={lang} />

                <BreadcrumbBox title={t("breadcrumbTitle")} lang={lang} />

                <section className="regulation-content">
                    <Container>
                        <div className="blog-details-box">
                            <div className="heading">
                                <h4 className="text-center">
                                    {t("mainHeading")}
                                </h4>
                            </div>

                            <div className="blog-details-desc" style={{ textAlign: "justify" }}>
                                <h4 className="text-center">{t("chapter1Title")}</h4>
                                <p><b>1.1.</b> {t("article1_1")}</p>
                                <p><b>1.2.</b> {t("article1_2")}</p>
                                <p><b>1.3.</b> {t("article1_3")}</p>
                                <p><b>1.4.</b> {t("article1_4")}</p>

                                <h4 className="text-center">{t("chapter2Title")}</h4>
                                <p><b>2.1.</b> {t("goalTitle")}</p>
                                <ul>
                                    <li>{t("goal1")}</li>
                                    <li>{t("goal2")}</li>
                                    <li>{t("goal3")}</li>
                                    <li>{t("goal4")}</li>
                                    <li>{t("goal5")}</li>
                                </ul>
                                <p><b>2.2.</b> {t("taskTitle")}</p>
                                <ul>
                                    <li>{t("task1")}</li>
                                    <li>{t("task2")}</li>
                                    <li>{t("task3")}</li>
                                    <li>{t("task4")}</li>
                                    <li>{t("task5")}</li>
                                    <li>{t("task6")}</li>
                                    <li>{t("task7")}</li>
                                    <li>{t("task8")}</li>
                                    <li>{t("task9")}</li>
                                    <li>{t("task10")}</li>
                                    <li>{t("task11")}</li>
                                    <li>{t("task12")}</li>
                                    <li>{t("task13")}</li>
                                    <li>{t("task14")}</li>
                                    <li>{t("task15")}</li>
                                </ul>

                                <h4 className="text-center">{t("chapter3Title")}</h4>
                                <p><b>3.1.</b> {t("article3_1")}</p>
                                <p><b>3.2.</b> {t("article3_2")}</p>
                                <p><b>3.3.</b> {t("article3_3Title")}</p>
                                <ul>
                                    <li>{t("article3_3_1")}</li>
                                    <li>{t("article3_3_2")}</li>
                                    <li>{t("article3_3_3")}</li>
                                    <li>{t("article3_3_4")}</li>
                                    <li>{t("article3_3_5")}</li>
                                </ul>
                                <p><b>3.4.</b> {t("article3_4Title")}</p>
                                <ul>
                                    <li>{t("article3_4_1")}</li>
                                    <li>{t("article3_4_2")}</li>
                                    <li>{t("article3_4_3")}</li>
                                    <li>{t("article3_4_4")}</li>
                                    <li>{t("article3_4_5")}</li>
                                    <li>{t("article3_4_6")}</li>
                                    <li>{t("article3_4_7")}</li>
                                    <li>{t("article3_4_8")}</li>
                                </ul>
                                <p><b>3.5.</b> {t("article3_5")}</p>
                                <p><b>3.6.</b> {t("article3_6")}</p>

                                <h4 className="text-center">{t("chapter4Title")}</h4>
                                <p><b>4.1.</b> {t("chapter4.1")}</p>
                                <p><b>4.2.</b> {t("chapter4.2")}</p>
                                <p><b>4.3.</b> {t("chapter4.3")}</p>
                                <p><b>4.4.</b> {t("chapter4.4")}</p>
                                <p><b>4.5.</b> {t("chapter4.5")}</p>
                                <p><b>4.6.</b> {t("chapter4.6")}</p>
                                <p><b>4.7.</b> {t("chapter4.7")}</p>
                                <p><b>4.8.</b> {t("chapter4.8")}</p>
                                <p><b>4.9.</b> {t("chapter4.9Title")}</p>
                                <ul>
                                    <li>{t("chapter4.9.list1")}</li>
                                    <li>{t("chapter4.9.list2")}</li>
                                    <li>{t("chapter4.9.list3")}</li>
                                    <li>{t("chapter4.9.list4")}</li>
                                    <li>{t("chapter4.9.list5")}</li>
                                    <li>{t("chapter4.9.list6")}</li>
                                </ul>
                                <p><b>4.10.</b> {t("chapter4.10Title")}</p>
                                <ul>
                                    <li>{t("chapter4.10.list1")}</li>
                                    <li>{t("chapter4.10.list2")}</li>
                                    <li>{t("chapter4.10.list3")}</li>
                                    <li>{t("chapter4.10.list4")}</li>
                                    <li>{t("chapter4.10.list5")}</li>
                                </ul>
                                <p><b>4.11.</b> {t("chapter4.11")}</p>
                                <p><b>4.12.</b> {t("chapter4.12")}</p>

                                <h4 className="text-center">{t("chapter5Title")}</h4>
                                <p><b>5.1.</b> {t("chapter5.1")}</p>
                                <p><b>5.2.</b> {t("chapter5.2")}</p>
                                <p><b>5.3.</b> {t("chapter5.3")}</p>
                            </div>
                        </div>
                    </Container>
                </section>

                <FooterTwo lang={lang} />
            </div>
        </Styles>
    )
}

export default Regulation;
