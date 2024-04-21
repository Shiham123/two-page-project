import SubHeading from "../../../Shared/SubHeading"
import CarChoiceDetails from "./CarChoiceDetails"

import ChoiceImg from "../../../assets/good-choice-2x.png"

const CarChoice = () => {
	return (
		<div>
			<SubHeading subHeadingText="Great Choice!" />
			<section className="grid grid-cols-12 xs:flex xs:flex-col sm:flex sm:flex-col">
				<div className="col-span-5 my-10">
					<CarChoiceDetails carChoiceText="Customer rating: 7.9 / 10" />
					<CarChoiceDetails carChoiceText="Most popular fuel policy" />
					<CarChoiceDetails carChoiceText="Easy to find counter" />
				</div>
				<div className="col-span-5 my-10">
					<CarChoiceDetails carChoiceText="Rental counter in terminal" />
					<CarChoiceDetails carChoiceText="Short queues" />
					<CarChoiceDetails carChoiceText="Free Cancellation" />
				</div>
				<div className="col-span-2">
					<img src={ChoiceImg} width={200} height={200} alt="Good choice" title="good choice" />
				</div>
			</section>
		</div>
	)
}

export default CarChoice
