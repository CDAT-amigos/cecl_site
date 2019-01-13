import { Container, Button} from 'reactstrap'
import React from 'react'
import PropTypes from 'prop-types'
import FullPage from './FullPage'
const Brand=({name})=>(
<FullPage id="top">
    <Container className="text-center">
        <h1 className="brandText display-1">{name}</h1>
        <p className="lead">Some cool mission statement or catchy phrase generating interest. Need a background image too.</p>
        <Button color="info" size="lg" outline href="#about">More</Button>
    </Container>
</FullPage>
)

Brand.propTypes={
    name:PropTypes.string.isRequired
}
export default Brand