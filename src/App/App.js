import React from 'react';



import "./common/style/reset.css"
import "./common/style/base.css"


import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

const App = () =>{
  return(
    <body>
       <Header/>
       <Main/>
       <Footer/>
    </body>
  )
}


export default App;