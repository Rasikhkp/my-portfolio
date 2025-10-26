import { createFileRoute, Link } from "@tanstack/react-router";
import { MoveLeft } from "lucide-react";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<Link to="/" replace={false} className="flex gap-2 mb-16">
				<MoveLeft />
				Back to Home
			</Link>

			<p className="w-[284px] lg:w-[332px] lg:mx-auto">
				<span className="text-xl text-white">About</span>
				<br />
				<br />
				Hi, I’m Rasikh — a developer who enjoys making ideas come alive through
				code. I like building things that feel simple, helpful, and a bit
				personal. Tech, for me, isn’t just about logic — it’s about care.
				<br />
				<br />
				When I’m not coding, I’m probably helping my mom’s snack business or
				tinkering with random side projects for fun.
				<br />
				<br />
				If you’ve got an idea, hit me up — let’s build something cool.
			</p>
		</>
	);
}
