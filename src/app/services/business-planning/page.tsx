"use client";
import { getServiceBySlug } from "@/data/services";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export default function BusinessPlanningPage() {
	const service = getServiceBySlug("business-planning");
	if (!service) return null;

	return (
		<main>
			<ServicePageTemplate service={service} />
		</main>
	);
}
