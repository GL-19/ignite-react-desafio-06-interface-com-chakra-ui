import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { CitiesList } from "../../components/CitiesList";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentData } from "../../components/ContinentData";
import { Header } from "../../components/Header";
import {
	africaData,
	americaData,
	asiaData,
	europeData,
	oceaniaData,
} from "../../services/fakeApi";

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
	countriesQuantity: string | number;
	languagesQuantity: string | number;
	mostVisitedCitiesQuantity: string | number;
	cities: CityData[];
}

function Continent({
	name,
	cities,
	bannerUrl,
	description,
	countriesQuantity,
	languagesQuantity,
	mostVisitedCitiesQuantity,
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
						countriesQuantity={countriesQuantity}
						languagesQuantity={languagesQuantity}
						mostVisitedCitiesQuantity={mostVisitedCitiesQuantity}
					/>

					<CitiesList cities={cities} />
				</Flex>
			</>
		</>
	);
}

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { name: "africa" } },
			{ params: { name: "america" } },
			{ params: { name: "asia" } },
			{ params: { name: "europa" } },
			{ params: { name: "oceania" } },
		],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }) => {
	const { name } = params;

	let found = false;
	let data;

	switch (name) {
		case "america":
			data = americaData;
			found = true;
			break;
		case "africa":
			data = africaData;
			found = true;
			break;
		case "asia":
			data = asiaData;
			found = true;
			break;
		case "europa":
			data = europeData;
			found = true;
			break;
		case "oceania":
			data = oceaniaData;
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
