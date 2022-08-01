import { ReactNode, FC } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
import { Container, MotionMain } from "./styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const showModal = useSelector(
		(state: RootState) => state.modalState.modalOpen
	);
	return (
		<Container>
			<AnimatePresence exitBeforeEnter>
				{showModal ? (
					<Modal key="modal" />
				) : (
					<div key="others">
						<Navbar />
						<MotionMain
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							{children}
						</MotionMain>
					</div>
				)}
			</AnimatePresence>
		</Container>
	);
};

export default Layout;
