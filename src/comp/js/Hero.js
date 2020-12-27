import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { propTypes } from 'react-bootstrap/esm/Image'
import profile_cut_white from '../../imgs/profiile_cut_white.png'

function Hero(props) {
    return (
        // py-5 padding at y axis of 5
        // sm ={12} responsible for the responsiveness when screen size changes
        // justify-content-center depends on the md
        <Jumbotron className = "bg-transparent">
            <Container fluid = {true}>
                <Row className = "justify-content-center py-5">
                    <img className = 'profile-cut'src = {profile_cut_white} />
                    <Col className = "row_color" md={8} sm={12}>
                        <h1 className = "display-1 font-weight-bolder">Welcome to my site!</h1>
                        <h3 className = "display-4 font-weight-light intro">My name is David Liu</h3>
                    </Col>
                </Row> 
            </Container>
        </Jumbotron>

    )
}

export default Hero