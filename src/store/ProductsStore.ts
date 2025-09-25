import axios from "axios"
import { create } from "zustand";


type product = {
  title:String;
  id:Number;
  price:number;
}

interface productsType {
    products:product[];
    loading:boolean;
    error:null|string;
    getProducts:()=> Promise<void>;
}

export let useProdcutsStore = create<productsType>((set)=>({
  products:[],
  loading:false,
  error:null,

  getProducts: async()=>{
    set({loading:true , error:null})
    try {
      const res = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      set({products: res.data.data, loading: false})
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false })
    }
  }

}))
