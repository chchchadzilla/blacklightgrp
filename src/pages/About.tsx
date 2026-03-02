import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '10+', label: 'Years Experience', suffix: '' },
    { number: '150+', label: 'Projects Completed', suffix: '+' },
    { number: '50+', label: 'Corporate Clients', suffix: '+' },
    { number: '98%', label: 'Client Satisfaction', suffix: '%' },
  ];

  const team = [
    {
      name: '[Name]',
      role: 'Founder / CEO',
      initial: 'A',
    },
    {
      name: '[Name]',
      role: 'Creative Director',
      initial: 'B',
    },
    {
      name: '[Name]',
      role: 'Technical Director',
      initial: 'C',
    },
    {
      name: '[Name]',
      role: 'Strategy Consultant',
      initial: 'D',
    },
  ];

  const timeline = [
    {
      year: '2014',
      title: 'The Beginning',
      description: 'BlackLightGrp was born in a small office with a vision to change the industry.',
    },
    {
      year: '2017',
      title: 'Rapid Growth',
      description: 'Team expanded to 20 people, began serving our first international clients.',
    },
    {
      year: '2020',
      title: 'Strategic Upgrade',
      description: 'Launched digital transformation services to help businesses adapt to new era demands.',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Became one of the most innovative consulting companies in the industry.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly explore new possibilities and refuse to stand still. Every day is an opportunity to redefine industry standards.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      title: 'Integrity',
      description: 'Transparency and honesty are the foundations of our work. Everything we say withstands the test of time and facts.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Excellence',
      description: 'Pursuing excellence is not just a slogan, it is our daily standard. Details determine success, attitude determines height.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.2,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stagger-children">
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ About Us ]
            </p>
            <h1 style={{ marginBottom: 'var(--space-lg)' }}>
              About
              <br />
              <span style={{ color: 'var(--accent)' }}>BLACKLIGHTGRP</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--grid-line-light)',
              maxWidth: '700px',
              lineHeight: 1.8,
            }}>
              We are a consulting firm focused on strategy and innovation. Since our founding, we have been dedicated to helping
              business clients find clarity in complex markets and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        style={{
          borderTop: '1px solid var(--grid-line)',
          borderBottom: '1px solid var(--grid-line)',
          padding: 'var(--space-2xl) 0',
        }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--grid-line)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease ${index * 0.1}s`,
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}>
                  {isVisible ? stat.number : '0'}{stat.suffix}
                </p>
                <p className="text-mono" style={{
                  fontSize: '0.75rem',
                  color: 'var(--grid-line-light)',
                  marginTop: 'var(--space-sm)',
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-xl)',
          }}>
            {/* Mission */}
            <div style={{
              padding: 'var(--space-xl)',
              border: '1px solid var(--grid-line)',
            }}>
              <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
                [ Our Mission ]
              </p>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                Creating Business Value
                <br />
                Through Strategic Insight
              </h2>
              <p style={{
                color: 'var(--grid-line-light)',
                lineHeight: 1.8,
              }}>
                We are committed to helping business clients solve their most complex challenges and achieve sustainable
                growth through deep industry insights, creative thinking, and pragmatic execution. Every project is an
                opportunity for us to practice our mission.
              </p>
            </div>

            {/* Vision */}
            <div style={{
              padding: 'var(--space-xl)',
              border: '1px solid var(--grid-line)',
            }}>
              <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
                [ Our Vision ]
              </p>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                To Be The Trusted
                <br />
                <span style={{ color: 'var(--accent)' }}>Strategic Partner</span> For Businesses
              </h2>
              <p style={{
                color: 'var(--grid-line-light)',
                lineHeight: 1.8,
              }}>
                We strive to be the preferred strategic consulting partner for our clients, not just providing solutions
                but working together to drive change and achieve vision. We pursue not one-off projects but long-term
                mutually beneficial partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{
        borderTop: '1px solid var(--grid-line)',
        background: 'var(--canvas)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 'var(--space-xl)',
          }}>
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ Core Values ]
            </p>
            <h2>The Forces That Drive Us Forward</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{
                  padding: 'var(--space-xl)',
                  border: '1px solid var(--grid-line)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--grid-line)';
                }}
              >
                <div style={{
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  marginBottom: 'var(--space-md)',
                  fontSize: '1.5rem',
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: 'var(--grid-line-light)',
                  lineHeight: 1.8,
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 'var(--space-xl)',
          }}>
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ Our Team ]
            </p>
            <h2>Meet Our Exceptional Team</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {team.map((member) => (
              <div
                key={member.name}
              >
                <div
                  className="placeholder-image"
                  style={{
                    aspectRatio: '3/4',
                    marginBottom: 'var(--space-md)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--grid-line)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '4rem',
                      fontWeight: 800,
                      color: 'var(--grid-line-light)',
                    }}>
                      {member.initial}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10, 10, 10, 0.9)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}
                  >
                    <p className="text-mono" style={{ fontSize: '0.625rem', color: 'var(--accent)' }}>
                      View Profile
                    </p>
                  </div>
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  marginBottom: 'var(--space-xs)',
                }}>
                  {member.name}
                </h3>
                <p className="text-mono" style={{
                  fontSize: '0.75rem',
                  color: 'var(--grid-line-light)',
                }}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{
        borderTop: '1px solid var(--grid-line)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 'var(--space-xl)',
          }}>
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ Our Journey ]
            </p>
            <h2>Our Growth Trajectory</h2>
          </div>

          <div style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'var(--grid-line)',
              transform: 'translateX(-50%)',
              display: 'none',
            }} className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto 1fr',
                    gap: 'var(--space-lg)',
                    alignItems: 'center',
                  }}
                >
                  {/* Left Content */}
                  <div style={{
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                    padding: 'var(--space-lg)',
                    border: '1px solid var(--grid-line)',
                    display: index % 2 === 0 ? 'block' : 'none',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      {item.year}
                    </p>
                    <h3 style={{
                      fontSize: '1.125rem',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: 'var(--grid-line-light)',
                      fontSize: '0.875rem',
                    }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div style={{
                    width: '12px',
                    height: '12px',
                    background: 'var(--accent)',
                    position: 'relative',
                    zIndex: 1,
                  }} />

                  {/* Right Content */}
                  <div style={{
                    textAlign: index % 2 !== 0 ? 'left' : 'right',
                    padding: 'var(--space-lg)',
                    border: '1px solid var(--grid-line)',
                    display: index % 2 !== 0 ? 'block' : 'none',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      {item.year}
                    </p>
                    <h3 style={{
                      fontSize: '1.125rem',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: 'var(--grid-line-light)',
                      fontSize: '0.875rem',
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
