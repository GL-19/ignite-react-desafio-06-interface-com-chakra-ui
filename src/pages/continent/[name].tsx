import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { CitiesList } from "../../components/CitiesList";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentData } from "../../components/ContinentData";
import { Header } from "../../components/Header";

interface CityData {
	name: string;
	country: string;
	cityImageUrl: string;
	countryFlagUrl: string;
}

interface ContinentProps {
	name: string;
	bannerUrl: string;
	description: string;
	countriesQuantatity: string | number;
	languagesQuantatity: string | number;
	mostVisitedCitiesQuantatity: string | number;
	cities: CityData[];
}

function Continent({
	name,
	cities,
	bannerUrl,
	description,
	countriesQuantatity,
	languagesQuantatity,
	mostVisitedCitiesQuantatity,
}: ContinentProps) {
	return (
		<>
			<Head>
				<title>{name}</title>
			</Head>
			<>
				<Header />

				<ContinentBanner name={name} bannerUrl={bannerUrl} />

				<Flex
					mx={["1rem", "8.5rem"]}
					my={["2rem", "4rem"]}
					flexDir="column"
					gap={["2rem", "5rem"]}
				>
					<ContinentData
						description={description}
						countriesQuantatity={countriesQuantatity}
						languagesQuantatity={languagesQuantatity}
						mostVisitedCitiesQuantatity={mostVisitedCitiesQuantatity}
					/>

					<CitiesList cities={cities} />
				</Flex>
			</>
		</>
	);
}

export default Continent;

const data: ContinentProps = {
	name: "Europa",
	bannerUrl: "/Europa/europe-banner.svg",
	description: `A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a lesta pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.`,
	countriesQuantatity: 50,
	languagesQuantatity: 60,
	mostVisitedCitiesQuantatity: 27,
	cities: [
		{
			name: "Londres",
			country: "Reino Unido",
			cityImageUrl: "/Europa/London.svg",
			countryFlagUrl: "/Europa/uk-flag.png",
		},
		{
			name: "Paris",
			country: "França",
			cityImageUrl: "/Europa/Paris.svg",
			countryFlagUrl: "/Europa/fr-flag.png",
		},
		{
			name: "Roma",
			country: "Itália",
			cityImageUrl: "/Europa/Rome.svg",
			countryFlagUrl: "/Europa/it-flag.png",
		},
		{
			name: "Praga",
			country: "República Tcheca",
			cityImageUrl: "/Europa/Prague.svg",
			countryFlagUrl: "/Europa/czk-flag.png",
		},
		{
			name: "Amsterdã",
			country: "Holanda",
			cityImageUrl: "/Europa/Amsterdan.svg",
			countryFlagUrl: "/Europa/ne-flag.png",
		},
	],
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { name: "africa" } },
			{ params: { name: "america-do-norte" } },
			{ params: { name: "america-do-sul" } },
			{ params: { name: "asia" } },
			{ params: { name: "europa" } },
			{ params: { name: "oceania" } },
		],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }) => {
	const { name } = params;
	let found;

	switch (name) {
		case "africa":
		case "america-do-norte":
		case "america-do-sul":
		case "asia":
		case "europa":
		case "oceania":
			found = true;
			break;
		default:
			found = false;
	}

	if (!found) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			...data,
		},
	};
};
