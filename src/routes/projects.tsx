import ProjectCarousel from "@/components/project-carousel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MoveLeft } from "lucide-react";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Link to="/" replace={false} className="flex gap-2 mb-16">
				<MoveLeft />
				Back to Home
			</Link>

			<ProjectCarousel />
		</>
	);
}
