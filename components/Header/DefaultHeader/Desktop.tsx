import InlineSVG from 'react-inlinesvg';
import { Layout, LayoutRow } from '../../Layout';
import Link from '../../Link';
import { Typography } from '../../Typography';
import Menu from '../../Menu/Menu';
import { Button } from '../../ButtonBase';
import { HeaderProps } from '../types';

const HeaderDesktop = (props: HeaderProps) => {
	const { vk, telegram, support, button, blindSwitcher, menu, rzdLogo, mainLogo, onBlindClick } = props;

	const { iconSrc: blindIcon, text: blindText } = blindSwitcher;
	const { src: vkSrc, iconSrc: vkIcon } = vk;
	const { src: telegramSrc, iconSrc: telegramIcon } = telegram;
	const { text: supportText, phone: supportPhone } = support;
	const { text: buttonText } = button;

	const changeThemeHandler = () => {
		localStorage.setItem('isMgn', 'true');
		onBlindClick();
	};

	const changeThemeEnterHandler = (event: { key: string }) => {
		if (event.key === 'Enter') {
			changeThemeHandler();
		}
	}

	return (
		<Layout cols="12" spacingX="xl" mdCols="4" className="pt-2.5 px-2.5 md:grid hidden">
			<LayoutRow colSpan="6" className="w-fit">
				<Link src="/">
					<InlineSVG src={mainLogo} />
				</Link>
			</LayoutRow>
			<LayoutRow colSpan="6" className="flex items-center justify-end gap-6">
				<span
					className="flex items-center cursor-pointer"
					onClick={changeThemeHandler}
					onKeyDown={changeThemeEnterHandler}
					tabIndex={0}>
					<Typography variant="p3">{blindText}</Typography>
					<InlineSVG src={blindIcon} className="ml-1" />
				</span>
				<Link src={vkSrc}>
					<InlineSVG src={vkIcon} />
				</Link>

				<Link src={telegramSrc}>
					<InlineSVG src={telegramIcon} />
				</Link>
				<div className="grid">
					<Typography variant="p3">{supportText}</Typography>
					<Typography variant="p1">
						<a href={`tel:${supportPhone}`}>{supportPhone}</a>
					</Typography>
				</div>
				<InlineSVG src={rzdLogo} />
			</LayoutRow>
			<LayoutRow colSpan="6" className="py-3">
				<div className="py-3 flex gap-5 items-center">
					{/* @ts-expect-error Server Component See - https://github.com/vercel/next.js/issues/42292 */}
					<Menu options={menu} />
				</div>
			</LayoutRow>
			<LayoutRow start="11" end="13" className="flex justify-end items-center">
				<Button variant="outline" size="m" classNames="w-full">
					<Typography variant="p2">{buttonText}</Typography>
				</Button>
			</LayoutRow>
		</Layout>
	);
};

export default HeaderDesktop;
