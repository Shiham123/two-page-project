import {FaTimes, FaCheckCircle} from "react-icons/fa"

const ProtectionTable = () => {
	return (
		<>
			<div className="overflow-x-auto py-12 px-4">
				<table className="table border-[1px] border-black/20 rounded-lg p-4">
					{/* head */}
					<thead>
						<tr>
							<th className="font-Poppins font-bold text-xl text-black">What is covered</th>
							<th className="font-Poppins font-bold text-xl text-black">
								No additional protection
							</th>
							<th className="font-Poppins font-bold text-xl text-[#068323]">Full Protection</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr>
							<td className="font-Poppins text-[17px] text-blue-500 cursor-pointer">
								The car&apos;s excess
							</td>
							<td>
								<FaTimes />
							</td>
							<td>
								<FaCheckCircle size={30} color="#068323" />
							</td>
						</tr>
						{/* row 2 */}
						<tr>
							<td className="font-Poppins text-[17px] text-blue-500 cursor-pointer">
								Windows, mirrors, wheels & tyres
							</td>
							<td>
								<FaTimes />
							</td>
							<td>
								<FaCheckCircle size={30} color="#068323" />
							</td>
						</tr>
						{/* row 3 */}
						<tr>
							<td className="font-Poppins text-[17px] text-blue-500 cursor-pointer">
								Administration and breakdown charges
							</td>
							<td>
								<FaTimes />
							</td>
							<td>
								<FaCheckCircle size={30} color="#068323" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

export default ProtectionTable
