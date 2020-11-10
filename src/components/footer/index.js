import React from 'react';
import './styles.css';
import logoTeluq from '../../img/teluq.png';
import logoUFSc from '../../img/ufsc.png';
function Footer() {
    return (
        <div className="footer-container">
            <img src={logoTeluq} />
            <img src={logoUFSc} />
        </div>
    );
}

export default Footer;