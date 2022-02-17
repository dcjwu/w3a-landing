import PropTypes from "prop-types"

const BlockHeader = ({ children, secondPart, ...otherProps }) => {
   return (
      <h2 {...otherProps} className="custom__header">{children}<span> {secondPart}</span></h2>
   )
}

BlockHeader.propTypes = { secondPart: PropTypes.string }

export default BlockHeader