import {useState} from "react"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import RightSideHighLight from "../../../Shared/RightSideHighLight"

const PriceBreakDown = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div className="my-20 border-[1px] border-black/30 p-4 rounded-lg">
				<h1 className="font-Poppins font-bold tracking-wider">Car price breakdown</h1>

				<div className="flex justify-between item-center my-4">
					<p className="font-Poppins text-sm">Car hire charge</p>
					<p className="font-Poppins text-sm">₹7,678.24</p>
				</div>

				<hr />
				<div className="flex justify-between item-center my-4">
					<p className="font-Poppins text-sm font-semibold">Price for 2 days:</p>
					<p className="font-Poppins text-sm font-semibold">₹7,678.24</p>
				</div>
			</div>

			<RightSideHighLight
				headingText="This car is costing you just ₹7,678.24 – a real bargain…"
				paraText="	At that time of year, the average small car at Paris Charles de Gaulle Airport costs
				₹8,541.06!"
			/>

			{/* accordion */}

			<div className="mt-10">
				<div
					className="flex justify-between items-center cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				>
					<h2 className="font-Poppins text-[17px] text-black font-semibold">Further information</h2>
					{isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
				</div>

				{isOpen && (
					<p className="flex flex-col justify-start gap-2 my-4">
						<span className="font-Poppins text-sm text-black">
							Legal Entity Name: Avis Belgium SA NV{" "}
						</span>
						<span className="font-Poppins text-sm text-black">+33821230641</span>
					</p>
				)}
			</div>
		</>
	)
}

export default PriceBreakDown
