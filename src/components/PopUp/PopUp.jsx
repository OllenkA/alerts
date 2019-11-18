import React from 'react';
import styles from './PopUp.module.css';


const PopUp = (props) => {
    debugger

    return <div className={styles.pop} style={props.styles}>
                 {props.title}
            </div>
};

export default PopUp;