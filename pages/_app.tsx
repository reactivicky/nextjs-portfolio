import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";
import { store } from '../app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<AnimatePresence initial={false} exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</Provider>
	);
}

export default MyApp;
