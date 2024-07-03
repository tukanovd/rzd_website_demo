import { dispatchThemeChangeType, onThemeChangeType, themeChangeSubscribers } from './types';

const subscribers: themeChangeSubscribers = new Set();

export const subscribe: onThemeChangeType = callback => {
	subscribers.add(callback);
};

export const unsubscribe: onThemeChangeType = callback => {
	subscribers.delete(callback);
};

export const dispatch: dispatchThemeChangeType = (theme, font) => {
	subscribers.forEach(callback => callback(theme, font));
};
