import SubHeading from "../../../Shared/SubHeading"
import CarChoiceDetails from "./CarChoiceDetails"

const PriceDetails = () => {
	return (
		<div>
			<SubHeading subHeadingText="Included in the price" />
			<section className="grid grid-cols-12 xs:flex xs:flex-col sm:flex sm:flex-col">
				<div className="col-span-5 my-10">
					<CarChoiceDetails carChoiceText="Free cancellation up to 48 hours before pick-up" />
					<CarChoiceDetails carChoiceText="Theft Protection with ₹133,596 excess" />
				</div>
				<div className="col-span-5 my-10">
					<CarChoiceDetails carChoiceText="Collision Damage Waiver with ₹133,596 excess" />
					<CarChoiceDetails carChoiceText="Unlimited mileage" />
				</div>
			</section>
		</div>
	)
}

export default PriceDetails
