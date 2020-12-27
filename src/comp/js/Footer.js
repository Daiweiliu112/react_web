import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        // mt-5 is margin top
        // justify-content-between p-3 justifies position between contents
        <footer className="mt-5">
            <Container fluid={true}>
                
                <Row className = "border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        David Liu
            </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Site by David Liu 2020
            </Col>
                </Row>
            </Container>

        </footer>

    )

}

export default Footer