import { configureStore } from "@reduxjs/toolkit";
import nhanVienReducer from "./reducers/nhanVienReducer";
import cartReducer from "./reducers/cartReducer";


export const store = configureStore({
    reducer: {
        number: (state = 91, action) => {
            if (action.type === 'TANG_GIAM_SO_LUONG') {
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
        },
        // stat = 000xxx
        // nhanVienReducer: (state = { maNhanVien: '001', tenNhanVien: 'Nguyễn Văn A', luongCoBan: '1000' }, action) => {

        //     switch (action.type) {
        //         case 'CHANGE_INFO': {
                    

        //         };
                    
        //             break;
            
        //         default:
        //             break;
        //     }
        //     //Tính chất bất biến của state: immutable
        //     //state = 000xxx
        //     return {...state};


        //state = 000xxx
        nhanVienReducer: nhanVienReducer,
        cartReducer: cartReducer,
        
    }
});
