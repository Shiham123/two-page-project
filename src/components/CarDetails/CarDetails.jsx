import LeftSide from "./LeftSide/LeftSide"
import RightSide from "./RightSide/RightSide"

const CarDetails = () => {
	return (
		<div className="grid grid-cols-8 gap-8">
			<LeftSide />
			<RightSide />
		</div>
	)
}

export default CarDetails
