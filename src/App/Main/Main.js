import React from 'react';


import Mainfilter from "./Mainfilter/Mainfilter"
import Maintypepropery from "./Maintypeproperty/Maintypeproperty"
import Mainbestoffers from "./Mainbestoffers/Mainbestoffers"
import Mainadvantages from "./Mainadvantages/Mainadvantages"
import Mainmapandadress from "./Mainmapandadress/Mainmapandadress"

const Main = () =>{
    return (
        <main className="main">
                <Mainfilter/>
                <Maintypepropery/>
                <Mainbestoffers/>
                <Mainadvantages/>
                <Mainmapandadress/>
          </main>
    )
}


export default Main;