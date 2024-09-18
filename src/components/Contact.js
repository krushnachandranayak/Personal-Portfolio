import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted successfully!');
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#007bff' }}>
          <i className="bi bi-envelope"></i> Contact Me
        </h2>
        <div className="row">
          {/* Form Column */}
          
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows="4"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-send"></i> Send Message
              </button>
            </form>
          </div>
          {/* Google Map Column */}
          <div className="col-md-6">
            <div className="map-responsive">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1096.8877394826275!2d84.86301896022957!3d21.08738974286228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1726493118628!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
