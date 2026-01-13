"use client";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export default function SecurityTestingPage() {
	const service = getServiceBySlug("security-testing");
	if (!service) return null;

	return (
		<main>
			<ServicePageTemplate service={service} />
		</main>
	);
}

