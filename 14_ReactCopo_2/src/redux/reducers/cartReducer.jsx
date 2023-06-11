import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "price": 350,
            "quantity": 1,
            "image": "https://svcy3.myclass.vn/images/adidas-prophere.png"
        },
    ]
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addToCartAction: (state, action) => {
            //Tính immutable của redux: tính bất biến.

            // let newState = {...state};

            // let cart = JSON.parse(JSON.stringify(state.cart));

            // console.log(action);
            // state.cart.push(action.payload);
            // Xử lý nghiệp vụ thêm giỏ hàng.
            let productClick = {...action.payload};
            productClick.quantity = 1;
            //Kiểm tra có trong giỏ hàng hay chưa => nếu chưa thì thêm vào, nếu có thì tăng số lượng
            let prodCart = state.cart.find(pro => pro.id === productClick.id);
            console.log(prodCart);
            if (prodCart) {
                prodCart.quantity += 1;
            } else {
                state.cart.push(productClick);
            }
            // state.cart = cart; 
        },
        delProductAction: (state,action) => {
            console.log('actionDel', action);
            let id = action.payload;
            let indexDel = state.cart.findIndex(prod => prod.id === id);
            if (indexDel !== -1) {
                //Xử lý xóa
                state.cart.splice(indexDel, 1);

            }
        }, 
        changeQuantityAction: (state, action) => {
            let {id, quantity} = action.payload;
            let prodCart = state.cart.find(pro => pro.id === id);
            if (prodCart) {
                prodCart.quantity += quantity;
            }
        }
    }
});

//action creator
export const { addToCartAction, delProductAction, changeQuantityAction } = cartReducer.actions;

export default cartReducer.reducer;

//Đây là cơ chế của redux:
//Dấu ba chấm dùng để clone
// Nếu state của redux chỉ có một giá trị, ví dụ như: let state = 1
// Thì ra có thể gán lại trực tiếp cho state = 2
// Nhưng nếu state là một mảng let state = {quantity: 2}
// Thì không được gán let state.quantity = 2
// Mà phải gọi ra let state = {...state.quantity:2} 