import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PopularCourse from './PopularCourse';

class CourseSidebar extends Component {
    render() {
        return (
            <div className="course-sidebar">
                <Row>
                    <Col md="12">
                        <PopularCourse/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CourseSidebar
