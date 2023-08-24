import Image from "next/image";
import Head from 'next/head';
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import Beneficiaries from "@/components/Beneficiaries";
import { AboutSection, Campaign, HeroBanner, Students } from "@/components";
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
