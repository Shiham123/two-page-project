const LeftSideButton = () => {
	return (
		<div className="flex justify-center items-center gap-8 sm:flex-col xs:flex-col w-full">
			<button className="border-[1px] border-black/30 flex flex-col justify-center items-center px-8 py-2 rounded-lg bg-white hover:bg-[#f1f7fc] transition-all duration-300">
				<span className="font-Poppins font-semibold text-[#1273c4] text-[17px]">Go to back</span>
				<span className="font-Poppins text-[#1273c4] text-[17px]">Without full protection</span>
			</button>

			<button className="border-none flex flex-col justify-center items-center px-8 py-2 rounded-lg bg-[#068323] hover:bg-[#0d6521] transition-all duration-300">
				<span className="font-Poppins font-semibold text-white text-[17px]">Go to back</span>
				<span className="font-Poppins text-white text-[17px]">With full protection</span>
			</button>
		</div>
	)
}

export default LeftSideButton
