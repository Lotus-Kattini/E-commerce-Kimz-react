import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@customTypes/Shares";
import { TProduct } from "@customTypes/Product";
import actgetproducts from "./act/actGetproducts";


interface IProducts{
    records:TProduct[],
    loading:TLoading,
    error:null | string
}

const initialState:IProducts={
    records:[],
    loading:"idle",
    error: null,
}

export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        //to return the records to [] after we left the page of the product
        //so we make a new reducer and we dispatch it when we want(after we leave the page)
        productsCleanUp:(state)=>{
            state.records=[]
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(actgetproducts.pending,(state)=>{
            state.loading='pending'
            state.error=null
        })
        builder.addCase(actgetproducts.fulfilled,(state,action)=>{
            state.loading='succeeded'
            state.records=action.payload
        })
        builder.addCase(actgetproducts.rejected,(state,action)=>{
            state.loading='failed'
            if(action.payload && typeof action.payload==='string'){
                state.error=action.payload
            }
        })
    }
})


export const { productsCleanUp }=productSlice.actions
export {actgetproducts}
export default productSlice.reducer