import { createSlice } from "@reduxjs/toolkit";
const initialState={
    bgColor:"",
};


const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        setBgColor:(state,action)=>{
            state.bgColor=action.payload;
        }
    }
});


export const {setBgColor}=themeSlice.actions; //this is for dispatch(setBgColor());
export const selectBgColor=(state)=>state.theme.bgColor; //this is for useSelector(selectBgColor); to read from the redux
export default themeSlice.reducer;

