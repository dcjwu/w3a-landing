import PropTypes from "prop-types"

const ButtonAction = ({ children, type }) => {
   return (
      <button className="button-action effect" type={type}>
         {children}
      </button>
   )
}

ButtonAction.propTypes = { type: PropTypes.string.isRequired }

export default ButtonAction