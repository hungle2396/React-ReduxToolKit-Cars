import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: "car",
    initialState: {
        searchTerm: "",
        cars: [] as CarProps[]
    },
    reducers: {
        changeTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload;
        },
        addCar(state, action: PayloadAction<CarProps>) {
            state.cars.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        deleteCar(state, action: PayloadAction<CarProps>) {
            const updated = state.cars.filter((car: CarProps) => {
                return car.name !== action.payload.name;
            });

            state.cars = updated;
        }
    }
});

export const { changeTerm, addCar, deleteCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;