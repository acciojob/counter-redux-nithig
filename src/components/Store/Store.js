
import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./ConterSlice"

export const Store = configureStore({
    reducer:{
        counter:CounterSlice
    }
});