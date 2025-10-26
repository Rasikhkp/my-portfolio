import { Link } from "@tanstack/react-router";

const SideNav = () => {
	return (
		<nav className="fixed -right-[94px] top-1/2 -translate-y-1/2 origin-center -rotate-90 flex bg-white text-black px-6 py-3 gap-4">
			<Link
				to="/projects"
				className="block whitespace-nowrap text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
				activeProps={{ className: "underline" }}
			>
				Projects
			</Link>
			<Link
				to="/about"
				className="block whitespace-nowrap text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
				activeProps={{ className: "underline" }}
			>
				About
			</Link>
			<Link
				to="/"
				className="block whitespace-nowrap text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
				activeProps={{ className: "underline" }}
			>
				Home
			</Link>
		</nav>
	);
};

export default SideNav;
