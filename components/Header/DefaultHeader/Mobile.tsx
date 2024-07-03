import InlineSVG from 'react-inlinesvg';
import MobileMenuFooter from '../MobileMenuFooter';
import { Layout, LayoutRow } from '../../Layout';
import Link from '../../Link';
import { MenuMobile } from '../../Menu';
import { HeaderProps } from '../types';

const HeaderMobile = (props: HeaderProps) => {
	const { blindSwitcher, mainLogo, menu, onBlindClick } = props;
	const { iconSrc: blindIcon } = blindSwitcher;

	const changeThemeHandler = () => {
		localStorage.setItem('isMgn', 'true');
		onBlindClick();
	};

	const footerRenderer = () => {
		return <MobileMenuFooter {...props} />;
	};

	return (
		<Layout cols="2" mdCols="2" className="block md:hidden pb-5 pt-7 px-3">
			<LayoutRow colSpan="1" className="w-fit">
				<Link src="/">
					<InlineSVG src={mainLogo} />
				</Link>
			</LayoutRow>
			<LayoutRow colSpan="1" className="flex items-center gap-8 justify-end">
				<span className="flex items-center cursor-pointer">
					<InlineSVG src={blindIcon} className="ml-1" onClick={changeThemeHandler} />
				</span>
				<MenuMobile options={menu} footerRenderer={footerRenderer} />
			</LayoutRow>
		</Layout>
	);
};

export default HeaderMobile;
