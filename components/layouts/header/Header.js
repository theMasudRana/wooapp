import Head from "next/head";
import { isEmpty } from "lodash";
import Link from "next/link";

function Header({ header }) {
	const {
		headerMenuItems,
		siteTitle,
		siteDescription,
		favicon,
		siteLogoUrl,
	} = header || {};

	return (
		<>
			<Head>
				<title>{siteTitle || "Masud Rana | Personal Web Site"}</title>
				<link rel="icon" href={favicon || "/favicon.ico"} />
			</Head>
			<nav className="bg-white py-2 md:py-4">
				<div className="container px-4 mx-auto md:flex md:items-center">
					<div className="flex justify-between items-center">
						{siteLogoUrl ? (
							<img width={80} src={siteLogoUrl} alt={siteTitle} />
						) : (
							<>
								<h1>
									<a
										href="#"
										className="font-bold text-xl text-indigo-600"
									>
										{siteTitle}
									</a>
								</h1>
								<p>{siteDescription}</p>
							</>
						)}

						<button
							className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
							id="navbar-toggle"
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>

					<div
						className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
						id="navbar-collapse"
					></div>
					{!isEmpty(headerMenuItems) && headerMenuItems.length
						? headerMenuItems.map((menuItem) => (
								<Link
									key={menuItem?.ID}
									href={menuItem?.url ?? "/"}
								>
									<a
										className="block mt-4 lg:inline-block lg:mt-0 hover:text-brand-royal-blue duration-500 mr-10"
										dangerouslySetInnerHTML={{
											__html: menuItem.title,
										}}
									/>
								</Link>
						  ))
						: null}
				</div>
			</nav>
		</>
	);
}

export default Header;
