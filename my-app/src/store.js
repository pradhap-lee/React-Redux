import { configureStore } from "@reduxjs/toolkit";
import userReducer from'./Slices/UserSlices';



const store = configureStore({

      devTools :true,
      reducer:{
        Users:userReducer
      }


})

export default store;