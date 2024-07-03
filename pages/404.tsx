import { useRouter } from "next/router";
import { ThemeSwitcher } from "../context/BlindThemeContext";

function Page404() {
	const router = useRouter();
	const isBlindPersonPath = router.asPath.includes('/mgn');
	
	//if (isBlindPersonPath) {
	const currentPath = router.asPath.split('/mgn')[0]
	//}

	return (
		<div>
			<ThemeSwitcher isBlindPersonPath={isBlindPersonPath} currentPath={currentPath} />
			{!isBlindPersonPath && (
				<>
					<h1>Страница сайта {router.query.slug} ещё не существует!</h1>
					<p>Попробуйте вернуться на главную страницу сайта и попробовать сначала.</p>
				</>
			)}
		</div>
	);
}

export default Page404;
