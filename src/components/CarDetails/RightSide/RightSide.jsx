import PriceBreakDown from "./PriceBreakDown"
import Timeline from "./Timeline"

const RightSide = () => {
	return (
		<div className="col-span-2 my-8">
			<div className="my-20 border-[1px] border-black/30 p-4 rounded-lg">
				<h1 className="font-Poppins font-bold tracking-wider">Pick-up and drop-off</h1>

				<Timeline />
			</div>
			<PriceBreakDown />
		</div>
	)
}

export default RightSide
