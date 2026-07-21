import React from 'react';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: 'Free',
      price: '$0',
      description: 'Perfect for getting started',
      features: ['Up to 50 links', 'Basic customization', 'Community support'],
    },
    {
      id: 2,
      name: 'Pro',
      price: '$9',
      period: '/month',
      description: 'For growing creators',
      features: ['Unlimited links', 'Advanced analytics', 'Priority support', 'Custom domain'],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and agencies',
      features: ['Everything in Pro', 'Team collaboration', 'API access', 'Dedicated support'],
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="pricing-title">Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">
          Choose the plan that works best for you. No hidden fees.
        </p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                {plan.period && <span className="period">{plan.period}</span>}
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
