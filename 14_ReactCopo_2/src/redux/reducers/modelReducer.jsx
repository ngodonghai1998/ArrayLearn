import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    component: <p>Default</p>
}

const modelReducer = createSlice({
    name: 'modelReducer',
    initialState,
    reducers: {

        setModelAction: (state, action) => {
            state.component = action.payload;
        }

    }
});

export const { setModelAction } = modelReducer.actions

export default modelReducer.reducer