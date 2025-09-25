
import  {  useEffect, useState} from 'react'
import { useProdcutsStore } from '../store/ProductsStore';
import { useTranslation } from 'react-i18next';


export default function Products({local}) {

  const { t } = useTranslation();
 
 
  
    
    let {products,loading,error,getProducts}= useProdcutsStore();
     useEffect(()=>{
      getProducts();
      
       
       
     },[])
     console.log(products);
     console.log(loading,error);
     
     
  return <>
  
          
          <h1 dir={local=="ar"? 'rtl' : 'ltr'}  className=' font-semibold mt-9 mb-0 capitalize   text-start text-emerald-500 font-encode'>{t("shop recent products by zustand")}</h1>
          <h4 dir={local=="ar"? 'rtl' : 'ltr'} className=' font-semibold mt-7 mb-0 capitalize   text-start text-emerald-500 font-encode'>{t("hello world")}</h4>
    {/* <button onClick={()=>{changeLang()}}>{Lang=="ar"?'انجليزي':'Arabic'}</button> */}
  <div className="flex flex-wrap products">
  {products?.map((prod)=>
        <div key={prod.id} className='w-1/2 md:w-1/3  lg:w-1/4 xl:w-1/6'>   
        
           <div className=" product  relative p-3 my-2 cursor-pointer transition-all group  ">
            <div className='relative'><img src={prod.imageCover} className='w-full ' alt="" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-in-out rounded-lg"></div>
            </div>
              <h3 className=' text-black font-semibold text-start'>{prod.title.split(" ").slice(0,2).join(" ")}</h3>
              <h3 className=' text-emerald-600 text-start'>{prod.category.name}</h3>
              <h3 className="font-medium text-nowrap text-start mb-1 text-xl overflow-hidden text-ellipsis whitespace-nowrap">{prod.title.split(" ").slice(0,2).join(" ")}</h3>
              <div className='flex justify-between mb-2 p-1'>
                <span>{prod.price} EGP</span>
                <span><i className='fas - fa-star text-yellow-400 text-sm pe-[2px]'></i>{prod.ratingsAverage}</span>
              </div>

              

           </div>
        </div>
        
      )
       }
       </div>
  </>
}


