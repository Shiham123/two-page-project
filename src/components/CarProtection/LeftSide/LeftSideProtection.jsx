import Header from "../../../Shared/Header"
import HeadingProgressBar from "../../../Shared/HeadingProgressBar"
import HighLight from "../../CarDetails/LeftSide/HighLight"
import ProtectionTable from "./ProtectionTable"

const LeftSideProtection = () => {
	return (
		<div className="col-span-6 my-8 p-4">
			<Header headerText="Protection options" paraText="Next… Checkout" />
			<HeadingProgressBar />

			<h1 className="font-Poppins text-xl font-bold tracking-wide">
				Protection... <span className="text-[#068323]">for peace of mind</span>
			</h1>

			<HighLight
				isProtectionPage="one"
				hightLightSpan="FREE cancellation"
				highLightText="Full refund if you cancel your plan anytime before pick-up"
			/>

			<p className="font-poppins text-[20px] pb-4">
				At the counter, the car hire company will block a deposit amount on your credit card. You
				could lose your whole deposit if the car is damaged or stolen, but as long as you have our
				Full Protection, Rentalcover.com will refund you! (The protection price you see includes all
				applicable taxes and fees).
			</p>

			<p className="font-poppins text-[20px] py-4">
				T&Cs and standard exclusions apply. Please read:
			</p>

			<a href="" className="cursor-pointer text-blue-600 hover:underline hover:text-blue-500">
				Protection Terms
			</a>

			<ProtectionTable />

			<HighLight
				isProtectionPage="two"
				hightLightSpan="Please note:"
				highLightText="Your own car insurance is unlikely to cover hire cars."
			/>
		</div>
	)
}

export default LeftSideProtection
