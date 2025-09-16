import React from 'react'

export default function SubNavbar() {
  return (
      <div style={{width:'100%', height:'40px', backgroundColor:'#ffff', color:'black', display:'flex', justifyContent:'center', gap:'15px', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
          <i className="fa-solid fa-shield"></i>
          <p>Garantía de 6 meses en todos los productos</p>
        </div>
        <div style={{height:'30px', width:'1px', backgroundColor:'black'}}></div>
        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
          <i className="fa-solid fa-truck-fast"></i>
          <p>Envíos gratis dentro de Santa Fe</p>
        </div>
      </div>  )
}
