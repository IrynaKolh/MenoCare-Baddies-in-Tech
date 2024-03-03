import React from 'react';
import { IconBrandGithub } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="https://github.com/IrynaKolh/MonoCare-Baddies-in-Tech" target="_blank">
        <IconBrandGithub size={26} strokeWidth={1.5} color="#6b7280" />
      </a>
      <p>© 2024</p>
    </footer>
  );
};

export default Footer;
