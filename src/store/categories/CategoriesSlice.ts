import { createSlice } from "@reduxjs/toolkit";
import actGetcategories from "./act/ActGetcategories";
import { TCategory } from "@customTypes/Category";
import { TLoading } from "@customTypes/Shares";

interface ICategoriesState{
    //{}[] this means the array is array of objects => the type of the records is array of objects
    records:TCategory[],
    loading:TLoading,
    error:string | null,
}

const initialState:ICategoriesState={
    records:[],
    loading:"idle",
    error:null
}

const categoriesSlice=createSlice({
    name:"categories",
    initialState,
    reducers:{},
    //الحالات ال 3 اول شي علق و هو عبيجيب الداتا تاني شي جاب الداتا صح تالت شي الرفض
    extraReducers:(builder)=>{
        builder.addCase(actGetcategories.pending,(state)=>{
            state.loading="pending",
            state.error=null
        })
        builder.addCase(actGetcategories.fulfilled,(state,action)=>{
            state.loading="succeeded",
            state.records=action.payload
        })
        builder.addCase(actGetcategories.rejected,(state,action)=>{
            state.loading="failed";
            //this is first solution
            if(action.payload && typeof action.payload ==='string'){
                state.error=action.payload
            }

            //second solution
            // state.error=action.payload as string
        })
    }
})

export {actGetcategories}
export default categoriesSlice.reducer