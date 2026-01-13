"use client";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export default function ProductDevelopmentPage() {
	const service = getServiceBySlug("product-development");
	if (!service) return null;

	return (
		<main>
			<ServicePageTemplate service={service} />
		</main>
	);
}

