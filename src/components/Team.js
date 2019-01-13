import { 
    Container, Row, Col
} from 'reactstrap'
import React from 'react'
import PropTypes from 'prop-types'
import TeamMember from './TeamMember'
import FullPage from './FullPage'
const Team=()=>(
<FullPage id="team">
    <Container>
        <h1>Team</h1>
        <Row>
            <Col xs={6}>
                <TeamMember className='bottomMargin'/>
            </Col>
            <Col xs={6}>
                <TeamMember className='bottomMargin'/>
            </Col>
        </Row>
        <Row>
            <Col xs={6}>
                <TeamMember className='bottomMargin'/>
            </Col>
            <Col xs={6}>
                <TeamMember className='bottomMargin'/>
            </Col>
        </Row>
    </Container>
</FullPage>
)

Team.propTypes={
}
export default Team