import React from 'react';
import Products from './Products';

/**
 * Projects showcase page.
 * Consolidated with Products into a unified engineering showcase
 * defaulting to the 'projects' view.
 */
const Projects = () => {
  return <Products defaultView="projects" />;
};

export default Projects;
