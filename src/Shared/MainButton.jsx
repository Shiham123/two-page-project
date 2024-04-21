import PropTypes from "prop-types"
import {Link} from "react-router-dom"

const MainButton = ({mainBtnText}) => {
	return (
		<Link to={`/protection`}>
			<button className="bg-[#16b139] text-white font-Poppins font-bold tracking-wider w-1.2 px-12 py-4 rounded-lg hover:bg-[#0d6521] transition-all duration-300">
				{mainBtnText}
			</button>
		</Link>
	)
}

export default MainButton

MainButton.propTypes = {mainBtnText: PropTypes.string.isRequired}
