import React from 'react';
import { createContext, useState } from "react";

export const BlindThemeContext = createContext<any>({
	isBlindTheme: false,
	setIsBlindTheme: () => {}
});


export const BlindThemeContextWrapper = ({ children }: { children: React.ReactNode}) => {
	const [isBlindTheme, setIsBlindTheme] = useState(false);

	return (
		<BlindThemeContext.Provider value={{ isBlindTheme, setIsBlindTheme }}>
			{children}
		</BlindThemeContext.Provider>
	)
}


