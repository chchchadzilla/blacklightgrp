import { NavLink } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: 'LN' },
    { name: 'Twitter', url: '#', icon: 'X' },
    { name: 'Instagram', url: '#', icon: 'IG' },
  ];

  return (
    <footer style={{
      background: 'var(--canvas)',
      borderTop: '1px solid var(--grid-line)',
      padding: 'var(--space-2xl) 0 var(--space-lg)',
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-xl)',
          marginBottom: 'var(--space-xl)',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              marginBottom: 'var(--space-lg)',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '2px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  color: 'var(--accent)',
                }}>B</span>
              </div>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                color: 'var(--ink)',
              }}>
                BLACKLIGHTGRP
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'var(--grid-line-light)',
              lineHeight: 1.8,
            }}>
              We are committed to delivering innovative and effective strategic solutions.
              We believe that exceptional design and execution can transform the future of businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              marginBottom: 'var(--space-lg)',
            }}>
              Quick Links
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/contact', label: 'Contact' },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    color: 'var(--grid-line-light)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              marginBottom: 'var(--space-lg)',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--grid-line-light)',
              }}>
                <span style={{ color: 'var(--ink)' }}>Address:</span>
                [Your Company Address]
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--grid-line-light)',
              }}>
                <span style={{ color: 'var(--ink)' }}>Phone:</span>
                [Your Phone Number]
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                color: 'var(--grid-line-light)',
              }}>
                <span style={{ color: 'var(--ink)' }}>Email:</span>
                [your.email@company.com]
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              color: 'var(--accent)',
              marginBottom: 'var(--space-lg)',
            }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid var(--grid-line)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--grid-line)';
                    e.currentTarget.style.color = 'var(--ink)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--grid-line)',
          paddingTop: 'var(--space-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-md)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--grid-line-light)',
          }}>
            &copy; {currentYear} BlackLightGrp, LLC. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--grid-line-light)',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--grid-line-light)',
                textDecoration: 'none',
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
