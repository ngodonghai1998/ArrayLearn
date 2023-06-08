import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        number: (state = 91, action) => {
            if (action.type === 'TANG_GIAM_SO_LUONG'){
                state = state + 1;
            }
            return state;
        },

        color: (state = 'red', action) => {
            return state;
        },

        imgCar: (state = './img/products/red-car.jpg', action) => {
            if (action.type === 'CHANGE_COLOR') {
                state = action.payload;
            }

            return state;
        }
    }
});