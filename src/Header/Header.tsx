import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button'

export default function Header({setLocal,local}) {
    
    
    const { t, i18n } = useTranslation();
      let [Lang,setLang]=useState("ar")
      function changeLang(){
       if(Lang=="ar"){
        i18n.changeLanguage("en");
        setLang("en");
        setLocal("en")
       }else if(Lang=="en"){
        i18n.changeLanguage("ar");
        setLang("ar")
        setLocal("ar")
       }}
  
  return <>
      <AppBar sx={{backgroundColor:"#30a946" }} position="fixed" color="primary">
          <Toolbar dir={local=="ar"? 'rtl' : 'ltr'} onClick={()=>{changeLang()}} sx={{display:"flex" , justifyContent:"space-between"}}>
              <Typography variant="h6">
                  {t("My Products")}
              </Typography>
              <Button variant="contained" color="primary">
                {Lang=="ar"?'انجليزي':'Arabic'}
              </Button>
          </Toolbar>
      </AppBar>

  </>
}