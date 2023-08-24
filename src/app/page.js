import Image from "next/image";
import Head from 'next/head';
import { AboutSection, Campaign, HeroBanner, Students,  } from "@/components";
import Beneficiaries from "@/components/Beneficiaries";
import Partners from "@/components/Partners";
import Sdgs from "@/components/Sdgs";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<AboutSection />
			<Sdgs />
			<Campaign />
			<Partners />
			<Beneficiaries />
			<Students />
		</main>
	);
}
