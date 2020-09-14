import React from 'react';


import logoImg from '../../assets/images/logo512.png';

import './styles.css';


let electron:any;

try{
  electron = window.require('electron');
}catch(e){

}

function handleMin(e:any) {
  e.preventDefault();
  let window = electron.remote.getCurrentWindow();
  window.minimize(); 
}

function handleMax(e:any) {
  e.preventDefault();
  let window = electron.remote.getCurrentWindow();
  if (!window.isMaximized()) {
    window.maximize();          
  } else {
    window.unmaximize();
  }
}


function handleClose(e:any) {
  e.preventDefault();
  electron.remote.getCurrentWindow().close();
}

function handleDev(e:any) {
  e.preventDefault();
  electron.remote.getCurrentWindow().toggleDevTools();
}

function isDev() {
  return electron.remote.process.argv[2] == '--dev';
}

interface WindowTitleProps {
  title?: string;
}

const WindowTitle: React.FC<WindowTitleProps> = (props) => {
  
  return (
      <header>
        <div className="ui-titlebar">
          <div className="ui-titleicon"><img src={logoImg} alt="Logo"/></div>
          <div className="ui-titletext">{props.title}</div>
          {electron && (<div className="ui-titlecontrols">
            {isDev() ? (<button className="ui-btn dev" onClick={handleDev}>
            
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M24 14v-4h-3.23c-.229-1.003-.624-1.94-1.156-2.785l2.286-2.286-2.83-2.829-2.286 2.286c-.845-.532-1.781-.928-2.784-1.156v-3.23h-4v3.23c-1.003.228-1.94.625-2.785 1.157l-2.286-2.286-2.829 2.828 2.287 2.287c-.533.845-.928 1.781-1.157 2.784h-3.23v4h3.23c.229 1.003.624 1.939 1.156 2.784l-2.286 2.287 2.829 2.829 2.286-2.286c.845.531 1.782.928 2.785 1.156v3.23h4v-3.23c1.003-.228 1.939-.624 2.784-1.156l2.286 2.286 2.828-2.829-2.285-2.286c.532-.845.928-1.782 1.156-2.785h3.231zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
            
            </button>):""}
            <button className="ui-btn minimize" onClick={handleMin}>
              <svg x="0px" y="0px" viewBox="0 0 10.2 1"><rect x="0" y="50%" width="10.2" height="1" /></svg>
            </button>
            <button className="ui-btn maximize" onClick={handleMax}>
              <svg viewBox="0 0 10 10"><path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" /></svg>
            </button>
            <button className="ui-btn close" onClick={handleClose}>
              <svg viewBox="0 0 10 10"><polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1" /></svg>
            </button>
          </div>)}
        </div>
      </header>
  );
}

export default WindowTitle;
