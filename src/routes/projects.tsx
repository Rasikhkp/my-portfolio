import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, MoveLeft } from "lucide-react";

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

			<div className="pr-14 fixed top-1/2 -translate-y-1/2">
				<div className="bg-[#262626] p-4 rounded-4xl">
					<img src="/public/ss.png" className="rounded-2xl mb-4" />
					<div className="text-xl text-white">Pestindo ERP</div>
					<div className="mb-4">PT. Pestindo Mandiri Utama</div>

					<button className="flex justify-center items-center w-full py-3 text-[#202020] rounded-2xl bg-white">
						More Details
					</button>
				</div>
			</div>

			<div className="flex gap-2 fixed top-1/2 translate-y-44">
				<div className="bg-white rounded-full text-[#202020] p-2">
					<ChevronLeft />
				</div>
				<div className="bg-white rounded-full text-[#202020] p-2">
					<ChevronRight />
				</div>
			</div>
		</>
	);
}
