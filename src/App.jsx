import React, { useEffect, useRef } from 'react';
import './index.css';

function App() {
  const revealRefs = useRef([]);

  useEffect(() => {
    document.title = "Md Mehedi Hasan (Milon) | Front-End Developer";

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="App">
      {/* Animated Background Shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <header>
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="https://cdn.pixabay.com/video/2020/05/25/40145-425126861_large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-27898-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="profile-pic-container">
            <img
              src="/profile.png"
              alt="Md Mehedi Hasan"
              className="profile-pic glass-effect"
            />
          </div>
          <h1>Md Mehedi Hasan</h1>
          <h2>Front-End Developer</h2>
          <p>
            Hi! I'm Hasan, a passionate Front-End Developer with over 11 years of experience specializing in creating responsive,
            user-friendly web applications. Currently building the future at <a href="http://dxel.net" target="_blank" rel="noopener noreferrer">DXEL Network</a>.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2.5rem' }}>
            <a href="#about" className="btn btn-solid">Explore My Work</a>
            <a href="https://dxel.net" target="_blank" rel="noopener noreferrer" className="btn">Visit My Company</a>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about" className="section reveal" ref={addToRefs}>
          <h2 className="section-title">About <span>Me</span></h2>
          <div className="card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff' }}>
              I specialize in creating responsive, user-friendly web applications with React framework.
              I have a keen eye for design and functionality, ensuring seamless user experiences across devices and browsers.
            </p>
            <p>
              With strong problem-solving skills and attention to detail, I collaborate with designers and back-end
              developers to deliver high-performance, accessible, and visually appealing applications.
            </p>
            <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/myselfhasan/" target="_blank" rel="noopener noreferrer" className="btn">
                LinkedIn Profile
              </a>
              <a href="https://github.com/dxelnetwork" target="_blank" rel="noopener noreferrer" className="btn">
                GitHub Profile
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal" ref={addToRefs}>
          <h2 className="section-title">Skills & <span>Technologies</span></h2>
          <div className="grid">
            <div className="card">
              <h3>MERN Stack</h3>
              <p>MongoDB, Express.js, React.js, Node.js</p>
            </div>
            <div className="card">
              <h3>Web Development</h3>
              <p>HTML5, CSS3, JavaScript, Responsive Design, WordPress</p>
            </div>
            <div className="card">
              <h3>Digital Marketing & SEO</h3>
              <p>Google Analytics, SEO, Facebook Pixel, Google Ads</p>
            </div>
            <div className="card">
              <h3>Design & Apps</h3>
              <p>Adobe Photoshop, Illustrator, Android App Development (Java)</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section reveal" ref={addToRefs}>
          <h2 className="section-title">Professional <span>Experience</span></h2>
          <div className="card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Founder & Front-End Developer</h3>
              <span style={{ background: 'var(--accent-secondary)', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold', color: '#fff' }}>2021 - Present</span>
            </div>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '1.1rem' }}><a href="http://dxel.net" target="_blank" rel="noopener noreferrer">DXEL Network</a></p>
            <p style={{ marginTop: '1rem' }}>Developing user-friendly web pages, optimizing applications for maximum speed, and designing mobile-based features. Ensuring high-quality graphic standards and brand consistency.</p>
          </div>

          <div className="card" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Front-End Instructor</h3>
              <span style={{ background: 'var(--card-border)', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold' }}>2021 - 2022</span>
            </div>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '1.1rem' }}><a href="https://de-hub.org/" target="_blank" rel="noopener noreferrer">Digital Entrepreneur Hub</a></p>
            <p style={{ marginTop: '1rem' }}>Instructed students on HTML, CSS, JavaScript, and modern frameworks to build real-world applications. Supported students in their learning journey and career preparation.</p>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Executive (IT)</h3>
              <span style={{ background: 'var(--card-border)', padding: '0.3rem 1rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 'bold' }}>2019 - 2022</span>
            </div>
            <p style={{ color: 'var(--accent-color)', fontWeight: '600', fontSize: '1.1rem' }}><a href="https://bijoymedia.com" target="_blank" rel="noopener noreferrer">Bijoy Media & Printing</a></p>
            <p style={{ marginTop: '1rem' }}>Managed IT operations, data security, network access, and troubleshooting. Established and implemented electronic data operations.</p>
          </div>
        </section>

        <section id="contact" className="section reveal" ref={addToRefs}>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
            <h3 style={{ fontSize: '2.5rem' }}>Ready to collaborate?</h3>
            <p style={{ margin: '1.5rem 0 2.5rem 0', fontSize: '1.2rem' }}>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <a href="https://wa.me/8801303000250" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', fontWeight: '900', margin: '2rem 0', display: 'block', color: 'var(--accent-color)', textDecoration: 'none' }}>+880 1303 000 250 (WhatsApp)</a>
            <a href="mailto:milon@dxel.net" className="btn btn-solid" style={{ transform: 'scale(1.1)' }}>Email Me</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Md Mehedi Hasan (Milon). All rights reserved. | <a href="https://milon.cc" style={{ color: 'var(--accent-color)' }}>milon.cc</a></p>
      </footer>
    </div>
  );
}

export default App;
