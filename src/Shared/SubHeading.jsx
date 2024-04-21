import PropTypes from "prop-types"

const SubHeading = ({subHeadingText}) => {
	return <h3 className="font-Poppins font-bold text-xl">{subHeadingText}</h3>
}

export default SubHeading

SubHeading.propTypes = {subHeadingText: PropTypes.string.isRequired}
