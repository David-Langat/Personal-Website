import React from 'react';
import { FaLinkedinIn, FaGithub, FaKaggle } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      <a href="https://www.linkedin.com/in/david-langat-data-science" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
        <FaLinkedinIn size={24} />
      </a>
      <a href="https://github.com/David-Langat" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
        <FaGithub size={24} />
      </a>
      <a href="https://www.kaggle.com/davidlangatkirui" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-300">
        <FaKaggle size={24} />
      </a>
    </div>
  );
}

export default React.memo(SocialLinks);
