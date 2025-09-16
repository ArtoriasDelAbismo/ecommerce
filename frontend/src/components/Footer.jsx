import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <section className="footer-contact">
            <div style={{}}>
                <p>jerojournade1@gmail.com</p>
                <p>3425145911</p>

            </div>
        </section>
        <section className="footer-credits">
          <a href="https://github.com/ArtoriasDelAbismo" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <i className="fa-brands fa-github github-icon"></i>
          </a>
          <p>Developed by <a href='https://journadev.netlify.app/' target="_blank" rel="noopener noreferrer">Journadev</a></p>
        </section>
      </div>
    </footer>
  )
}
