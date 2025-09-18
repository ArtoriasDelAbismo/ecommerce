import React from 'react';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="privacy-container">
        <div className="privacy-content">
            <h1>🛡️ Políticas de Privacidad</h1>
            <p>En EternaCore valoramos la confianza de nuestros clientes y protegemos sus datos personales.</p>
            <h2>Datos que recopilamos</h2>
            <p>Al realizar una compra solicitamos nombre, apellido, dirección de envío, teléfono y correo electrónico. La información de pago es procesada de manera segura por Mercado Pago u otras plataformas de pago, por lo que no almacenamos datos de tarjetas en nuestros sistemas.</p>
            <h2>Uso de la información</h2>
            <p>Utilizamos tus datos únicamente para</p>
            <ul>
                <li>Procesar y confirmar tu compra</li>
                <li>Coordinar la entrega de tu pedido</li>
                <li>Enviarte comunicaciones relacionadas con el estado del envío</li>
            </ul>
            <h2>Protección de la información</h2>
            <p>Tus datos no serán compartidos con terceros, salvo con empresas de mensajería o plataformas de pago, estrictamente para completar la operación.</p>
            <h2>Tus derechos</h2>
            <p>Podés solicitar en cualquier momento el acceso, corrección o eliminación de tus datos personales escribiéndonos a <a href="mailto:jerojournade1@gmail.com">jerojournade1@gmail.com</a>.</p>
        </div>
    </div>
  )
}
