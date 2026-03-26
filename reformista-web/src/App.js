import React, { useState } from 'react';
import './App.css';

function App() {
  const [menu, setMenu] = useState('inicio');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por tu consulta. Nos pondremos en contacto pronto!');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <div className="App">
      {/* Header/Navbar */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>🪵 MaderaReform</h1>
            <p>Reformas Profesionales en Madera</p>
          </div>
          <nav className="navbar">
            <button className={menu === 'inicio' ? 'active' : ''} onClick={() => setMenu('inicio')}>
              Inicio
            </button>
            <button className={menu === 'servicios' ? 'active' : ''} onClick={() => setMenu('servicios')}>
              Servicios
            </button>
            <button className={menu === 'proyectos' ? 'active' : ''} onClick={() => setMenu('proyectos')}>
              Proyectos
            </button>
            <button className={menu === 'sobre-nosotros' ? 'active' : ''} onClick={() => setMenu('sobre-nosotros')}>
              Sobre Nosotros
            </button>
            <button className={menu === 'contacto' ? 'active' : ''} onClick={() => setMenu('contacto')}>
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {menu === 'inicio' && (
        <section className="hero">
          <div className="hero-content">
            <h2>Especialistas en Renovaciones con Acabados de Madera</h2>
            <p>Transformamos tus espacios con la belleza y calidez de la madera de calidad premium</p>
            <div className="hero-badges">
              <span className="badge">✓ 15+ Años de Experiencia</span>
              <span className="badge">✓ Madera Certificada</span>
              <span className="badge">✓ Garantía 5 Años</span>
            </div>
            <button className="cta-button" onClick={() => setMenu('contacto')}>
              Solicita una Consulta Gratuita
            </button>
          </div>
        </section>
      )}

      {/* Servicios Section */}
      {menu === 'servicios' && (
        <section className="servicios">
          <div className="container">
            <h2>Nuestros Servicios Especializados</h2>
            <div className="servicios-grid">
              <div className="servicio-card">
                <div className="icon">🏠</div>
                <h3>Revestimientos en Madera</h3>
                <p>Instalación profesional de revestimientos de madera de calidad en paredes y techos. Acabado impecable y duradero.</p>
                <span className="precio">Desde €50/m²</span>
              </div>
              <div className="servicio-card">
                <div className="icon">🪟</div>
                <h3>Marcos y Puertas</h3>
                <p>Diseño e instalación de marcos y puertas de madera personalizados. Acabados a medida según tu estilo.</p>
                <span className="precio">Desde €300</span>
              </div>
              <div className="servicio-card">
                <div className="icon">🛋️</div>
                <h3>Muebles a Medida</h3>
                <p>Creación de muebles únicos y personalizados. Estanterías, escritorios, armarios según tus necesidades.</p>
                <span className="precio">Consultar presupuesto</span>
              </div>
              <div className="servicio-card">
                <div className="icon">✨</div>
                <h3>Acabados y Barnices</h3>
                <p>Acabados profesionales que realzan la belleza natural de la madera. Productos ecológicos y duraderos.</p>
                <span className="precio">Desde €30/m²</span>
              </div>
              <div className="servicio-card">
                <div className="icon">🏗️</div>
                <h3>Reformas Integrales</h3>
                <p>Proyectos completos de renovación residencial y comercial. Desde diseño hasta ejecución final.</p>
                <span className="precio">Presupuesto personalizado</span>
              </div>
              <div className="servicio-card">
                <div className="icon">🎨</div>
                <h3>Diseño Personalizado</h3>
                <p>Consultoría de diseño profesional para maximizar la belleza de tus espacios. Asesoría gratuita.</p>
                <span className="precio">Gratis</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Proyectos Section */}
      {menu === 'proyectos' && (
        <section className="proyectos">
          <div className="container">
            <h2>Proyectos Realizados</h2>
            <div className="proyectos-grid">
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <div className="placeholder">Cocina Moderna</div>
                </div>
                <h3>Renovación de Cocina</h3>
                <p>Cocina integral con armarios de roble y encimera de madera. Proyecto realizado en Rotterdam.</p>
                <span className="proyecto-año">2025</span>
              </div>
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <div className="placeholder">Dormitorio Elegante</div>
                </div>
                <h3>Dormitorio Personalizado</h3>
                <p>Suite master con revestimientos de madera de nogal. Acabado premium en La Haya.</p>
                <span className="proyecto-año">2025</span>
              </div>
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <div className="placeholder">Oficina Profesional</div>
                </div>
                <h3>Oficina en Casa</h3>
                <p>Escritorio y estanterías de madera maciza personalizadas. Home office profesional en Ámsterdam.</p>
                <span className="proyecto-año">2024</span>
              </div>
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <div className="placeholder">Sala de Estar</div>
                </div>
                <h3>Reforma de Sala</h3>
                <p>Revestimientos de paredes y puertas correderas de madera. Transform total en Utrecht.</p>
                <span className="proyecto-año">2024</span>
              </div>
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <div className="placeholder">Restaurante Boutique</div>
                </div>
                <h3>Restaurante Boutique</h3>
                <p>Revestimientos interiores completos en madera noble. Proyecto comercial en Róterdam.</p>
                <span className="proyecto-año">2024</span>
              </div>
              <div className="proyecto-card">
                <div className="proyecto-imagen">
                  <div className="placeholder">Villa Residencial</div>
                </div>
                <h3>Villa Residencial</h3>
                <p>Reforma integral con acabados en madera de calidad. Proyecto residencial premium.</p>
                <span className="proyecto-año">2023</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sobre Nosotros */}
      {menu === 'sobre-nosotros' && (
        <section className="sobre-nosotros">
          <div className="container">
            <h2>Sobre MaderaReform</h2>
            <div className="sobre-content">
              <div className="sobre-text">
                <h3>Experiencia y Profesionalismo</h3>
                <p>
                  Con más de 15 años de experiencia en reformas especializadas en madera, MaderaReform se ha consolidado como líder 
                  en el sector de renovaciones en Países Bajos. Nuestro equipo de artesanos profesionales combina técnicas tradicionales 
                  con tecnología moderna para garantizar resultados excepcionales.
                </p>
                <p>
                  Trabajamos únicamente con madera certificada de proveedores selectos, asegurando la máxima calidad y sostenibilidad. 
                  Cada proyecto es único y lo tratamos como tal, adaptándonos a las necesidades específicas de nuestros clientes.
                </p>
              </div>
              <div className="sobre-stats">
                <div className="stat">
                  <h4>500+</h4>
                  <p>Proyectos Completados</p>
                </div>
                <div className="stat">
                  <h4>98%</h4>
                  <p>Satisfacción Cliente</p>
                </div>
                <div className="stat">
                  <h4>15+</h4>
                  <p>Años Experiencia</p>
                </div>
                <div className="stat">
                  <h4>100%</h4>
                  <p>Garantizado</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contacto Section */}
      {menu === 'contacto' && (
        <section className="contacto">
          <div className="container">
            <h2>Ponte en Contacto</h2>
            <div className="contacto-content">
              <div className="contacto-info">
                <h3>Información de Contacto</h3>
                <div className="info-item">
                  <strong>📞 Teléfono:</strong>
                  <p>+31 (0)10 123 4567</p>
                </div>
                <div className="info-item">
                  <strong>📧 Email:</strong>
                  <p>info@maderareform.nl</p>
                </div>
                <div className="info-item">
                  <strong>📍 Ubicación:</strong>
                  <p>Rotterdam, Países Bajos</p>
                </div>
                <div className="info-item">
                  <strong>⏰ Horario:</strong>
                  <p>Lunes - Viernes: 08:00 - 18:00</p>
                  <p>Sábado: 09:00 - 14:00</p>
                </div>
                <div className="info-item">
                  <strong>🌐 Redes Sociales:</strong>
                  <p>Instagram | Facebook | LinkedIn</p>
                </div>
              </div>
              <div className="contacto-form">
                <h3>Envía tu Consulta</h3>
                <form onSubmit={handleFormSubmit}>
                  <input 
                    type="text" 
                    name="nombre"
                    placeholder="Tu Nombre Completo" 
                    value={formData.nombre}
                    onChange={handleFormChange}
                    required 
                  />
                  <input 
                    type="email"
                    name="email" 
                    placeholder="Tu Email" 
                    value={formData.email}
                    onChange={handleFormChange}
                    required 
                  />
                  <input 
                    type="tel"
                    name="telefono" 
                    placeholder="Tu Teléfono (opcional)"
                    value={formData.telefono}
                    onChange={handleFormChange}
                  />
                  <textarea 
                    name="mensaje"
                    placeholder="Describe tu proyecto..." 
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                  <button type="submit" className="submit-btn">Enviar Consulta</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 MaderaReform. Todos los derechos reservados.</p>
          <p className="footer-text">Especialistas en Renovaciones con Acabados de Madera | Países Bajos</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
