import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/shared/LeftSideNav';
import RightSideNav from '../pages/shared/RightSideNav';
import Header from '../pages/shared/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav />
                    </Col>
                    <Col lg='7'>
                        <Outlet />
                    </Col>
                    <Col lg='3' className=''>
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <h1>footer</h1>
        </div>
    );
};

export default Main;