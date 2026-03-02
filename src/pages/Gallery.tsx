import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'brand', label: 'Brand' },
    { id: 'digital', label: 'Digital' },
    { id: 'print', label: 'Print' },
    { id: 'strategy', label: 'Strategy' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Tech Company Rebranding',
      category: 'brand',
      client: '[Client Name]',
      year: '2024',
    },
    {
      id: 2,
      title: 'Finance App Design',
      category: 'digital',
      client: '[Client Name]',
      year: '2024',
    },
    {
      id: 3,
      title: 'Annual Brand Report',
      category: 'print',
      client: '[Client Name]',
      year: '2024',
    },
    {
      id: 4,
      title: 'Retail Chain Strategic Planning',
      category: 'strategy',
      client: '[Client Name]',
      year: '2023',
    },
    {
      id: 5,
      title: 'Health Tech Brand',
      category: 'brand',
      client: '[Client Name]',
      year: '2023',
    },
    {
      id: 6,
      title: 'E-commerce UX Optimization',
      category: 'digital',
      client: '[Client Name]',
      year: '2023',
    },
    {
      id: 7,
      title: 'Lifestyle Brand Design',
      category: 'brand',
      client: '[Client Name]',
      year: '2023',
    },
    {
      id: 8,
      title: 'Product Packaging Series',
      category: 'print',
      client: '[Client Name]',
      year: '2023',
    },
    {
      id: 9,
      title: 'Restaurant Group Strategic Consulting',
      category: 'strategy',
      client: '[Client Name]',
      year: '2022',
    },
    {
      id: 10,
      title: 'EdTech Brand',
      category: 'brand',
      client: '[Client Name]',
      year: '2022',
    },
    {
      id: 11,
      title: 'Corporate Website Redesign',
      category: 'digital',
      client: '[Client Name]',
      year: '2022',
    },
    {
      id: 12,
      title: 'Art Festival Visual System',
      category: 'brand',
      client: '[Client Name]',
      year: '2022',
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '40vh',
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
              [ Case Studies ]
            </p>
            <h1 style={{ marginBottom: 'var(--space-lg)' }}>
              Our
              <br />
              <span style={{ color: 'var(--accent)' }}>Featured Work</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--grid-line-light)',
              maxWidth: '700px',
              lineHeight: 1.8,
            }}>
              Over the years, we've partnered with outstanding businesses to create work we're proud of.
              Here are some of our featured projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section style={{
        borderTop: '1px solid var(--grid-line)',
        borderBottom: '1px solid var(--grid-line)',
        position: 'sticky',
        top: '80px',
        background: 'var(--canvas)',
        zIndex: 100,
      }}>
        <div className="container" style={{ padding: 'var(--space-lg)' }}>
          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)',
            flexWrap: 'wrap',
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                style={{
                  background: filter === category.id ? 'var(--accent)' : 'transparent',
                  color: filter === category.id ? 'var(--ink-dark)' : 'var(--ink)',
                  padding: 'var(--space-sm) var(--space-md)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: filter === category.id ? 'none' : '1px solid var(--grid-line)',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 'var(--space-md)',
          }}>
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedImage(project.id)}
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Image Placeholder */}
                <div
                  className="placeholder-image"
                  style={{
                    aspectRatio: '4/3',
                    position: 'relative',
                  }}
                >
                  {/* Project Number */}
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-md)',
                    left: 'var(--space-md)',
                    zIndex: 1,
                  }}>
                    <span className="text-mono" style={{
                      fontSize: '0.75rem',
                      color: 'var(--ink)',
                      background: 'var(--canvas)',
                      padding: 'var(--space-xs) var(--space-sm)',
                    }}>
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-md)',
                    right: 'var(--space-md)',
                    zIndex: 1,
                  }}>
                    <span className="text-mono" style={{
                      fontSize: '0.625rem',
                      color: 'var(--accent)',
                      textTransform: 'uppercase',
                    }}>
                      {project.category}
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
                    <span className="text-mono" style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      View Details
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div style={{
                  padding: 'var(--space-md)',
                  border: '1px solid var(--grid-line)',
                  borderTop: 'none',
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {project.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span className="text-mono" style={{
                      fontSize: '0.75rem',
                      color: 'var(--grid-line-light)',
                    }}>
                      {project.client}
                    </span>
                    <span className="text-mono" style={{
                      fontSize: '0.75rem',
                      color: 'var(--grid-line-light)',
                    }}>
                      {project.year}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 10, 10, 0.98)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-xl)',
          }}
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            style={{
              position: 'absolute',
              top: 'var(--space-lg)',
              right: 'var(--space-lg)',
              background: 'none',
              border: 'none',
              color: 'var(--ink)',
              cursor: 'pointer',
              padding: 'var(--space-sm)',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            style={{
              position: 'absolute',
              left: 'var(--space-lg)',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'var(--ink)',
              cursor: 'pointer',
              padding: 'var(--space-sm)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === 1 ? projects.length : selectedImage! - 1);
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            style={{
              position: 'absolute',
              right: 'var(--space-lg)',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'var(--ink)',
              cursor: 'pointer',
              padding: 'var(--space-sm)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage === projects.length ? 1 : selectedImage! + 1);
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Content */}
          <div
            style={{
              maxWidth: '800px',
              width: '100%',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Placeholder */}
            <div
              className="placeholder-image"
              style={{
                aspectRatio: '16/9',
                marginBottom: 'var(--space-xl)',
              }}
            >
              <span className="text-mono" style={{ color: 'var(--grid-line-light)' }}>
                Project Image
              </span>
            </div>

            {/* Project Details */}
            {(() => {
              const project = projects.find(p => p.id === selectedImage);
              if (!project) return null;
              return (
                <div>
                  <p className="text-mono" style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    {project.category.toUpperCase()}
                  </p>
                  <h2 style={{ marginBottom: 'var(--space-md)' }}>{project.title}</h2>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 'var(--space-xl)',
                    color: 'var(--grid-line-light)',
                  }}>
                    <span className="text-mono" style={{ fontSize: '0.75rem' }}>
                      Client: {project.client}
                    </span>
                    <span className="text-mono" style={{ fontSize: '0.75rem' }}>
                      Year: {project.year}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="section" style={{
        borderTop: '1px solid var(--grid-line)',
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '50+', label: 'Corporate Clients' },
              { number: '12', label: 'Award-winning Work' },
              { number: '8', label: 'Countries Served' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--grid-line)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}>
                  {stat.number}
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
              [ Next Project ]
            </p>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>
              Ready to Create
              <br />
              <span style={{ color: 'var(--accent)' }}>Your Success</span>?
            </h2>
            <p style={{
              color: 'var(--grid-line-light)',
              marginBottom: 'var(--space-xl)',
              maxWidth: '600px',
            }}>
              We're ready to collaborate with you to bring your vision to life. Let's create memorable brand experiences together.
            </p>
            <a href="/contact" className="btn btn-primary">
              Start A Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
