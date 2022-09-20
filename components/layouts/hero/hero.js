function Hero() {
	return (
		<section class="min-h-fit bg-blue-100 p-32 text-center">
			<h1 class="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
				Welcome to My Site!
			</h1>

			<p class="text-gray-700 text-lg mb-8">
				Browse around for amazing content!
			</p>

			<div class="space-x-2">
				<a
					href="#"
					class="py-3 px-8 bg-gray-400 hover:bg-gray-300 text-gray-800 hover:text-gray-900 rounded-lg hover:shadow-xl transition duration-300"
				>
					Learn More
				</a>
				<a
					href="#"
					class="py-3 px-8 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded-lg hover:shadow-xl transition duration-300"
				>
					Buy Now
				</a>
			</div>
		</section>
	);
}

export default Hero;
