import Header from "../../../Shared/Header"

const LeftSide = () => {
	return (
		<div>
			<Header headerText="Your deal" paraText="Next… Protection options" />

			<div className="flex gap-3">
				<hr className="w-1/3 border-t-2 border-[#1273c4]" />
				<hr className="w-1/3 border-t-2 border-[#d9d9d9]" />
				<hr className="w-1/3 border-t-2 border-[#d9d9d9]" />
			</div>
		</div>
	)
}

export default LeftSide
