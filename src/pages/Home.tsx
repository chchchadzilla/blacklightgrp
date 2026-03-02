import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Strategic Consulting',
    'Brand Building',
    'Digital Marketing',
    'User Experience',
    'Data Analytics',
    'Technology',
  ];

  return (
    <main>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background Grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.3,
        }} />

        {/* Animated Accent Lines */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: 0,
          width: '100%',
          height: '1px',
          background: 'var(--accent)',
          opacity: 0.3,
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          left: 0,
          width: '100%',
          height: '1px',
          background: 'var(--accent)',
          opacity: 0.2,
        }} />

        <div ref={heroRef} className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stagger-children">
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ Welcome To ]
            </p>
            <h1 style={{ marginBottom: 'var(--space-lg)' }}>
              <span style={{ color: 'var(--ink)' }}>BLACK</span>
              <span style={{ color: 'var(--accent)' }}>LIGHT</span>
              <span style={{ color: 'var(--ink)' }}>GRP</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--grid-line-light)',
              maxWidth: '600px',
              marginBottom: 'var(--space-xl)',
              lineHeight: 1.8,
            }}>
              We are a consultancy focused on innovation and strategy. Through deep insights and creative thinking,
              we help businesses find their direction in complex and ever-changing markets.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <NavLink to="/contact" className="btn btn-primary">
                Get In Touch
              </NavLink>
              <NavLink to="/services" className="btn">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: 'var(--space-xl)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-sm)',
        }}>
          <span className="text-mono" style={{ fontSize: '0.625rem', color: 'var(--grid-line-light)' }}>
            Scroll Down
          </span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollPulse 2s ease-in-out infinite',
          }} />
        </div>

        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 1; transform: scaleY(1); }
            50% { opacity: 0.5; transform: scaleY(0.8); }
          }
        `}</style>
      </section>

      {/* Services Marquee */}
      <section style={{
        borderTop: '1px solid var(--grid-line)',
        borderBottom: '1px solid var(--grid-line)',
        padding: 'var(--space-lg) 0',
        overflow: 'hidden',
      }}>
        <div className="marquee">
          <div className="marquee-content">
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-lg)',
                  padding: '0 var(--space-xl)',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap',
                }}>
                  {service}
                </span>
                <span style={{
                  width: '8px',
                  height: '8px',
                  background: 'var(--accent)',
                }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'center',
          }}>
            <div>
              <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
                [ About Us ]
              </p>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                Creating Value Through
                <br />
                <span style={{ color: 'var(--accent)' }}>Strategic Thinking</span>
              </h2>
              <p style={{
                color: 'var(--grid-line-light)',
                marginBottom: 'var(--space-lg)',
                lineHeight: 1.8,
              }}>
                Founded during a time of industry transformation, BlackLightGrp is dedicated to providing comprehensive
                strategic consulting and solutions for businesses. We believe every company has unique potential,
                and our mission is to help you discover and realize that potential.
              </p>
              <NavLink to="/about" className="btn">
                Our Story
              </NavLink>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-md)',
            }}>
              <div className="placeholder-image" style={{ aspectRatio: '1' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--grid-line-light)" strokeWidth="1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="placeholder-image" style={{ aspectRatio: '1', marginTop: 'var(--space-xl)' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--grid-line-light)" strokeWidth="1">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="placeholder-image" style={{ aspectRatio: '1', marginTop: 'calc(-1 * var(--space-xl))' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--grid-line-light)" strokeWidth="1">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="placeholder-image" style={{ aspectRatio: '1' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--grid-line-light)" strokeWidth="1">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections Grid */}
      <section className="section" style={{ background: 'var(--canvas)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {/* Services Card */}
            <NavLink to="/services" style={{ textDecoration: 'none' }}>
              <article className="card" style={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  borderBottom: '1px solid var(--grid-line)',
                  paddingBottom: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>
                    [ 01 ]
                  </p>
                  <h3 style={{ color: 'var(--ink)' }}>Services</h3>
                </div>
                <div style={{ flex: 1 }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    {['Strategic Planning', 'Brand Consulting', 'Market Analysis', 'Digital Transformation'].map((item) => (
                      <li key={item} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-sm)',
                        fontFamily: 'var(--font-body)',
                        color: 'var(--grid-line-light)',
                      }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          background: 'var(--accent)',
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  marginTop: 'var(--space-lg)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  <span className="text-mono" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>
                    Explore Services
                  </span>
                  <span style={{
                    width: '20px',
                    height: '1px',
                    background: 'var(--accent)',
                  }} />
                </div>
              </article>
            </NavLink>

            {/* About Card */}
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <article className="card" style={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  borderBottom: '1px solid var(--grid-line)',
                  paddingBottom: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>
                    [ 02 ]
                  </p>
                  <h3 style={{ color: 'var(--ink)' }}>About Us</h3>
                </div>
                <p style={{
                  color: 'var(--grid-line-light)',
                  lineHeight: 1.8,
                  marginBottom: 'var(--space-lg)',
                  flex: 1,
                }}>
                  Learn more about our team, our mission, our vision, and the core values that drive us forward.
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {[
                    { number: '10+', label: 'Years Exp' },
                    { number: '50+', label: 'Projects' },
                    { number: '100%', label: 'Dedicated' },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                      <p style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                      }}>
                        {stat.number}
                      </p>
                      <p className="text-mono" style={{ fontSize: '0.625rem', color: 'var(--grid-line-light)' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  <span className="text-mono" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>
                    Learn More
                  </span>
                  <span style={{
                    width: '20px',
                    height: '1px',
                    background: 'var(--accent)',
                  }} />
                </div>
              </article>
            </NavLink>

            {/* Gallery Card */}
            <NavLink to="/gallery" style={{ textDecoration: 'none' }}>
              <article className="card" style={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  borderBottom: '1px solid var(--grid-line)',
                  paddingBottom: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-sm)' }}>
                    [ 03 ]
                  </p>
                  <h3 style={{ color: 'var(--ink)' }}>Gallery</h3>
                </div>
                <div style={{
                  flex: 1,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: '1fr 1fr',
                  gap: 'var(--space-sm)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="placeholder-image"
                      style={{
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  ))}
                </div>
                <div style={{
                  marginTop: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  <span className="text-mono" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>
                    View All
                  </span>
                  <span style={{
                    width: '20px',
                    height: '1px',
                    background: 'var(--accent)',
                  }} />
                </div>
              </article>
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        borderTop: '1px solid var(--grid-line)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ Ready? ]
            </p>
            <h2 style={{ marginBottom: 'var(--space-lg)', maxWidth: '800px' }}>
              Let's Build
              <br />
              An <span style={{ color: 'var(--accent)' }}>Exceptional</span> Future Together
            </h2>
            <p style={{
              color: 'var(--grid-line-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '600px',
            }}>
              Whether you need strategic consulting or a complete brand solution, we're ready to help you achieve your goals.
            </p>
            <NavLink to="/contact" className="btn btn-primary">
              Start A Project
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}
