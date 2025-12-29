import React from 'react';

import './Button.scss';

const Button = (props) => {
    const {children, onClick, variant, htmlType, className} = props;
    return (
        <button onClick={onClick} className={`button ${variant} ${className}`} type={htmlType}>
            {children}
        </button>
    );
};

export default Button;