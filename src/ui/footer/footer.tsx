// import { getTranslations } from "@/i18n/server";
// import StoreConfig from "@/store.config";
import { YnsLink } from "@/ui/yns-link";
import { Mail, Youtube } from "lucide-react";

// const sections = [
// 	{
// 		header: "Shop",
// 		links: StoreConfig.categories.map(({ name, slug }) => ({
// 			label: name,
// 			href: `/category/${slug}`,
// 		})),
// 	},
// 	{
// 		header: "",
// 		links: [
// 			{
// 				label: "About",
// 				href: "/about",
// 			},
// 			{
// 				label: "Impressum",
// 				href: "/impressum",
// 			},
// 			{
// 				label: "Contact Us",
// 				href: "mailto:kireva@proton.me",
// 			},
// 		],
// 	},
// ];

export async function Footer() {
	// const t = await getTranslations("Global.footer");

	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-8">
			{/* <div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
				<div className="">
					<div className="flex w-full max-w-sm flex-col gap-2">
						<h3 className="font-semibold">{t("newsletterTitle")}</h3>
						<Newsletter />
					</div>
				</div>

				<nav className="grid grid-cols-2 gap-16">
					{sections.map((section) => (
						<section key={section.header}>
							<h3 className="mb-2 font-semibold">{section.header}</h3>
							<ul role="list" className="grid gap-1">
								{section.links.map((link) => (
									<li key={link.label}>
										<YnsLink className="underline-offset-4 hover:underline" href={link.href}>
											{link.label}
										</YnsLink>
									</li>
								))}
							</ul>
						</section>
					))}
				</nav>
			</div> */}
			<div className="container mt-2 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>© 2025 Domisol</p>
				</div>
				<div className="flex items-center gap-4">
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="/impressum"
					>
						<p className="">Impressum</p>
					</YnsLink>
				</div>
				<div className="flex items-center gap-4">
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="mailto:kireva@proton.me"
					>
						<Mail className="h-4 w-4" />
						<span className="sr-only">E-Mail</span>
					</YnsLink>
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="https://www.youtube.com/@paneurhythmie"
					>
						<Youtube className="h-4 w-4" />
						<span className="sr-only">Youtube</span>
					</YnsLink>
				</div>
			</div>
		</footer>
	);
}

// function TwitterIcon(props: SVGAttributes<SVGSVGElement>) {
// 	return (
// 		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 596" fill="none">
// 			<path
// 				fill="#fff"
// 				d="m1 19 230 307L0 577h52l203-219 164 219h177L353 252 568 19h-52L329 221 179 19H1Zm77 38h82l359 481h-81L78 57Z"
// 			/>
// 		</svg>
// 	);
// }
