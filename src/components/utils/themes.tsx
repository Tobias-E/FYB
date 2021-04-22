import { black, white, blue, green, yellow } from './colors';
import { primaryFont, headerFont } from './typography';

// Interfaces
interface Itheme {
	[key: string]: any;
}

export const theme: Itheme = {
	primaryColor: black[100],
	secondaryColor: white[100],
	textColor: black[100],
	backgroundColor: yellow[100],
	buttonColor: green[100],
	primaryFont,
	headerFont,
	tertiaryColor: blue[200],
	tertiaryColorHover: blue[100],
};
