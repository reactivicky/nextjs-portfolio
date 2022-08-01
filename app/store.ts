import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./ModalSlice";

export const store = configureStore({
	reducer: {
		modalState: ModalSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>
