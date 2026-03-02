import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Strategic Consulting',
      description: 'In-depth analysis of market environment, competitive landscape, and internal capabilities to develop clear growth strategies and execution paths.',
      items: ['Market Analysis', 'Competitive Strategy', 'Business Model Innovation', 'Strategic Planning'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Brand Building',
      description: 'From brand positioning to visual systems, creating unique and impactful brand identities that help businesses stand out in the market.',
      items: ['Brand Positioning', 'Visual Identity', 'Brand Storytelling', 'Brand Management'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Integrating online and offline channels to develop precise digital marketing strategies that boost brand visibility and conversion efficiency.',
      items: ['SEO', 'Social Media Marketing', 'Content Marketing', 'Data Analytics'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'User Experience',
      description: 'User-centered design thinking to optimize product or service experiences, enhancing user satisfaction and loyalty.',
      items: ['User Research', 'Interaction Design', 'Usability Testing', 'Experience Optimization'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Through data mining and analysis, providing actionable business insights to help enterprises make smarter decisions.',
      items: ['Data Collection', 'Business Intelligence', 'Predictive Analysis', 'Reporting & Visualization'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Technology',
      description: 'Providing end-to-end technology solutions from concept to implementation, including web development, system integration, and technical consulting.',
      items: ['Web Development', 'System Integration', 'Technical Consulting', 'Support & Maintenance'],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
  ];

  const resources = [
    {
      title: '2024 Industry Trends Report',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-12-01',
    },
    {
      title: 'Brand Building Whitepaper',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-11-15',
    },
    {
      title: 'Digital Transformation Guide',
      type: 'PDF',
      size: '3.2 MB',
      date: '2024-10-20',
    },
    {
      title: 'UX Best Practices',
      type: 'PDF',
      size: '2.1 MB',
      date: '2024-09-05',
    },
  ];

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '50vh',
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
              [ Services & Resources ]
            </p>
            <h1 style={{ marginBottom: 'var(--space-lg)' }}>
              What We
              <br />
              <span style={{ color: 'var(--accent)' }}>Offer</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--grid-line-light)',
              maxWidth: '700px',
              lineHeight: 1.8,
            }}>
              We provide comprehensive strategic consulting and solutions to help businesses stay competitive in rapidly changing markets.
              From strategic planning to execution, we are with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="section">
        <div className="container">
          {/* Service List */}
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-lg)' }}>
              [ Our Services ]
            </p>

            <div style={{
              borderTop: '1px solid var(--grid-line)',
            }}>
              {services.map((service, index) => (
                <div
                  key={service.id}
                  style={{
                    borderBottom: '1px solid var(--grid-line)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 255, 0, 0.03)';
                    e.currentTarget.style.paddingLeft = 'var(--space-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr auto',
                    gap: 'var(--space-lg)',
                    alignItems: 'center',
                    padding: 'var(--space-xl) 0',
                  }}>
                    {/* Number */}
                    <p className="text-mono" style={{
                      fontSize: '0.875rem',
                      color: 'var(--grid-line-light)',
                    }}>
                      0{index + 1}
                    </p>

                    {/* Content */}
                    <div>
                      <h3 style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                        marginBottom: 'var(--space-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-md)',
                      }}>
                        {service.title}
                        <span style={{
                          color: 'var(--accent)',
                          opacity: activeService === service.id ? 1 : 0,
                          transform: activeService === service.id ? 'translateX(0)' : 'translateX(-10px)',
                          transition: 'all 0.3s ease',
                        }}>
                          →
                        </span>
                      </h3>
                      <p style={{
                        color: 'var(--grid-line-light)',
                        maxWidth: '600px',
                        display: activeService === service.id ? 'block' : 'none',
                        marginTop: 'var(--space-md)',
                      }}>
                        {service.description}
                      </p>
                      {/* Service Items */}
                      <div style={{
                        display: activeService === service.id ? 'flex' : 'none',
                        gap: 'var(--space-md)',
                        marginTop: 'var(--space-md)',
                        flexWrap: 'wrap',
                      }}>
                        {service.items.map((item) => (
                          <span
                            key={item}
                            style={{
                              padding: 'var(--space-xs) var(--space-sm)',
                              border: '1px solid var(--grid-line)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.75rem',
                              color: 'var(--grid-line-light)',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Icon */}
                    <div style={{
                      color: activeService === service.id ? 'var(--accent)' : 'var(--grid-line-light)',
                      transition: 'color 0.3s ease',
                    }}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              [ Our Approach ]
            </p>
            <h2>How We Create Value For You</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {[
              { step: '01', title: 'Discovery', description: 'Through research and interviews, we comprehensively understand your business, market, and challenges.' },
              { step: '02', title: 'Analysis', description: 'Using professional tools and methods, we analyze problem root causes and identify opportunities.' },
              { step: '03', title: 'Strategy', description: 'Based on insights, we design customized solutions and implementation roadmaps.' },
              { step: '04', title: 'Execution', description: 'Working closely with you to ensure effective implementation and achievement of goals.' },
            ].map((process) => (
              <div
                key={process.step}
                style={{
                  padding: 'var(--space-xl)',
                  border: '1px solid var(--grid-line)',
                  position: 'relative',
                }}
              >
                <span style={{
                  position: 'absolute',
                  top: 'var(--space-md)',
                  right: 'var(--space-md)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'var(--grid-line)',
                  lineHeight: 1,
                }}>
                  {process.step}
                </span>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: 'var(--space-md)',
                }}>
                  {process.title}
                </h3>
                <p style={{
                  color: 'var(--grid-line-light)',
                  fontSize: '0.875rem',
                  lineHeight: 1.8,
                }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 'var(--space-xl)',
          }}>
            <p className="text-mono" style={{ color: 'var(--accent)', marginBottom: 'var(--space-md)' }}>
              [ Download Resources ]
            </p>
            <h2>Featured Industry Reports & Guides</h2>
          </div>

          <div style={{
            border: '1px solid var(--grid-line)',
          }}>
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 100px 100px 150px',
              gap: 'var(--space-lg)',
              padding: 'var(--space-md) var(--space-lg)',
              borderBottom: '1px solid var(--grid-line)',
              background: 'var(--grid-line)',
            }}>
              <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>Resource Name</span>
              <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>Format</span>
              <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>Size</span>
              <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--ink)' }}>Date</span>
            </div>

            {/* Table Body */}
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 100px 100px 150px',
                  gap: 'var(--space-lg)',
                  padding: 'var(--space-md) var(--space-lg)',
                  borderBottom: index < resources.length - 1 ? '1px solid var(--grid-line)' : 'none',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 255, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                  }}>
                    {resource.title}
                  </span>
                </div>
                <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--grid-line-light)' }}>
                  {resource.type}
                </span>
                <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--grid-line-light)' }}>
                  {resource.size}
                </span>
                <span className="text-mono" style={{ fontSize: '0.75rem', color: 'var(--grid-line-light)' }}>
                  {resource.date}
                </span>
              </div>
            ))}
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
              [ Need Help? ]
            </p>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>
              Let's Create A
              <br />
              <span style={{ color: 'var(--accent)' }}>Custom Solution</span> For You
            </h2>
            <p style={{
              color: 'var(--grid-line-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '600px',
            }}>
              Every business has unique challenges and opportunities. We are ready to listen to your needs and provide the most suitable solutions.
            </p>
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
