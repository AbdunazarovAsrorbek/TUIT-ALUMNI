import React from 'react';
import {Link} from 'react-router-dom';
import {Styles} from './style/vacancySidebar';
import vacancySidebarText from "../../data/vacancy/vacancySidebarJson.json";

const VacancySidebar = (props) => {
    const {vacancyList, lang} = props;

    return (
        <Styles>
            
            <div className="popular-course">
            <h5>{vacancySidebarText[lang].latest_vacancies}</h5>
                <div className="popular-items">
                    {
                        Array.isArray(vacancyList) && vacancyList.map((item, i) => (
                            <div className="item-box d-flex" key={i}>
                                <div className="item-content">
                                    <p className="title">
                                        <Link to={`/${lang}/vacancyList?id=${item.id}`}>{item._translations?.[`title_${lang}`] || item.title}</Link>
                                    </p>

                                    <p className="price"><i className="las la-calendar"></i> {item.createdAt}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </Styles>
    )

}

export default VacancySidebar
