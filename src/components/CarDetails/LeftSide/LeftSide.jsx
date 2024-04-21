import Header from "../../../Shared/Header"
import CarDetail from "./CarDetail"
import CarImportant from "./CarImportant"
import HighLight from "./HighLight"

const LeftSide = () => {
	return (
		<div className="col-span-6 my-8">
			<Header headerText="Your deal" paraText="Next… Protection options" />

			<div className="flex gap-3 my-4">
				<hr className="w-1/3 border-t-2 border-[#1273c4]" />
				<hr className="w-1/3 border-t-2 border-[#d9d9d9]" />
				<hr className="w-1/3 border-t-2 border-[#d9d9d9]" />
			</div>

			<HighLight highLightText="Free cancellation up to 48 hours before pick-up" />
			<CarDetail />

			<hr className="my-14" />
			<CarImportant />
			<hr className="my-14" />
		</div>
	)
}

export default LeftSide
