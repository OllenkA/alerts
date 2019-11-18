import React from 'react';
import styles from './Button.module.css';


const Button = (props) => {

    return <button className={styles.buttons}
                   style={props.styles}
                   onClick={() => {props.addWindow(props.styles, props.title)}}>
        {props.title}
    </button>


};


export default Button;