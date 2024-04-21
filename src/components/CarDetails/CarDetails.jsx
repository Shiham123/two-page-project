import MainButton from "../../Shared/MainButton"
import LeftSide from "./LeftSide/LeftSide"
import RightSide from "./RightSide/RightSide"

const CarDetails = () => {
	return (
		<div className="grid grid-cols-8 gap-8">
			<LeftSide />
			<RightSide />
			<button className="col-start-5 my-20 col-span-2">
				<MainButton mainBtnText="Continue to book" />
			</button>
		</div>
	)
}

export default CarDetails
