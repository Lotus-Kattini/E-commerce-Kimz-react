import { TCategory } from "@customTypes/Category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//we can use the interface but the better approatch is when we want to declare only one thing not object we use the type
type TResponse=TCategory[]


//categories this is the name if the CategoriesSlice
//the function takes 2 parameter 1.payload (here we dont need do we type _) 2.thunkAPI
const actGetcategories=createAsyncThunk('categories/actGetcategories',async (_,thunkAPI)=>{

    const {rejectWithValue}=thunkAPI

    try {
        const res=await axios.get<TResponse>('http://localhost:5005/categories');
        const data=res.data
        return data

    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message)
        }else{
            return rejectWithValue('Unexpected Error')
        }
    }

})

export default actGetcategories