"use client";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export default function WebMobileDevelopmentPage() {
	const service = getServiceBySlug("web-mobile-development");
	if (!service) return null;

	return (
		<main>
			<ServicePageTemplate service={service} />
		</main>
	);
}

