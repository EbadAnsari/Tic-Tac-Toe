import { configureStore } from "@reduxjs/toolkit";
import GameReducer from "./slice/GameSlice";

export const store = configureStore({ reducer: { GameReducer } });
