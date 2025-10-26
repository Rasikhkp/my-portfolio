const Footer = () => {
	return (
		<footer
			className={`flex absolute bottom-0 px-4 py-5 left-0 w-full justify-end lg:justify-between items-end`}
		>
			<div className="text-sm hidden lg:block">
				© 2025 • Rasikh Khalil Pasha
			</div>
			<div className="text-right">
				<div className="text-sm">Want to hire me?</div>
				<a
					href="mailto:rasikhonly@gmail.com"
					className="underline underline-offset-4 text-[#BDBDBD]"
				>
					rasikhonly@gmail.com
				</a>
			</div>
		</footer>
	);
};

export default Footer;
