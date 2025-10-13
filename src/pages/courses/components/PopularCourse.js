import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from '../styles/popularCourse.js';

// JSON import
import popularCourse from "../../../data/course/popularCourse.json";

const PopularCourse = (props) => {
    const { news, lang } = props;

    return (
        <Styles>
            {/* Popular Course */}
            <div className="popular-course">
                <h5>{popularCourse[lang]?.title}</h5>
                <div className="popular-items">
                    {Array.isArray(news) && news.map((item, i) => (
                        <div className="item-box d-flex" key={i}>
                            <div className="item-content">
                                <p className="title">
                                    <Link to={`/${lang}/event-details?id=${item.id}`}>
                                        {item._translations?.[`title_${lang}`] || item.title}
                                    </Link>
                                </p>
                                <p className="price">{item.created_at}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styles>
    )
}

export default PopularCourse;
