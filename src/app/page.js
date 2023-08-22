import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import AboutSection from "@/components/AboutSection";
import Beneficiaries from "@/components/Beneficiaries";
import Students from "@/components/Students";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<AboutSection />
			<Beneficiaries />
			<Students />
		</main>
	);
}
