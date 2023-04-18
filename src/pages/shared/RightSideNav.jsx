import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitch, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.png';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant='outline-primary'><FcGoogle /> find in goggle</Button>
                <Button variant='outline-dark'><FaLinkedin className='text-primary' /> find in linkedin</Button>
            </ButtonGroup>
            <h4 className='my-2'>Find us on</h4>
            <ListGroup>
                <ListGroup.Item className='mb-2'><FaFacebook /> facebook </ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter /> twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch /> twitch</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaInstagram /> instagram</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaGithub /> github</ListGroup.Item>
            </ListGroup>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;