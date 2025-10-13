import React from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import Pagination from './../../../components/Pagination';

const CourseItemList = ({news, lang}) => {
    console.log(lang);
    return (
        <>
            {Array.isArray(news) && news.map((item, i) => {
                const imageUrl = item.image?.base_url && item.image?.path
                    ? `${item.image?.base_url}/${item.image.path}`
                    : "/assets/images/default.jpg";

                return (
                    <Col md="12" key={i}>
                        <div className="course-item d-flex">
                            <div className="course-image-box">
                                <div className="course-image" style={{backgroundImage: `url(${imageUrl})`}}/>
                            </div>
                            <div className="course-content" style={{textAlign: "justify"}}>
                                <h6 className="heading">
                                    <Link
                                        to={`/${lang}/event-details?id=${item.id}`}>{item._translations?.[`title_${lang}`] || item.title}</Link>
                                </h6>
                                <p className="desc">{item._translations?.[`info_${lang}`] || item.info}</p>
                                <Link className="details-btn"
                                      to={`/${lang}/event-details?id=${item.id}`}>Batafsil</Link>
                            </div>
                        </div>
                    </Col>
                );
            })}

            <Col md="12" className="text-center">
                <Pagination/>
            </Col>
        </>
    );
};

export default CourseItemList;
