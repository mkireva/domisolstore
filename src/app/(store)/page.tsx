import { publicUrl } from "@/env.mjs";
import { getTranslations } from "@/i18n/server";
import { ProductList } from "@/ui/products/product-list";
import { Button } from "@/ui/shadcn/button";
import { Card, CardContent } from "@/ui/shadcn/card";
import { YnsLink } from "@/ui/yns-link";
import * as Commerce from "commerce-kit";
import { CheckCircle, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next/types";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const products = await Commerce.productBrowse({ first: 6 });
	const t = await getTranslations("/");

	return (
		<main>
			<section className="rounded bg-neutral-100 py-8 sm:py-12">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">{t("hero.title")}</h2>
						<p className="text-pretty text-neutral-600">{t("hero.description")}</p>
						<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
							<YnsLink
								className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
								href="/product/songs"
							>
								{t("hero.action")} <ChevronRight className="ml-1 h-5 w-5" />
							</YnsLink>
							<Button className="inline-flex text-md h-10 items-center justify-center rounded-full bg-neutral-200 px-6 font-medium text-neutral-900 transition-colors hover:bg-neutral-200/90 focus:outline-none focus:ring-1 focus:ring-neutral-50">
								<a href="/leseprobe.pdf">Leseprobe</a>
								<ChevronRight className="ml-1 h-5 w-5" />
							</Button>
						</div>
					</div>

					<Image
						alt="Song book"
						loading="eager"
						priority={true}
						className="rounded"
						height={700}
						width={700}
						src="/bd-last.png"
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 640px) 70vw, 640px"
					/>
					<div className=" flex items-center justify-center "></div>
				</div>
			</section>
			<section className="w-full py-8 md:py-12 mt-4">
				<div className="container px-4 md:px-6">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-3xl text-center mb-8">Über das Buch</h1>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
						{[
							"Alle überlieferten Lieder und Musikkompositionen",
							"bulgarisch-deutsch",
							"lateinische Transliteration des Kyrillischen",
							"Übersetzung der Liedtexte ins Deutsche",
							"Kommentare zu den einzelnen Liedern",
							"Index der Lieder",
							"Digitale Version sofort nach Bestellung",
							"Eine hochwertige Leinen-Ausgabe, 340 Seiten",
						].map((feature, index) => (
							<Card key={index} className="bg-background">
								<CardContent className="flex items-center p-4">
									<CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
									<h3 className="font-semibold">{feature}</h3>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			<section>
				<div className="container flex flex-col items-center justify-center gap-4 py-4 mb-4">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-3xl text-center mb-2">Das Projekt</h2>
					<p className="text-base md:text-lg">
						Vor ca. sieben Jahren haben wir die Arbeit an einem Projekt begonnen, welches sich zum Ziel
						gesetzt hat, Petar Danovs musikalische Kompositionen einem breiteren Publikum zugänglich zu
						machen. So ist ein Sammelband mit seinen Liedern und Instrumentalwerken, sowie mit den Liedern
						seiner Schüler in bulgarischer und deutscher Sprache entstanden.
					</p>
					<p className="text-base md:text-lg">
						Er enthält neben dem Notentext und dem literarischen Text in bulgarischer Sprache eine
						latinisierte Transliteration des Kyrillischen sowie eine Übersetzung der Liedtexte in deutscher
						Sprache. Hierbei war das Ziel, eine möglichst genaue und zugleich wohlklingende deutsche
						Übersetzung darzubieten, die das Verständnis des geistigen Gehalts der Musik und der ihr zugrunde
						liegenden Ideen unterstützt. Von einer metrischen, in deutscher Sprache zu singenden Übersetzung
						der Liedtexte wurde bewusst abgesehen, weil sie das Klangbild der Lieder verfälschen würde.
					</p>
					<p className="text-base md:text-lg">
						Durch diesen Sammelband können Sie alle überlieferten Melodien und Lieder von Petar Danov
						kennenlernen und sie in Ihre tägliche Musikpraxis einbeziehen. Der Vorzug dieses Sammelbandes
						besteht darin, dass er Ihnen durch die Übersetzung der einzelnen Liedtexte einen genaueren
						Einblick in die Ideen, die diesen Liedern zugrunde liegen, gewähren wird und sie so genauer
						wissen, wovon sie gerade singen.
					</p>
					<p className="text-base md:text-lg">
						Der Sammelband existiert im Moment nur in digitaler Form. Wir möchten jedoch dieses Projekt mit
						der Herausgabe eines hochwertigen Buches beenden, welches nicht nur uns, sondern insbesondere
						alle, die von diesem Buch Gebrauch machen werden, erfreut. Hierfür haben wir die Druckerei, die
						für einen renommierten deutschen Musikverlag druckt, kontaktiert und möchten dort das Buch in
						Auftrag geben.
					</p>
					<p className="text-base md:text-lg">
						Dieser letzte Schritt ist jedoch mit einem gewissen finanziellen Aufwand verbunden. Sie können die
						Finalisierung des Projektes durch die Vorbestellung des Buches unterstützen. Sobald genügend
						Vorbestellungen getätigt wurden, werden wir entsprechend eine erste Auflage bei der Druckerei in
						Auftrag geben und anschließend die vorbestellten Bücher versenden. Alle, die das Buch
						vorbestellen, werden sofort nach der Bestellung eine digitale Kopie des Buches erhalten.
					</p>
					<p className="text-base md:text-lg">
						Wir möchten uns bei Ihnen für Ihre freundlichen Unterstützung bedanken und wünschen angenehme
						kollektive und individuelle musikalische Beschäftigungen.
					</p>
				</div>
			</section>
			<div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full mb-6"></div>
			<section>
				<div className="container py-8">
					<h2 className="text-3xl font-semibold mb-6">Alle Produkte</h2>
					<ProductList products={products} />
				</div>
			</section>
		</main>
	);
}
