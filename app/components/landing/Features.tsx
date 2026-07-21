import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Easy to Use',
      description: 'Simple and intuitive interface for organizing your links',
      icon: '✨',
    },
    {
      id: 2,
      title: 'Customizable',
      description: 'Personalize your link collections with themes and layouts',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'Share & Collaborate',
      description: 'Share your links with team members and collaborate in real-time',
      icon: '👥',
    },
    {
      id: 4,
      title: 'Analytics',
      description: 'Track link clicks and get insights on engagement',
      icon: '📊',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose LinkPad?</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
