import Footer from "../components/layouts/footer/Footer";
import Header from "../components/layouts/header/Header";
import Hero from "../components/layouts/hero/hero";
import axios from "axios";
export default function Home({ data }) {
	const { header, footer } = data;

	return (
		<>
			<Header header={header} />
			<Hero />
			<Footer footer={footer} />
		</>
	);
}

export async function getStaticProps() {
	const { data } = await axios.get(
		`${process.env.NEXT_PUBLIC_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
	);

	return {
		props: data || {},

		revalidate: 1,
	};
}
