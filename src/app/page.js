import Image from "next/image";
import Head from 'next/head';
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import Beneficiaries from "@/components/Beneficiaries";
import Students from "@/components/Students";

export default function Home() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Ngozi Children Foundation</title>
			</Head>
			<main>
				<HeroBanner />
				<AboutSection />
				<Beneficiaries />
				<Students />
			</main>
		</>
	);
}
