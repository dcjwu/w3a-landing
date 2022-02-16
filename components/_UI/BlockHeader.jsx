import PropTypes from "prop-types"

const BlockHeader = ({ children, secondPart }) => {
   return (
      <h2 className="custom__header">{children}<span> {secondPart}</span></h2>
   )
}

BlockHeader.propTypes = { secondPart: PropTypes.string }

export default BlockHeader