import LeftSideProtection from "./LeftSide/LeftSideProtection"
import RightSideProtection from "./RightSide/RightSideProtection"

const CarProtection = () => {
	return (
		<div className="grid grid-cols-8 md:flex md:flex-col sm:flex sm:flex-col xs:flex xs:flex-col gap-8 p-4">
			<LeftSideProtection />
			<RightSideProtection />
		</div>
	)
}

export default CarProtection
