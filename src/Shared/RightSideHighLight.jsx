import PropTypes from "prop-types"

const RightSideHighLight = ({headingText, paraText}) => {
	return (
		<div className="bg-[#e9ffef] p-4 my-4 border-[1px] border-black rounded-lg flex flex-col items-center gap-4">
			<h2 className="font-Poppins text-[17px] text-black font-semibold">{headingText}</h2>
			<p className="font-Poppins text-[17px] text-black ">{paraText}</p>
		</div>
	)
}

export default RightSideHighLight

RightSideHighLight.propTypes = {
	headingText: PropTypes.string.isRequired,
	paraText: PropTypes.string.isRequired,
}
