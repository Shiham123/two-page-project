import {CiCircleInfo} from "react-icons/ci"

import CarBadge from "../../../Shared/CarBadge"
import CarLogo from "../../../assets/62_logo_200.png"

const CarImportant = () => {
	return (
		<div className="flex justify-between items-center">
			{/* one */}
			<div className="flex items-center w-full gap-2">
				<img src={CarLogo} width={150} height={150} alt="" />
				<CarBadge badgeText="7.9" />
				<div>
					<h4 className="font-Poppins font-bold text-sm">Good</h4>
					<p className="font-Poppins text-sm">3000 + reviews</p>
				</div>
			</div>
			{/* two */}
			<div className="flex justify-center items-center w-1/3 gap-2">
				<CiCircleInfo color="#1879ca" size={30} />
				<a href="" className="text-blue-500 font-Poppins font-semibold">
					Important Info
				</a>
			</div>
		</div>
	)
}

export default CarImportant
