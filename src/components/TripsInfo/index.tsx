import { Box, Grid, GridItem } from "@chakra-ui/react";
import { TripsInfoElement } from "./TripsInfoElement";

export function TripsInfo() {
	return (
		<Box>
			<Grid
				justifyItems={["center", "space-evenly"]}
				gridTemplateColumns={["1fr 1fr", "repeat(auto-fit, minmax(50px, 1fr))"]}
				gridTemplateRows={["1fr 1fr 1fr", "1fr"]}
				py={["1.5rem", "3.5rem", "5rem"]}
				mx={["0", "0", "0.4rem"]}
			>
				<TripsInfoElement imageUrl="/Home/cocktail.png">vida noturna</TripsInfoElement>
				<TripsInfoElement imageUrl="Home/surf.png">praia</TripsInfoElement>
				<TripsInfoElement imageUrl="/Home/building.png">moderno</TripsInfoElement>
				<TripsInfoElement imageUrl="/Home/museum.png">clássico</TripsInfoElement>
				<GridItem gridColumn={["span 2", "span 1"]}>
					<TripsInfoElement imageUrl="/Home/earth.png">e mais...</TripsInfoElement>
				</GridItem>
			</Grid>
		</Box>
	);
}
