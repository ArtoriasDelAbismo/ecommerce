import React from 'react';
import './ServiceTerms.css';

export default function ServiceTerms() {
  return (
<section className="service-terms-container">
  <h1>📜 Términos de Servicio</h1>

  <ol>
    <li>
      <h2>Proceso de compra</h2>
      <p>
        Al confirmar tu pedido en <strong>EternaCore</strong>, lo solicitamos a nuestro distribuidor oficial y coordinamos el envío hacia tu domicilio.
      </p>
    </li>

    <li>
      <h2>Disponibilidad de stock</h2>
      <p>
        Dado que trabajamos bajo demanda, puede ocurrir que el distribuidor no tenga disponibilidad inmediata. En ese caso, nos comunicaremos con vos para ofrecer alternativas o la devolución total del dinero.
      </p>
    </li>

    <li>
      <h2>Precios</h2>
      <p>
        Todos los precios están expresados en <strong>pesos argentinos (ARS)</strong> e incluyen impuestos. Los precios pueden variar sin previo aviso, aunque siempre respetaremos el valor al momento de tu compra.
      </p>
    </li>

    <li>
      <h2>Envíos</h2>
      <p>
        Los envíos se realizan dentro de las <strong>24 a 72 horas hábiles</strong> posteriores a la confirmación de stock y pago. El tiempo de entrega puede variar según la localidad y la empresa de mensajería. Los envíos dentro de la ciudad de Santa Fe son sin costo.
      </p>
    </li>

    <li>
      <h2>Devoluciones y cambios</h2>
      <p>
        Solo se aceptan en caso de defectos de fábrica o daños ocasionados durante el transporte. El plazo para solicitarlo es de <strong>7 días hábiles</strong> desde la recepción. El producto debe conservar su embalaje original y accesorios completos.
      </p>
    </li>

    <li>
      <h2>Garantía</h2>
      <p>
        Cada producto cuenta con la garantía oficial del fabricante o importador, cuyos plazos y condiciones dependen de la marca.
      </p>
    </li>

    <li>
      <h2>Limitación de responsabilidad</h2>
      <p>
        <strong>EternaCore</strong> no se hace responsable por instalaciones incorrectas, daños por mal uso o modificaciones realizadas por terceros.
      </p>
    </li>
  </ol>
</section>

  )
}
