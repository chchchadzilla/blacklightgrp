import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      label: 'Address',
      value: '[Your Company Address]',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '[Your Phone Number]',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'Email',
      value: '[your.email@company.com]',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'Hours',
      value: 'Monday - Friday 9:00 AM - 6:00 PM',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

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
              [ Contact Us ]
            </p>
            <h1 style={{ marginBottom: 'var(--space-lg)' }}>
              Let's Start
              <br />
              <span style={{ color: 'var(--accent)' }}>A Conversation</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--grid-line-light)',
              maxWidth: '600px',
              lineHeight: 1.8,
            }}>
              Whether you have a project inquiry or want to explore collaboration opportunities, we would love to hear from you.
              Please fill out the form below or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: 'var(--space-xl)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-xl)',
          }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-xl)' }}>Send A Message</h2>

              {formStatus === 'success' ? (
                <div style={{
                  padding: 'var(--space-xl)',
                  border: '1px solid var(--accent)',
                  textAlign: 'center',
                }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    style={{ margin: '0 auto var(--space-lg)' }}
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 style={{ marginBottom: 'var(--space-md)' }}>Message Sent</h3>
                  <p style={{ color: 'var(--grid-line-light)' }}>
                    Thank you for your message. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn"
                    style={{ marginTop: 'var(--space-lg)' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-lg)',
                    marginBottom: 'var(--space-lg)',
                  }}>
                    <div>
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-lg)',
                    marginBottom: 'var(--space-lg)',
                  }}>
                    <div>
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--space-md)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '2px solid var(--grid-line-light)',
                        color: 'var(--ink)',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="" style={{ background: 'var(--canvas)' }}>Select a subject</option>
                      <option value="project" style={{ background: 'var(--canvas)' }}>Project Inquiry</option>
                      <option value="cooperation" style={{ background: 'var(--canvas)' }}>Business Cooperation</option>
                      <option value="careers" style={{ background: 'var(--canvas)' }}>Careers</option>
                      <option value="other" style={{ background: 'var(--canvas)' }}>Other</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 'var(--space-xl)' }}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please describe your needs in detail..."
                      style={{
                        resize: 'vertical',
                        minHeight: '150px',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formStatus === 'submitting'}
                    style={{
                        opacity: formStatus === 'submitting' ? 0.7 : 1,
                        cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: 'var(--space-xl)' }}>Contact Information</h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-lg)',
                marginBottom: 'var(--space-xl)',
              }}>
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    style={{
                      display: 'flex',
                      gap: 'var(--space-lg)',
                      padding: 'var(--space-lg)',
                      border: '1px solid var(--grid-line)',
                    }}
                  >
                    <div style={{ color: 'var(--accent)', flexShrink: 0 }}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-mono" style={{
                        fontSize: '0.75rem',
                        color: 'var(--grid-line-light)',
                        marginBottom: 'var(--space-xs)',
                      }}>
                        {info.label}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                      }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: 'var(--space-lg)',
                }}>
                  Follow Us
                </h3>
                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      style={{
                        padding: 'var(--space-md) var(--space-lg)',
                        border: '1px solid var(--grid-line)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.875rem',
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
                      {social}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div style={{
                marginTop: 'var(--space-xl)',
                height: '300px',
                border: '1px solid var(--grid-line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(100%)',
              }}>
                <div style={{ textAlign: 'center', color: 'var(--grid-line-light)' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ margin: '0 auto var(--space-md)' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-mono" style={{ fontSize: '0.75rem' }}>
                    [Map Placeholder - Integrate Google Maps]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              [ FAQ ]
            </p>
            <h2>Questions? We Have Answers</h2>
          </div>

          <div style={{
            display: 'grid',
            gap: 'var(--space-lg)',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {[
              {
                q: 'How long are typical project timelines?',
                a: 'Project timelines depend on specific needs and scope. Small projects typically take 2-4 weeks, while larger strategic projects may take 3-6 months. We provide detailed timelines before project launch.',
              },
              {
                q: 'What is your pricing model?',
                a: 'We offer multiple pricing models including fixed project fees, monthly retainers, and hourly rates. We will recommend the most suitable model based on your specific needs.',
              },
              {
                q: 'What industries do you serve?',
                a: 'Our services cover multiple industries including technology, finance, retail, healthcare, and education. We focus more on your business challenges than specific industries.',
              },
              {
                q: 'How do we start working together?',
                a: 'You can contact us through the form or call us directly. We will arrange a free initial consultation to understand your needs and provide customized proposals.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  padding: 'var(--space-lg)',
                  border: '1px solid var(--grid-line)',
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  marginBottom: 'var(--space-md)',
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  color: 'var(--grid-line-light)',
                  lineHeight: 1.8,
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
