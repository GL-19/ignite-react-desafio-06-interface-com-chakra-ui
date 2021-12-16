import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { CitiesList } from "../components/CitiesList";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentData } from "../components/ContinentData";
import { Header } from "../components/Header";

interface ContinentProps {
	title: string;
}

const data = [
	{
		name: "Londres",
		country: "Reino Unido",
		cityImageUrl: "Europe/London.svg",
		countryFlagUrl: "Europe/uk-flag.png",
	},
	{
		name: "Paris",
		country: "França",
		cityImageUrl: "Europe/Paris.svg",
		countryFlagUrl: "Europe/fr-flag.png",
	},
	{
		name: "Roma",
		country: "Itália",
		cityImageUrl: "Europe/Rome.svg",
		countryFlagUrl: "Europe/it-flag.png",
	},
	{
		name: "Praga",
		country: "República Tcheca",
		cityImageUrl: "Europe/Prague.svg",
		countryFlagUrl: "Europe/czk-flag.png",
	},
	{
		name: "Amsterdã",
		country: "Holanda",
		cityImageUrl: "Europe/Amsterdan.svg",
		countryFlagUrl: "Europe/ne-flag.png",
	},
];

function Continent() {
	return (
		<>
			<Head>
				<title>Europa</title>
			</Head>
			<>
				<Header />

				<ContinentBanner name="Europa" bannerUrl="Europe/europe-banner.svg" />

				<Flex
					mx={["1rem", "8.5rem"]}
					my={["2rem", "4rem"]}
					flexDir="column"
					gap={["2rem", "5rem"]}
				>
					<ContinentData
						description="	A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a
							península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a
							leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o
							Cáucaso, e o mar Negro a sudeste."
						countriesQuantatity={50}
						languagesQuantatity={60}
						mostVisitedCitiesQuantatity={27}
					/>

					<CitiesList cities={data} />
				</Flex>
			</>
		</>
	);
}

export default Continent;

/* export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { name: "europe" } }, { params: { name: "south-america" } }],
		fallback: true,
	};
}; */
/* 
export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }) => {
	// const { name } = params;
	const name = "Europa";

	return {
		props: {
			title: name,
		},
	};
}; */
