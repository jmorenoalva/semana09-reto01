import React from 'react'
import './style.css'
import Cuerpo from '../../Componentes/Cuerpo/Cuerpo';
import SidenavLeft from '../../Componentes/Sidenav-Left/Sidenav';
import SidenavRight from '../../Componentes/Sidenav-Right/Sidenav';

const Main=()=>{
  return (
    <main>
      <div id='row'>
        {/* <div id='column-left'> */}
          <SidenavLeft />
        {/* </div> */}
        {/* <div id='column-center'> */}
          <Cuerpo/>
        {/* </div> */}
        {/* <div id='column-right'> */}
          <SidenavRight />
        {/* </div> */}
      </div>
    </main>
  );
};

export default Main
