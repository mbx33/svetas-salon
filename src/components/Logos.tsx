interface MaskProps {
	picture: string;
}

const Mask12 = (props: MaskProps) => {
	return (
		<div className="relative mx-auto w-full my-8 max-w-xl bg-gradient-to-br from-pink-500 to-slate-500">
			{/* ::Mask svg */}
			<img
				src="https://fancytailwind.com/static/mask12-e9d312f0ddd8ef09656c9bcb6c7d8e4c.svg"
				alt=""
				className="relative z-10 transform scale-105"
				style={{
					filter:
						"invert(99%) sepia(47%) saturate(709%) hue-rotate(301deg) brightness(104%) contrast(104%)",
				}}
			/>
			{/* ::Picture */}
			<img
				src={props.picture}
				alt=""
				className="absolute top-1/2 left-1/2 max-h-10 object-cover filter invert transform -translate-y-1/2 -translate-x-1/2"
			/>
		</div>
	);
};

const LogoCloud = () => {
	return (
		<div className="mx-auto py-10 px-4 w-full max-w-7xl ">
			<div className="grid grid-cols-2 gap-y-5">
				{/* :TITLE CONTAINER */}
				<div className="col-span-full lg:col-span-1 flex justify-center items-center">
					{/* ::Title */}
					<h2 className="max-w-lg bg-gradient-to-br from-pink-500 to-slate-500 bg-clip-text text-center lg:text-left text-2xl sm:text-3xl text-transparent font-extrabold capitalize">
						The world's most innovative companies joined us
					</h2>
				</div>

				{/* :PARTNERS LOGOS */}
				<div className="col-span-full lg:col-span-1 flex flex-wrap items-center justify-evenly">
					{/* ::Partner 1 -> All */}
					<div className="mx-1 w-44">
						<Mask12 picture="https://fancytailwind.com/static/all-limitless-logo-a2bc67b04c70cbdaf47b69769ee38c39.svg" />
					</div>
					{/* ::Partner 2 -> Airbnb */}
					<div className="mx-1 w-44">
						<Mask12 picture="https://fancytailwind.com/static/airbnb-logo-ef1fe817361635d7e70b730325bada48.svg" />
					</div>
					{/* ::Partner 3 -> Stellantis */}
					<div className="mx-1 w-44">
						<Mask12 picture="https://fancytailwind.com/static/stellantis-logo-c510cf1f58c6b30a9936f8a2ad770350.png" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogoCloud;
