import { configureStore } from "@reduxjs/toolkit";
import  ecommerceStore  from "../features/ecommerceStore";
import logicProgramm from '../features/logicProgramm'
export default configureStore({
    reducer:{
        ecommerce:ecommerceStore,
        signup:logicProgramm
    }
})
