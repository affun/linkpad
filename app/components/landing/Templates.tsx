import React from 'react';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: 'Personal Portfolio',
      description: 'Showcase your work and projects',
    },
    {
      id: 2,
      name: 'Agency Resources',
      description: 'Organize client resources and tools',
    },
    {
      id: 3,
      name: 'Educational Links',
      description: 'Compile learning materials and courses',
    },
    {
      id: 4,
      name: 'Design Inspiration',
      description: 'Collect and share design references',
    },
  ];

  return (
    <section id="templates" className="templates">
      <div className="templates-container">
        <h2 className="templates-title">Pre-built Templates</h2>
        <p className="templates-subtitle">
          Choose from our collection of professionally designed templates to get started quickly.
        </p>
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-card">
              <div className="template-preview"></div>
              <h3>{template.name}</h3>
              <p>{template.description}</p>
              <button className="btn btn-small">Use Template</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
