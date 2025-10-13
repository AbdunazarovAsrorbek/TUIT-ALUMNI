import React, { Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import Pagination from './../../../components/Pagination';

const EventItemList = (props) => {

    const {news} = props;

    return (
        <Fragment>
            {/* Course Item */}
            {
                Array.isArray(news) && news.map((item, i) => (
                    <Col md="12" key={i}>
                        <div className="course-item d-flex">
                            <div className="course-image-box">
                                <div className="course-image"
                                     style={{backgroundImage: `url(${item.image?.base_url}/${item.image?.path})`}}>

                                </div>
                            </div>
                            <div className="course-content" style={{textAlign: "justify"}}>
                                <h6 className="heading">
                                    <Link to={`/event-details?id=${item.id}`}>{item.title}</Link>
                                </h6>

                                <p className="desc">{item.info}</p>
                                <Link className="details-btn" to={`/event-details?id=${item.id}`}>Batafsil</Link>
                            </div>
                        </div>
                    </Col>
                ))
            }

            <Col md="12" className="text-center">
                <Pagination/>
            </Col>

        </Fragment>
    )

}

export default EventItemList
