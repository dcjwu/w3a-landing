import PropTypes from "prop-types"

const SolutionsCard = ({ heading, text }) => {
   return (
      <div className="solution">
         <h4>{heading}</h4>
         <hr/>
         <p>{text}</p>
      </div>
   )
}

SolutionsCard.propTypes = {
   heading: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired
}

export default SolutionsCard