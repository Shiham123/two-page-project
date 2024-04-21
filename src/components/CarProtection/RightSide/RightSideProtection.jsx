import PriceBreakDown from "../../CarDetails/RightSide/PriceBreakDown"
import Timeline from "../../CarDetails/RightSide/Timeline"
import RightSideHighLight from "../../../Shared/RightSideHighLight"

const RightSideProtection = () => {
	return (
		<div className="col-span-2 my-8 p-4">
			<div className="my-20 border-[1px] border-black/30 p-4 rounded-lg">
				<h1 className="font-Poppins font-bold tracking-wider md:mx-auto md:text-center">
					Pick-up and drop-off
				</h1>
				<hr className="md:block hidden" />

				<Timeline />
			</div>

			<RightSideHighLight headingText="Fast and reliable" paraText="Over 99% of claims paid out" />
			<PriceBreakDown />
		</div>
	)
}

export default RightSideProtection
