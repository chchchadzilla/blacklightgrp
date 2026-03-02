import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--grid-line)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ padding: 'var(--space-md) var(--space-lg)' }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
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
          </NavLink>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xl)',
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? 'var(--accent)' : 'var(--ink)',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--space-sm)',
            }}
            className="mobile-menu-btn"
          >
            <div style={{
              width: '24px',
              height: '2px',
              background: 'var(--ink)',
              marginBottom: '6px',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
              transition: 'all 0.3s ease',
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              background: 'var(--ink)',
              marginBottom: '6px',
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: 'all 0.3s ease',
            }} />
            <div style={{
              width: '24px',
              height: '2px',
              background: 'var(--ink)',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
              transition: 'all 0.3s ease',
            }} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--canvas)',
            borderBottom: '1px solid var(--grid-line)',
            padding: 'var(--space-lg)',
          }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: 'var(--space-md) 0',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--grid-line)',
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
