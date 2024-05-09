import { TProduct } from "@customTypes/Product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse=TProduct[]

const actgetproducts=createAsyncThunk("products/actgetproducts",async(prefix:string,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try {
        const res=await axios.get<TResponse>(`http://localhost:5005/products?cat_prefix=${prefix}`)
        const data=res.data
        return data

    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message)
        }
        else{
            return rejectWithValue('Unexpected Error')
        }
    }
})

export default actgetproducts