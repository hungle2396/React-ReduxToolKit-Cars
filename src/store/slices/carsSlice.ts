import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: {
        searchTerm: "",
        data: [] as CarProps[]
    },
    reducers: {
        changeSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        addCar(state, action: PayloadAction<CarProps>) {
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action: PayloadAction<CarProps>) {
            console.log(`In the remove Car, id is ${action.payload}`);

            const updated = state.data.filter((car: CarProps) => {
                return car.id !== action.payload;
            });

            state.data = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;