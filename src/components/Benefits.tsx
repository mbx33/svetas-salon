import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const Benefits = () => {
	const features = [
		{
			name: "Private Security",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla vero voluptas illo temporibus.",
		},
		{
			name: "Maintenance",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla vero voluptas illo temporibus.",
		},
		{
			name: "Optimization",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla vero voluptas illo temporibus.",
		},
		{
			name: "Integration",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla vero voluptas illo temporibus.",
		},
		{
			name: "Professional Support",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla vero voluptas illo temporibus.",
		},
		{
			name: "Global Network",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla vero voluptas illo temporibus.",
		},
	];

	return (
		<div className="relative mx-auto my-8 py-16 px-6 w-full max-w-7xl bg-pink-900">
			{/* :BACKGROUND IMAGE */}
			<img
				src="https://fancytailwind.com/static/city11-d25911caeec666f297f4eed3279ea84e.jpg"
				alt=""
				className="absolute top-0 left-0 w-full h-full object-cover object-left mix-blend-multiply"
			/>

			{/* :MAIN CONTAINER */}
			<div className="relative w-full grid grid-cols-3 gap-y-12 lg:gap-x-8 text-white">
				{/* ::Title Container */}
				<div className="col-span-full lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
					<h2 className="text-base font-semibold text-blue-50 uppercase tracking-wide">
						Our Features
					</h2>
					<p className="text-3xl sm:text-4xl font-extrabold">This is what we do</p>
					<p className="max-w-2xl text-center lg:text-left text-lg text-blue-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nulla
						vero voluptas illo temporibus est id rerum.
					</p>
				</div>

				{/* ::Features */}
				<dl className="col-span-full lg:col-span-2 w-full grid grid-cols-2 gap-8">
					{features.map((feature) => (
						<div key={feature.name} className="col-span-full sm:col-span-1 flex">
							<ShieldCheckIcon className="flex-shrink-0 mr-2 w-8 h-8 text-white" />
							<div className="inline-flex flex-col space-y-3">
								<dt className="text-2xl font-bold">{feature.name}</dt>
								<dd className="text-blue-200">{feature.description}</dd>
							</div>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
};

export default Benefits;
