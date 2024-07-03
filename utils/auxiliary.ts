const TEXT_LINK_REGEX = /\[(.*?)\]\((.*?)\)/g;

// вырезает из текста массив ссылок для дальнейшей обработки
export const extractLinks = (text: string) => {
	const links: { label: string; url: string; body: string }[] = [];
	let match;

	while ((match = TEXT_LINK_REGEX.exec(text)) !== null) {
		const [body, label, url] = match;
		links.push({ body, label, url });
	}

	return links;
};

// вырезает из текста ссылки, но оставляет слова, которые должны быть ссылкой
export const removeTextLinks = (text = '') => text.replace(TEXT_LINK_REGEX, '$1');
