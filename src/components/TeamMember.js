import { 
    Card, CardImg,
    CardTitle, CardText,
    CardBody
} from 'reactstrap'
import React from 'react'
import PropTypes from 'prop-types'
const TeamMember=({src="", name="Name", about="Some quick example text to build on the card title and make up the bulk of the card's content.", ...props})=>(
    <Card {...props}>
        <CardImg className="placeholderImg" top src={src} alt="Card image cap"/>
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{about}</CardText>
        </CardBody>
    </Card>
)
TeamMember.propTypes={
    src:PropTypes.string,
    name:PropTypes.string,
    about:PropTypes.string
}
export default TeamMember