// AboutUs.js
import React from 'react';
import './About.css';
import Header from '../../containers/Header/Header';

const AboutUs = () => {
  return (
    
    <div className="about" >
        <Header />
        <div className='about-us-container'>
      <div className="section">
        <h2>Our Story</h2>
        <p>
          Nestled in the heart of [Your City], [Your Restaurant Name] is the culmination of a lifelong dream and a shared passion for exceptional dining. Established in [Year of Establishment], our journey began with a simple desire—to create a haven where flavors dance, and every meal is a celebration.
        </p>
      </div>
      <div className="section">
        <h2>The Culinary Tapestry</h2>
        <p>
          At [Your Restaurant Name], we view food as an art form. Our culinary artisans, under the guidance of Executive Chef [Chef’s Name], embark on a daily quest for perfection. Each dish is a canvas, and every ingredient is a stroke of inspiration, resulting in a menu that tells a story of creativity and innovation.
        </p>
      </div>
      <div className="section">
        <h2>Beyond Plates: Our Philosophy</h2>
        <h3>Warmth & Hospitality</h3>
        <p>
          Step into [Your Restaurant Name], and you’re not just a guest; you’re an honored friend. Our warm and inviting atmosphere is designed to make you feel like you’ve entered an extension of your own home. Our dedicated staff is committed to ensuring your experience is nothing short of extraordinary.
        </p>
        <h3>Sustainability & Ethical Practices</h3>
        <p>
          We take pride in our commitment to sustainability. From partnering with local farmers to adopting eco-friendly practices, we are dedicated to minimizing our environmental footprint. Savor the flavors with the knowledge that your meal reflects our dedication to ethical sourcing.
        </p>
        <h3>A Symphony of Ambiance</h3>
        <p>
          Immerse yourself in an ambiance carefully curated to elevate your dining experience. The fusion of modern design and classic comfort creates an environment where every table tells a unique story. Whether you’re here for a quiet dinner for two or a joyous celebration, we provide the perfect backdrop for your special moments.
        </p>
        <h3>We Love Our Community</h3>
        <p>
          Beyond our walls, [Your Restaurant Name] is deeply rooted in the [Your City] community. We actively engage in initiatives that support local charities, collaborate with neighboring businesses, and strive to be a positive force within the community that has embraced us.
        </p>
        <h3>Your Experience, Your Voice</h3>
        <p>
          At [Your Restaurant Name], we cherish the feedback of our patrons. Your thoughts, suggestions, and experiences are the driving force behind our constant quest for improvement. Share your journey with us, and let’s continue to create memories together.
        </p>
      </div>
      <div className="section">
        <h2>Sincerely,</h2>
        <p>
          [Your Name]<br/>
          Founder & Head Chef, [Your Restaurant Name]
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
