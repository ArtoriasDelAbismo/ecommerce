import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-column">
          <h2 className="footer-title">EternaCore</h2>
          <p className="footer-description">
            Powering the future with next-gen processors, GPUs, and storage solutions.
          </p>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Explorar</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/productsList">Productos</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3 className="footer-subtitle">Soporte</h3>
          <ul>
            <li><a href="/FAQ">FAQ</a></li>
            <li><a href="/privacy">Políticas de Privacidad</a></li>
            <li><a href="/terms">Términos de servicio</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-bottom">
        <p>© 2025 EternaCore Systems. All rights reserved.</p>
        <p>Engineered by <span className="footer-credit">Journadev</span></p>
      </div>
    </footer>
  );
}
