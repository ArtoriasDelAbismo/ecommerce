import React from 'react'
import './FAQ.css'
export default function FAQ() {
  return (
    <div className='faq-container'>
        <div className='faq-content'>
        <h1>❓ Preguntas Frecuentes (FAQ)</h1>
        <div className='faq-item'>
            <h2>📦 ¿En cuánto tiempo recibo mi pedido?</h2>
            <p>Los productos se solicitan directamente al distribuidor una vez confirmada la compra. El plazo habitual de entrega es de 24 a 48 horas (puede extenderse en casos excepcionales).</p>

        </div>
        <div className='faq-item'>
            <h2>🚚 ¿Hacen envíos a todo el país?</h2>
            <p>Sí. Realizamos envíos a través de Correo Argentino con número de seguimiento. Los envíos dentro de la ciudad de Santa Fe son sin costo</p>

        </div>
        <div className='faq-item'>
            <h2>🔄 ¿Qué pasa si el producto llega dañado o no funciona?</h2>
            <p>Podés solicitar un cambio o devolución dentro de los 7 días posteriores a la entrega, siempre que el producto se encuentre en su empaque original y sin signos de mal uso.</p>

        </div>
        <div className='faq-item'>
            <h2>🛡️ ¿Los productos tienen garantía?</h2>
            <p>Sí. Todos los productos cuentan con garantía oficial del fabricante/importador, válida según los términos de cada marca.</p>

        </div>
        <div className='faq-item'>
            <h2>💳 ¿Qué métodos de pago aceptan?</h2>
            <p>Aceptamos pagos mediante Mercado Pago, que ofrece opciones con tarjeta de débito, crédito y cuotas según promociones vigentes.</p>

        </div>
        </div>
    </div>
  )
}
