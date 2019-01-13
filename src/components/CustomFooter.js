import { Container, Row, Col} from 'reactstrap'
import React from 'react'
import PropTypes from 'prop-types'
import Address from './Address'
const CustomFooter=()=>(
    <footer id="footer">
        <Container>
            <Row>
                <Col md={4}>
                    <p>
                        <Address/>
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <b>RESEARCH</b> <br/>
                        <a href="#">White Paper</a> <br/>
                        <a href="#">Sample Report</a> <br/>
                    </p>
                </Col>
                <Col md={4}>
                    <p>
                        <b>LINKS</b> <br/>
                        <a href="#">Cool link 1</a> <br/>
                        <a href="#">Cool link 2</a> <br/>
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
)

CustomFooter.propTypes={
}
export default CustomFooter