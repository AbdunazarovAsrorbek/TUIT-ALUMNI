import React from 'react';
import { Link } from 'react-router-dom';
import { Styles } from '../courses/styles/popularCourse';

// JSON import
import sidebarPopularCourse from "../../data/event/sidebarPopularCourse.json";

const SidebarPopularCourse = (props) => {
    const { eventList, lang } = props;

    return (
        <Styles>
            {/* Popular Course */}
            <div className="popular-course">
                <h5>{sidebarPopularCourse[lang]?.title}</h5>
                <div className="popular-items">
                    {Array.isArray(eventList) && eventList.map((item, i) => (
                        <div className="item-box d-flex" key={i}>
                            <div className="item-content">
                                <p className="title">
                                    <Link to={`/${lang}/eventById?id=${item.id}`}>
                                        {item._translations?.[`title_${lang}`] || item.title}
                                    </Link>
                                </p>
                                <p className="price">
                                    <i className="las la-clock"></i> {item.eventDate}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Styles>
    )
}

export default SidebarPopularCourse;
