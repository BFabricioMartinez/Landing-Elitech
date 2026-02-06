import React, { useState } from 'react';
import { Mail, Phone, MapPin, Zap, Cpu, Wrench, LayoutGrid, Plug, Package, ArrowRight, Gauge, Flame } from 'lucide-react';

function ElitechLanding() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por contactarnos. Este es un formulario de demostración.');
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
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
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 1.2rem;
            color: #00ff88;
            text-transform: uppercase;
            letter-spacing: 4px;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
            display: block;
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

        /* SERVICES SECTION - PROFESSIONAL */
        .section-services {
            background:
                linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.6) 0%,
                    rgba(248, 250, 252, 0.6) 100%
                ),
                url('/4.jpg');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: #fff;
            padding: 2.5rem 2rem;
            border-radius: 12px;
            box-shadow:
                0 1px 3px rgba(0, 0, 0, 0.04),
                0 4px 12px rgba(0, 0, 0, 0.04);
            transition:
                transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            border: 1px solid #E2E8F0;
            display: flex;
            flex-direction: column;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #0EA5E9;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover::before {
            transform: scaleX(1);
        }

        .service-card:hover {
            transform: translateY(-4px);
            box-shadow:
                0 4px 6px rgba(0, 0, 0, 0.04),
                0 10px 24px rgba(0, 0, 0, 0.08);
            border-color: #CBD5E1;
        }

        .service-icon-wrapper {
            width: 52px;
            height: 52px;
            border-radius: 10px;
            background: #F1F5F9;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            transition:
                background 0.25s ease,
                transform 0.25s ease;
        }

        .service-card:hover .service-icon-wrapper {
            background: #E0F2FE;
            transform: scale(1.05);
        }

        .service-icon-wrapper svg {
            width: 26px;
            height: 26px;
            color: #1E3A8A;
            stroke-width: 1.75;
            transition: color 0.25s ease;
        }

        .service-card:hover .service-icon-wrapper svg {
            color: #0369A1;
        }

        .service-card h3 {
            font-size: 1.25rem;
            color: #1E293B;
            margin-bottom: 0.75rem;
            font-weight: 700;
            letter-spacing: -0.01em;
        }

        .service-card p {
            color: #64748B;
            line-height: 1.7;
            font-size: 0.95rem;
            flex-grow: 1;
        }

        .service-card-footer {
            margin-top: 1.5rem;
            padding-top: 1rem;
            border-top: 1px solid #F1F5F9;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #0EA5E9;
            font-size: 0.875rem;
            font-weight: 600;
            opacity: 0;
            transform: translateY(8px);
            transition:
                opacity 0.25s ease,
                transform 0.25s ease;
        }

        .service-card:hover .service-card-footer {
            opacity: 1;
            transform: translateY(0);
        }

        .service-card-footer svg {
            width: 16px;
            height: 16px;
            transition: transform 0.2s ease;
        }

        .service-card:hover .service-card-footer svg {
            transform: translateX(4px);
        }

        /* BRANDS/PARTNERS SECTION */
        .brands-section {
            padding: 4rem 3rem;
            background: #fff;
            border-top: 1px solid #E2E8F0;
            border-bottom: 1px solid #E2E8F0;
        }

        .brands-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .brands-header h3 {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #64748B;
            font-weight: 600;
        }

        .brands-track-wrapper {
            overflow: hidden;
            position: relative;
        }

        .brands-track-wrapper::before,
        .brands-track-wrapper::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100px;
            z-index: 2;
            pointer-events: none;
        }

        .brands-track-wrapper::before {
            left: 0;
            background: linear-gradient(90deg, #fff 0%, transparent 100%);
        }

        .brands-track-wrapper::after {
            right: 0;
            background: linear-gradient(90deg, transparent 0%, #fff 100%);
        }

        .brands-track {
            display: flex;
            gap: 4rem;
            animation: scroll-brands 30s linear infinite;
            width: max-content;
        }

        .brands-track:hover {
            animation-play-state: paused;
        }

        @keyframes scroll-brands {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }

        .brand-item {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            padding: 0 1rem;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }

        .brand-item:hover {
            opacity: 1;
        }

        .brand-item span {
            font-size: 1.4rem;
            font-weight: 700;
            color: #334155;
            white-space: nowrap;
            letter-spacing: -0.02em;
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

        /* BANNER SECTION */
        .banner-section {
            background: linear-gradient(135deg, rgba(30, 58, 138, 0.4), rgba(14, 165, 233, 0.2)),
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

        /* CONTACT SECTION - NUEVO DISEÑO MINIMALISTA */
        .contact-section-bg {
            background: linear-gradient(135deg, rgba(51, 65, 85, 0.95), rgba(30, 41, 59, 0.95)),
                        url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 6rem 3rem;
            position: relative;
        }

        .contact-section-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(30, 41, 59, 0.85);
        }

        .contact-container {
            max-width: 1100px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .contact-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .contact-header h2 {
            font-size: 2.5rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 800;
        }

        .contact-header p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.85);
        }

        /* FORMULARIO SIMPLE Y LIMPIO */
        .simple-form-container {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 3rem;
            border: 1px solid rgba(255, 255, 255, 0.15);
            max-width: 700px;
            margin: 0 auto 4rem;
        }

        .form-group {
            margin-bottom: 1.3rem;
        }

        .form-group label {
            display: block;
            color: #fff;
            font-weight: 600;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 1rem 1.2rem;
            background: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
            font-family: inherit;
            color: #1E293B;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            background: #fff;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 100px;
        }

        .submit-button-simple {
            width: 100%;
            padding: 1.1rem;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            font-size: 1.05rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 1rem;
        }

        .submit-button-simple:hover {
            background: rgba(255, 255, 255, 0.3);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
        }

        /* CONTACT INFO HORIZONTAL - COMO LA REFERENCIA */
        .contact-info-horizontal {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5rem;
            max-width: 1100px;
            margin: 0 auto;
            padding: 2rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .contact-info-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #fff;
        }

        .contact-info-item svg {
            flex-shrink: 0;
        }

        .contact-info-item div {
            text-align: left;
        }

        .contact-info-item p {
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.9);
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

        /* WHATSAPP FLOAT BUTTON */
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background-color: #25d366;
          color: #fff;
          padding: 14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          z-index: 2000;
          transition: all 0.3s ease;
          width: 60px;
          height: 60px;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
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

            .contact-info-horizontal {
                flex-direction: column;
                gap: 2rem;
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
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .about-content {
                grid-template-columns: 1fr;
            }

            .section {
                padding: 4rem 1.5rem;
            }

            .section-title {
                font-size: 2rem;
            }

            .services-grid {
                grid-template-columns: 1fr;
            }

            .business-units-grid {
                grid-template-columns: 1fr;
            }

            .simple-form-container {
                padding: 2rem 1.5rem;
            }

            .contact-info-horizontal {
                flex-direction: column;
                gap: 2rem;
                padding: 2rem 1rem;
            }

            .contact-info-item {
                flex-direction: column;
                text-align: center;
            }

            .contact-info-item div {
                text-align: center;
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

                {/* BRANDS SECTION */}
                <section className="brands-section">
                    <div className="container">
                        <div className="brands-header">
                            <h3>Distribuidor autorizado de marcas líderes</h3>
                        </div>
                        <div className="brands-track-wrapper">
                            <div className="brands-track">
                                <div className="brand-item"><span>ABB</span></div>
                                <div className="brand-item"><span>SIEMENS</span></div>
                                <div className="brand-item"><span>Schneider Electric</span></div>
                                <div className="brand-item"><span>Honeywell</span></div>
                                <div className="brand-item"><span>BOSCH</span></div>
                                <div className="brand-item"><span>GE</span></div>
                                <div className="brand-item"><span>ASCO</span></div>
                                <div className="brand-item"><span>EXTECH</span></div>
                                <div className="brand-item"><span>Beckett</span></div>
                                <div className="brand-item"><span>INDECO</span></div>
                                <div className="brand-item"><span>Phelps Dodge</span></div>
                                <div className="brand-item"><span>Mindman</span></div>
                                <div className="brand-item"><span>CAMSCO</span></div>
                                {/* Duplicado para loop infinito */}
                                <div className="brand-item"><span>ABB</span></div>
                                <div className="brand-item"><span>SIEMENS</span></div>
                                <div className="brand-item"><span>Schneider Electric</span></div>
                                <div className="brand-item"><span>Honeywell</span></div>
                                <div className="brand-item"><span>BOSCH</span></div>
                                <div className="brand-item"><span>GE</span></div>
                                <div className="brand-item"><span>ASCO</span></div>
                                <div className="brand-item"><span>EXTECH</span></div>
                                <div className="brand-item"><span>Beckett</span></div>
                                <div className="brand-item"><span>INDECO</span></div>
                                <div className="brand-item"><span>Phelps Dodge</span></div>
                                <div className="brand-item"><span>Mindman</span></div>
                                <div className="brand-item"><span>CAMSCO</span></div>
                            </div>
                        </div>
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
                <section id="servicios" className="section section-services">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Nuestros Servicios</h2>
                            <p className="section-subtitle">
                                Soluciones especializadas para cada necesidad industrial
                            </p>
                        </div>

                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Zap />
                                </div>
                                <h3>Ingeniería Eléctrica</h3>
                                <p>
                                    Diseño, cálculo y ejecución de proyectos eléctricos industriales y comerciales, con especial atención al cumplimiento normativo.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Cpu />
                                </div>
                                <h3>Automatización e Instrumentación</h3>
                                <p>
                                    Implementación de sistemas de control automatizado, instrumentación de procesos y monitoreo inteligente.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Wrench />
                                </div>
                                <h3>Mantenimiento Industrial</h3>
                                <p>
                                    Mantenimiento preventivo y correctivo de instalaciones eléctricas, equipos y sistemas industriales.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <LayoutGrid />
                                </div>
                                <h3>Tableros Eléctricos</h3>
                                <p>
                                    Diseño, fabricación y montaje de tableros de control, fuerza y distribución según normativa vigente.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Plug />
                                </div>
                                <h3>Instalaciones Eléctricas</h3>
                                <p>
                                    Instalaciones eléctricas industriales completas, desde media y baja tensión hasta sistemas especiales.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Package />
                                </div>
                                <h3>Suministros Industriales</h3>
                                <p>
                                    Distribución de equipos y accesorios industriales para automatización, control e instrumentación, trabajando con marcas reconocidas del sector.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Gauge />
                                </div>
                                <h3>Sistemas Hidráulicos y Neumáticos</h3>
                                <p>
                                    Diseño, instalación y mantenimiento de sistemas hidráulicos y neumáticos para aplicaciones industriales de alta exigencia.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
                            </div>

                            <div className="service-card">
                                <div className="service-icon-wrapper">
                                    <Flame />
                                </div>
                                <h3>Calderos y Quemadores Industriales</h3>
                                <p>
                                    Instalación, mantenimiento y reparación de calderos y quemadores industriales con servicio técnico especializado.
                                </p>
                                <div className="service-card-footer">
                                    <span>Conocer más</span>
                                    <ArrowRight />
                                </div>
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

                {/* CONTACT SECTION - SOLO ESTO CAMBIÓ */}
                <section id="contacto" className="contact-section-bg">
                    <div className="contact-container">
                        <div className="contact-header">
                            <h2>Contactanos</h2>
                            <p>Estamos listos para ayudarte con tu proyecto</p>
                        </div>

                        {/* FORMULARIO */}
                        <div className="simple-form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre y Apellidos</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Mail</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-button-simple">
                                    Enviar mensaje
                                </button>
                            </form>
                        </div>

                        {/* CONTACT INFO HORIZONTAL */}
                        <div className="contact-info-horizontal">
                            <div className="contact-info-item">
                                <Mail size={28} color="#fff" strokeWidth={1.5} />
                                <div>
                                    <p>elitechsac@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <Phone size={28} color="#fff" strokeWidth={1.5} />
                                <div>
                                    <p>(051) 353047 / 950 922 981</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <MapPin size={28} color="#fff" strokeWidth={1.5} />
                                <div>
                                    <p>Jr. Javier Heraud 146, Puno</p>
                                </div>
                            </div>
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
                                <li>Sistemas Hidráulicos</li>
                                <li>Calderos Industriales</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h3>Contacto</h3>
                            <p>Email: elitechsac@gmail.com</p>
                            <p>Teléfono: (051) 353047</p>
                            <p>Cel: 950 922 981</p>
                            <p>Jr. Javier Heraud 146, Puno</p>
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
                        <p>&copy; 2024 Corporación ELITECH EIRL. Todos los derechos reservados.</p>
                    </div>
                </footer>

                {/* WHATSAPP BUTTON */}
                <a
                    href="https://wa.me/51950922981"
                    className="whatsapp-float"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                </a>
            </div>
        </>
    );
}

export default ElitechLanding;