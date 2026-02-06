import React, { useState } from 'react';
import { Mail, Phone, MapPin, Zap, Cpu, Wrench, LayoutGrid, Plug, Package } from 'lucide-react';

function ElitechLanding() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        empresa: '',
        servicio: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por contactarnos. Este es un formulario de demostración.');
        setFormData({ nombre: '', email: '', empresa: '', servicio: '', mensaje: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const styles = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* HEADER */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            background: #fff;
            z-index: 1000;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s;
        }

        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0.8rem 3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 90px;
        }

        .logo {
            display: flex;
            align-items: center;
            height: 100%;
        }

        .logo img {
            height: 80px;
            width: auto;
            object-fit: contain;
        }

        .nav {
            display: flex;
            gap: 2.5rem;
            list-style: none;
        }

        .nav a {
            color: #1E3A8A;
            text-decoration: none;
            font-size: 1rem;
            font-weight: 600;
            transition: color 0.3s;
            position: relative;
        }

        .nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 3px;
            background: #0EA5E9;
            transition: width 0.3s;
        }

        .nav a:hover {
            color: #0EA5E9;
        }

        .nav a:hover::after {
            width: 100%;
        }

        /* HERO SECTION */
        .hero {
            margin-top: 90px;
            height: calc(100vh - 90px);
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(14, 165, 233, 0.2)),
                        url('/eletic-baner.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 8%;
            color: #fff;
            position: relative;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, rgba(30, 58, 138, 0.4) 0%, transparent 100%);
        }

        .hero-content {
            max-width: 750px;
            padding: 0 2rem;
            animation: fadeInLeft 1.2s ease-out;
            position: relative;
            z-index: 1;
        }

        .hero-subtitle-top {
    font-size: 1.1rem; /* Un poco más pequeño suele verse más elegante en mayúsculas */
    font-weight: 700;  /* Aumentamos el grosor para que las letras tengan más cuerpo */
    margin-bottom: 1.2rem;
    
    /* Cambiamos a un verde neón/brillante para que resalte sobre el azul oscuro */
    color: #00ff88; 
    
    text-transform: uppercase;
    letter-spacing: 4px; /* Aumentamos un poco el tracking para mejorar legibilidad */
    
    /* TRUCO CLAVE: Un sombreado suave que crea un contorno invisible 
       y separa el texto de los detalles de la foto trasera */
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    
    display: block; /* Asegura que respete los márgenes */
}

        .hero h1 {
            font-size: 4rem;
            font-weight: 900;
            margin-bottom: 1.5rem;
            line-height: 1.1;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero-subtitle {
            font-size: 1.4rem;
            margin-bottom: 2.5rem;
            color: #E0E7FF;
            font-weight: 400;
            line-height: 1.6;
        }

        .cta-button {
            display: inline-block;
            padding: 1.2rem 3rem;
            background: #0EA5E9;
            color: #fff;
            text-decoration: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            transition: all 0.4s;
            border: 3px solid #0EA5E9;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .cta-button:hover {
            background: transparent;
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(14, 165, 233, 0.4);
        }

        /* SECTIONS */
        .section {
            padding: 6rem 3rem;
        }

        .section-white {
            background: #fff;
        }

        .section-gray {
            background: #F8FAFC;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 5rem;
        }

        .section-title {
            font-size: 3rem;
            color: #1E3A8A;
            margin-bottom: 1.5rem;
            font-weight: 900;
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #0EA5E9;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: #64748B;
            max-width: 800px;
            margin: 1.5rem auto 0;
            line-height: 1.8;
        }

        /* ABOUT SECTION */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
        }

        .about-text p {
            margin-bottom: 1.8rem;
            font-size: 1.1rem;
            color: #475569;
            line-height: 1.9;
        }

        .about-text strong {
            color: #1E3A8A;
            font-weight: 700;
        }

        .about-image {
            width: 100%;
            height: 500px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
            position: relative;
        }

        .about-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }

        .about-image:hover img {
            transform: scale(1.05);
        }

        /* SERVICES SECTION */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
        }

        .service-card {
            background: #fff;
            padding: 3rem 2.5rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s;
            border-left: 5px solid #0EA5E9;
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(14, 165, 233, 0.05), transparent);
            opacity: 0;
            transition: opacity 0.4s;
        }

        .service-card:hover::before {
            opacity: 1;
        }

        .service-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
            border-left-width: 8px;
        }

        .service-card h3 {
            font-size: 1.5rem;
            color: #1E3A8A;
            margin-bottom: 1.2rem;
            font-weight: 700;
        }

        .service-card p {
            color: #64748B;
            line-height: 1.8;
            font-size: 1.05rem;
        }

        /* BUSINESS UNITS SECTION */
        .business-units-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
        }

        .business-card {
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.4s;
        }

        .business-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }

        .business-image {
            width: 100%;
            height: 300px;
            overflow: hidden;
        }

        .business-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
        }

        .business-card:hover .business-image img {
            transform: scale(1.1);
        }

        .business-content {
            padding: 2.5rem;
        }

        .business-content h3 {
            font-size: 1.8rem;
            color: #1E3A8A;
            margin-bottom: 1.2rem;
            font-weight: 700;
        }

        .business-content p {
            color: #64748B;
            line-height: 1.8;
            font-size: 1.05rem;
        }

        /* STATS SECTION */
        .stats-section {
            background: linear-gradient(135deg, #1E3A8A, #0EA5E9);
            padding: 5rem 3rem;
            color: #fff;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 4rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .stat-item {
            text-align: center;
        }

        .stat-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .stat-number {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 1.2rem;
            font-weight: 400;
            opacity: 0.9;
        }

        /* BANNER SECTION */
        .banner-section {
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.95), rgba(14, 165, 233, 0.9)),
                        url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=90');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 8rem 3rem;
            text-align: center;
            color: #fff;
        }

        .banner-section h2 {
            font-size: 3.5rem;
            font-weight: 900;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .banner-section p {
            font-size: 1.5rem;
            color: #E0E7FF;
            max-width: 800px;
            margin: 0 auto;
        }

        /* CONTACT SECTION */
        .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 5rem;
            align-items: start;
        }

        .contact-info h3 {
            font-size: 2rem;
            color: #1E3A8A;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .contact-info p {
            color: #64748B;
            margin-bottom: 2.5rem;
            line-height: 1.8;
            font-size: 1.1rem;
        }

        .contact-detail {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: #F8FAFC;
            border-radius: 10px;
            transition: all 0.3s;
        }

        .contact-detail:hover {
            background: #E0E7FF;
            transform: translateX(10px);
        }

        .contact-detail-text strong {
            display: block;
            color: #1E3A8A;
            font-weight: 700;
            margin-bottom: 0.3rem;
        }

        .contact-detail-text {
            color: #64748B;
        }

        .contact-form {
            background: #F8FAFC;
            padding: 3rem;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }

        .form-group {
            margin-bottom: 1.8rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.7rem;
            color: #1E3A8A;
            font-weight: 700;
            font-size: 1rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 1rem 1.2rem;
            border: 2px solid #E2E8F0;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #0EA5E9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 140px;
        }

        .submit-button {
            width: 100%;
            padding: 1.2rem;
            background: linear-gradient(135deg, #1E3A8A, #0EA5E9);
            color: #fff;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.4s;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .submit-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(14, 165, 233, 0.4);
        }

        /* FOOTER */
        .footer {
            background: #1E3A8A;
            color: #fff;
            padding: 4rem 3rem 2rem;
        }

        .footer-content {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 4rem;
            margin-bottom: 3rem;
        }

        .footer-section h3 {
            margin-bottom: 1.8rem;
            color: #0EA5E9;
            font-size: 1.4rem;
            font-weight: 700;
        }

        .footer-section p,
        .footer-section li {
            color: #CBD5E1;
            margin-bottom: 1rem;
            line-height: 1.7;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            padding-left: 1.5rem;
            position: relative;
        }

        .footer-section ul li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: #0EA5E9;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #CBD5E1;
        }

        /* ANIMATIONS */
        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
            .hero h1 {
                font-size: 3rem;
            }

            .section-title {
                font-size: 2.5rem;
            }

            .business-units-grid {
                grid-template-columns: 1fr;
            }

            .stats-grid {
                grid-template-columns: 1fr;
                gap: 3rem;
            }
        }

        @media (max-width: 768px) {
            .header-content {
                padding: 0.8rem 1.5rem;
                height: 70px;
            }

            .logo img {
                height: 50px;
            }

            .nav {
                display: none;
            }

            .hero {
                margin-top: 70px;
                height: calc(100vh - 70px);
                padding-left: 5%;
                align-items: center;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero-subtitle-top {
                font-size: 1rem;
            }

            .hero-subtitle {
                font-size: 1.1rem;
            }

            .about-content,
            .contact-wrapper {
                grid-template-columns: 1fr;
            }

            .section {
                padding: 4rem 1.5rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .banner-section h2 {
                font-size: 2rem;
            }

            .services-grid,
            .business-units-grid {
                grid-template-columns: 1fr;
            }
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div>
                {/* HEADER */}
                <header className="header">
                    <div className="header-content">
                        <div className="logo">
                            <img src="/Corporacion Elitech.png" alt="ELITECH EIRL" />
                        </div>
                        <nav>
                            <ul className="nav">
                                <li><a href="#inicio">Inicio</a></li>
                                <li><a href="#nosotros">Nosotros</a></li>
                                <li><a href="#servicios">Servicios</a></li>
                                <li><a href="#unidades">Unidades</a></li>
                                <li><a href="#contacto">Contacto</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* HERO SECTION */}
                <section id="inicio" className="hero">
                    <div className="hero-content">
                        <p className="hero-subtitle-top">Bienvenidos a Corporación ELITECH</p>
                        <h1>Soluciones en ingeniería eléctrica e industrial</h1>
                        <p className="hero-subtitle">
                            Diseñamos, implementamos y suministramos sistemas eléctricos, automatización e instrumentación para la industria y proyectos de infraestructura.
                        </p>
                        <a href="#contacto" className="cta-button">Contáctanos</a>
                    </div>
                </section>

                {/* ABOUT SECTION */}
                <section id="nosotros" className="section section-white">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Somos Corporación ELITECH</h2>
                            <p className="section-subtitle">
                                Con una amplia trayectoria en el sector eléctrico e industrial
                            </p>
                        </div>
                        <div className="about-content">
                            <div className="about-text">
                                <p>
                                    <strong>Corporación ELITECH EIRL</strong> es una empresa especializada en ingeniería eléctrica, automatización industrial e instrumentación, dedicada a brindar soluciones técnicas para el sector industrial y corporativo.
                                </p>
                                <p>
                                    Contamos con un equipo de profesionales con experiencia en el diseño, implementación y mantenimiento de sistemas eléctricos, automatización de procesos industriales, control e instrumentación, y diseño de tableros eléctricos.
                                </p>
                                <p>
                                    Brindamos soporte integral en proyectos industriales, desde la provisión de equipos y suministros hasta la ejecución técnica, cumpliendo con altos estándares de calidad, seguridad y confiabilidad.
                                </p>
                            </div>
                            <div className="about-image">
                                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=90" alt="Ingeniería Industrial" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* BUSINESS UNITS SECTION */}
                <section id="unidades" className="section section-gray">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Unidades de Negocio</h2>
                            <p className="section-subtitle">
                                Dedicados a proyectos y montajes eléctricos
                            </p>
                        </div>
                        <div className="business-units-grid">
                            <div className="business-card">
                                <div className="business-image">
                                    <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=90" alt="Ingeniería" />
                                </div>
                                <div className="business-content">
                                    <h3>Ingeniería</h3>
                                    <p>
                                        Brindamos soluciones personalizadas para proyectos de baja y media tensión, instrumentación y control de procesos industriales.
                                    </p>
                                </div>
                            </div>
                            <div className="business-card">
                                <div className="business-image">
                                    <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=90" alt="Obras" />
                                </div>
                                <div className="business-content">
                                    <h3>Obras</h3>
                                    <p>
                                        Ejecutamos montajes eléctricos industriales cumpliendo normas, plazos y estándares de seguridad.
                                    </p>
                                </div>
                            </div>
                            <div className="business-card">
                                <div className="business-image">
                                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=90" alt="Tableros" />
                                </div>
                                <div className="business-content">
                                    <h3>Tableros Eléctricos</h3>
                                    <p>
                                        Fabricamos tableros eléctricos confiables y a medida, listos para operar de forma segura y continua.
                                    </p>
                                </div>
                            </div>
                            <div className="business-card">
                                <div className="business-image">
                                    <img src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&q=90" alt="Automatización" />
                                </div>
                                <div className="business-content">
                                    <h3>Automatización y Servicios</h3>
                                    <p>
                                        Soluciones eléctricas de alta calidad, sistemas de control automatizado e instrumentación de procesos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                  {/* SERVICES SECTION */}
                  <section id="servicios" className="section section-white">
                    <div className="container">
                      <div className="section-header">
                        <h2 className="section-title">Nuestros Servicios</h2>
                        <p className="section-subtitle">
                          Soluciones especializadas para cada necesidad industrial
                        </p>
                      </div>

                      <div className="services-grid">
                        <div className="service-card">
                          <Zap className="service-icon" />
                          <h3>Ingeniería Eléctrica</h3>
                          <p>
                            Diseño, cálculo y ejecución de proyectos eléctricos industriales y comerciales, con especial atención al cumplimiento normativo.
                          </p>
                        </div>

                        <div className="service-card">
                          <Cpu className="service-icon" />
                          <h3>Automatización e Instrumentación</h3>
                          <p>
                            Implementación de sistemas de control automatizado, instrumentación de procesos y monitoreo inteligente.
                          </p>
                        </div>

                        <div className="service-card">
                          <Wrench className="service-icon" />
                          <h3>Mantenimiento Industrial</h3>
                          <p>
                            Mantenimiento preventivo y correctivo de instalaciones eléctricas, equipos y sistemas industriales.
                          </p>
                        </div>

                        <div className="service-card">
                          <LayoutGrid className="service-icon" />
                          <h3>Tableros Eléctricos</h3>
                          <p>
                            Diseño, fabricación y montaje de tableros de control, fuerza y distribución según normativa vigente.
                          </p>
                        </div>

                        <div className="service-card">
                          <Plug className="service-icon" />
                          <h3>Instalaciones Eléctricas</h3>
                          <p>
                            Instalaciones eléctricas industriales completas, desde media y baja tensión hasta sistemas especiales.
                          </p>
                        </div>

                        <div className="service-card">
                          <Package className="service-icon" />
                          <h3>Suministros Industriales</h3>
                          <p>
                            Distribución de equipos y accesorios industriales para automatización, control e instrumentación, trabajando con marcas reconocidas del sector.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>


                {/* BANNER SECTION */}
                <section className="banner-section">
                    <div className="container">
                        <h2>Comprometidos con la Calidad y Eficiencia</h2>
                        <p>En cada proyecto que desarrollamos, aplicamos los más altos estándares</p>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contacto" className="section section-white">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Contactá a Nuestro Equipo</h2>
                            <p className="section-subtitle">
                                ¡Hablemos de tu proyecto! Estamos listos para ayudarte en cada etapa
                            </p>
                        </div>
                        <div className="contact-wrapper">
                            <div className="contact-info">
                                <h3>Información de Contacto</h3>
                                <p>
                                    Con años de experiencia y un compromiso firme con la calidad, estamos listos para ayudarte desde la ingeniería hasta la instalación.
                                </p>
                                <div className="contact-detail">
    <div className="contact-detail-icon">
        <Mail size={30} color="#000" />
    </div>
    <div className="contact-detail-text">
        <strong>Email</strong><br />
        info@elitech.com<br />
        ventas@elitech.com
    </div>
</div>

<div className="contact-detail">
    <div className="contact-detail-icon">
        <Phone size={30} color="#000" />
    </div>
    <div className="contact-detail-text">
        <strong>Teléfono</strong><br />
        95-0922981<br />
        051-353047
    </div>
</div>

<div className="contact-detail">
    <div className="contact-detail-icon">
        <MapPin size={30} color="#000" />
    </div>
    <div className="contact-detail-text">
        <strong>Ubicación</strong><br />
        Perú<br />
        Lunes a viernes de 8 a 17h
    </div>
</div>

                            </div>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre Completo *</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Empresa</label>
                                    <input
                                        type="text"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tipo de Servicio</label>
                                    <select
                                        name="servicio"
                                        value={formData.servicio}
                                        onChange={handleChange}
                                    >
                                        <option value="">Seleccione un servicio</option>
                                        <option value="ingenieria">Ingeniería</option>
                                        <option value="obras">Obras</option>
                                        <option value="tableros">Tableros</option>
                                        <option value="automatizacion">Automatización</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Mensaje *</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>Corporación ELITECH EIRL</h3>
                            <p>
                                Somos líderes en ingeniería eléctrica e industrial, ofreciendo soluciones de calidad para el sector corporativo.
                            </p>
                            <p style={{marginTop: '1.5rem'}}>
                                <strong>Energía para tus proyectos</strong>
                            </p>
                        </div>
                        <div className="footer-section">
                            <h3>Servicios</h3>
                            <ul>
                                <li>Ingeniería Eléctrica</li>
                                <li>Automatización</li>
                                <li>Mantenimiento Industrial</li>
                                <li>Tableros Eléctricos</li>
                                <li>Instalaciones Eléctricas</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Contacto</h3>
                            <p>Email: info@elitech.com</p>
                            <p>Ventas: ventas@elitech.com</p>
                            <p>Teléfono: 051-353047</p>
                            <p>Perú</p>
                            <p>Lunes a viernes de 8 a 17h</p>
                        </div>
                        <div className="footer-section">
                            <h3>Sobre Nosotros</h3>
                            <ul>
                                <li>15+ años de experiencia</li>
                                <li>300+ proyectos realizados</li>
                                <li>100+ clientes satisfechos</li>
                                <li>Certificaciones de calidad</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Corporación ELITECH EIRL. Todos los derechos reservados. | DEMO - Contenido provisional</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default ElitechLanding;