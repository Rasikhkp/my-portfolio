import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import SideNav from "@/components/side-nav";
import Footer from "@/components/footer";

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-[100dvh] py-4 px-5  bg-[#202020] text-[#878787] flex flex-col">
			<Outlet />
			<SideNav />
			<Footer />

			{import.meta.env.DEV && (
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
			)}
		</div>
	),
});
