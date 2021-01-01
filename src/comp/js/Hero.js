import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSpring, animated } from "react-spring"
import { Link } from 'react-router-dom';

import { propTypes } from 'react-bootstrap/esm/Image'
import profile_cut_white from '../../imgs/profiile_cut_white.png'

import { Modal } from '../../comp/js/Modal.js'
import { GlobalStyle } from '../../comp/js/GlobalStyle.js';

function Hero(props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const [{ w, color }, set] = useSpring(() => ({ w: 0, color: "#000000" }));
    const [{ x, color2 }, set2] = useSpring(() => ({ x: 0, color2: "#000000" }));
    const [{ y, color3 }, set3] = useSpring(() => ({ y: 0, color3: "#000000" }));
    const [{ z, color4 }, set4] = useSpring(() => ({ z: 0, color4: "#000000" }));

    return (
        // py-5 padding at y axis of 5
        // sm ={12} responsible for the responsiveness when screen size changes
        // justify-content-center depends on the md
        <div>
            <Modal showModal={showModal} setShowModal={setShowModal} />


            <Jumbotron className="bg-transparent">



                <Container fluid={true}>
                    <Row className="justify-content-center py-5">
                        <img className='profile-cut' src={profile_cut_white} />
                        <Col className="row_color" md={8} sm={12}>
                            <h1 className="display-3 font-weight-bolder">Hello! I'm David.</h1>
                            <button onClick={openModal}
                                onMouseEnter={() => set({ w: 100, color: "#000000" })}
                                onMouseLeave={() => set({ w: 0, color: "#000000" })}
                            >
                                <animated.span style={{ color }}>
                                    I am studying statistics at University of Waterloo
                                </animated.span>
                                <animated.div
                                    style={{ transform: w.interpolate(v => `translateX(${v}%`) }}
                                    className="glance"
                                />
                            </button>

                            <button className='button_x'
                                onMouseEnter={() => set2({ x: 100, color2: "#fff" })}
                                onMouseLeave={() => set2({ x: 0, color2: "#000000" })}
                            >
                                <animated.span style={{ color2 }}>
                                    I am an aspiring programmer
                            </animated.span>
                                <animated.div
                                    style={{ transform: x.interpolate(v => `translateX(${v}%`) }}
                                    className="glance"
                                />
                            </button>
                            <br />


                            <button
                                onMouseEnter={() => set3({ y: 100, color: "#fff" })}
                                onMouseLeave={() => set3({ y: 0, color: "#000000" })}
                            >
                                <animated.span style={{ color3 }}>
                                    I am a history buff
                            </animated.span>
                                <animated.div
                                    style={{ transform: y.interpolate(v => `translateX(${v}%`) }}
                                    className="glance"
                                />
                            </button>
                            <br />
                            <button
                                onMouseEnter={() => set4({ z: 100, color: "#fff" })}
                                onMouseLeave={() => set4({ z: 0, color: "#000000" })}
                            >
                                <animated.span style={{ color4 }}>
                                    I am a cooking enthusiast
                            </animated.span>
                                <animated.div
                                    style={{ transform: z.interpolate(v => `translateX(${v}%`) }}
                                    className="glance"
                                />
                            </button>

                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>

    )
}

export default Hero