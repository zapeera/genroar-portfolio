"use client";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export default function MarketingPage() {
	const service = getServiceBySlug("marketing");
	if (!service) return null;

	return (
		<main>
			<ServicePageTemplate service={service} />
		</main>
	);
}
