import { ModalBox, ModalContainer, Modal } from "./styled";
import { useDispatch } from "react-redux";
import { close } from "../../app/ModalSlice";
import HeadComponent from "../HeadComponent";

const ModalComponent = () => {
	const dispatch = useDispatch();
	return (
		<ModalContainer
			initial={{ y: -10, opacity: 0 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.2 }}
		>
			<HeadComponent />
			<ModalBox>
				<Modal>
					<p>Modal</p>
					<button onClick={() => dispatch(close())}>Close</button>
				</Modal>
			</ModalBox>
		</ModalContainer>
	);
};

export default ModalComponent;
