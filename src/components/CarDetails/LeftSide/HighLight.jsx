import PropTypes from "prop-types"
import {CiCircleCheck} from "react-icons/ci"

const HighLight = ({highLightText}) => {
	return (
		<div className="bg-[#e9ffef] p-4 my-4 border-[1px] border-black rounded-lg flex items-center gap-4">
			<CiCircleCheck size={30} color="#068323" />
			<h2 className="font-Poppins text-[17px] text-black">{highLightText}</h2>
		</div>
	)
}

export default HighLight

HighLight.propTypes = {highLightText: PropTypes.string.isRequired}
