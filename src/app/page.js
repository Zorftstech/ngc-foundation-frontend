import Image from "next/image";
import Beneficiaries from "@/components/Beneficiaries";
import { AboutSection, Campaign, HeroBanner, Students } from "@/components";

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<AboutSection />
			<Campaign />
			<Beneficiaries />
			<Students />
		</main>
	);
}
