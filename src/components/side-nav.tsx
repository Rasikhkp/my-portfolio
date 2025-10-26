import { Link } from "@tanstack/react-router";

const SideNav = () => {
	return (
		<nav className="fixed -right-[94px] top-1/2 -translate-y-1/2 origin-center -rotate-90 flex bg-white text-black px-6 py-3 gap-4">
			<Link
				to="/projects"
				className="block whitespace-nowrap text-sm font-medium"
				activeProps={{ className: "underline underline-offset-2" }}
			>
				Projects
			</Link>
			<Link
				to="/about"
				className="block whitespace-nowrap text-sm font-medium"
				activeProps={{ className: "underline underline-offset-2" }}
			>
				About
			</Link>
			<Link
				to="/"
				className="block whitespace-nowrap text-sm font-medium"
				activeProps={{ className: "underline underline-offset-2" }}
			>
				Home
			</Link>
		</nav>
	);
};

export default SideNav;
