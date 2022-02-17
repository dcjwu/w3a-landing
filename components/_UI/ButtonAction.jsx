import PropTypes from "prop-types"

const ButtonAction = ({ children, type, ...otherProps }) => {
   return (
      <button {...otherProps} className="button-action effect" type={type}>
         {children}
      </button>
   )
}

ButtonAction.propTypes = { type: PropTypes.string.isRequired }

export default ButtonAction