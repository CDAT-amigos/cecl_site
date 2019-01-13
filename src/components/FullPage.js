import React from 'react'
import PropTypes from 'prop-types'
const FullPage=({children, id})=>(
    <div className="fullBg" id={id}>
        {children}
    </div>
)
FullPage.propTypes={
    children:PropTypes.node.isRequired,
    id:PropTypes.string.isRequired
}
export default FullPage