import ProjectCarousel from "@/components/project-carousel";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MoveLeft } from "lucide-react";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Link to="/" replace={false} className="flex gap-2 mb-[calc(20vh)]">
				<MoveLeft />
				Back to Home
			</Link>

			<ProjectCarousel />
		</div>
	);
}
