import Image from "next/image";
<<<<<<< HEAD
import Head from 'next/head';
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
=======
>>>>>>> 1542ab850bfbcd9a4fbc17356ee1e704b4efe855
import Beneficiaries from "@/components/Beneficiaries";
import { AboutSection, Campaign, HeroBanner, Students } from "@/components";
import Partners from "@/components/Partners";
import Sdgs from "@/components/Sdgs";

export default function Home() {
	return (
<<<<<<< HEAD
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
=======
		<main>
			<HeroBanner />
			<AboutSection />
			<Sdgs />
			<Campaign />
			<Partners />
			<Beneficiaries />
			<Students />
		</main>
>>>>>>> 1542ab850bfbcd9a4fbc17356ee1e704b4efe855
	);
}
