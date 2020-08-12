import React from 'react';

import './styles.css';

import { Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
        <header>
          <div>
            <Link to="/">
              Voltar
            </Link>
          </div>

          <div className="header-content">
            <strong>{props.title}</strong>
             {props.description && <p>{props.description}</p>}

          {props.children}

          </div>
        </header>
  );
}

export default PageHeader;
