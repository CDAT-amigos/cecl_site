import { Container, Row, Col, Button} from 'reactstrap'
import React from 'react'
import FullPage from './FullPage'
import PropTypes from 'prop-types'
const About=()=>(
<FullPage id="about">
    <Container >
        <Row className='bottomMargin'>
            <Col xs={6}>
                <h2>What</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci a dolor luctus, eu ultricies velit aliquam. Pellentesque volutpat non ligula eu porttitor. Quisque posuere blandit nisi. Curabitur aliquet tempus ex sit amet auctor. Etiam sit amet tellus aliquet, pulvinar sem id, fringilla lorem. Maecenas volutpat tellus a velit pharetra, vitae congue nisi ultrices. Sed eget dui vitae erat elementum dignissim in vitae turpis. Praesent consectetur tincidunt libero, in commodo nisi. Pellentesque tempor nulla nec placerat elementum.</p>
            </Col>
            <Col xs={6}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/F085WwMIWgM?rel=0" allowfullscreen title="what"></iframe>
                </div>
            </Col>
        </Row>
        <Row className='bottomMargin'>
            <Col xs={6}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-vtaJOoELo8?rel=0" allowfullscreen title="why"></iframe>
                </div>
            </Col>
            <Col xs={6}>
                <h2>Why</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci a dolor luctus, eu ultricies velit aliquam. Pellentesque volutpat non ligula eu porttitor. Quisque posuere blandit nisi. Curabitur aliquet tempus ex sit amet auctor. Etiam sit amet tellus aliquet, pulvinar sem id, fringilla lorem. Maecenas volutpat tellus a velit pharetra, vitae congue nisi ultrices. Sed eget dui vitae erat elementum dignissim in vitae turpis. Praesent consectetur tincidunt libero, in commodo nisi. Pellentesque tempor nulla nec placerat elementum.</p>
                <Button outline color="info">White Paper</Button>
            </Col>
        </Row>
        <Row className='bottomMargin'>
            <Col xs={6}>
                <h2>How</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat orci a dolor luctus, eu ultricies velit aliquam. Pellentesque volutpat non ligula eu porttitor. Quisque posuere blandit nisi. Curabitur aliquet tempus ex sit amet auctor. Etiam sit amet tellus aliquet, pulvinar sem id, fringilla lorem. Maecenas volutpat tellus a velit pharetra, vitae congue nisi ultrices. Sed eget dui vitae erat elementum dignissim in vitae turpis. Praesent consectetur tincidunt libero, in commodo nisi. Pellentesque tempor nulla nec placerat elementum.</p>
                <Button outline color="info">Sample Report</Button>
            </Col>
            <Col xs={6}>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/11s0bvPKQPc?rel=0" allowfullscreen title="how"></iframe>
                </div>
            </Col>
        </Row>
    </Container>
</FullPage>
)

About.propTypes={
}
export default About