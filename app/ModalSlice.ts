import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
	modalOpen: boolean;
}

const initialState: ModalState = {
	modalOpen: false,
};

const ModalSlice = createSlice({
	name: "modalState",
	initialState,
	reducers: {
		open: (state) => {
			state.modalOpen = true;
		},
		close: (state) => {
			state.modalOpen = false;
		},
	},
});

export const { open, close } = ModalSlice.actions;

export default ModalSlice.reducer
