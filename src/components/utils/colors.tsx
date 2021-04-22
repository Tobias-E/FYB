// Interfaces
interface Icolor {
	[key: number]: string;
}

// Exports
export const black: Icolor = {
	100: '#303030',
	200: '#000000',
};

export const white: Icolor = {
	100: 'rgb(252, 252, 252, 0.9)',
	200: '#fffffa',
};

export const green: Icolor = {
	100: 'rgb(225, 255, 215, 0.9)',
};

export const yellow: Icolor = {
	100: 'rgb(255, 255, 187, 0.9)',
};

export const blue: Icolor = {
	100: '#4CA9DF',
	200: '#61dafb',
};
