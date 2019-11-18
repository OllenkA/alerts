import React from 'react';
import styles from './MainContent.module.css';
import {connect} from "react-redux";
import {showWindow} from "../../redux/reducer";
import Button from "../Buttons/Button";
import PopUp from "../PopUp/PopUp";
import DescriptionTask from "../DescriptionTask/DescriptionTask";


const MainContent = (props) => {
    let addWindow = (styles, title) => {
        return props.showWindow(styles, title)
    };

    let alerts = props.alerts.map((al, i) => <Button key={i} styles={al.styles}
                                                     title={al.title}
                                                     addWindow={addWindow}/>);

    let popUp = props.popUpAlerts.map((pop, i) => <PopUp key={i} styles={pop.styles}
                                                         title={pop.title}/>
    );

    return <article className={styles.container}>
        <div className={styles.main}>
            {alerts}
        </div>
        <DescriptionTask/>
        <div className={styles.popUpContainer}>
            {popUp}
        </div>
    </article>
};

const mapStateToProps = (state) => ({
    alerts: state.main.alerts,
    popUpAlerts: state.main.popUpAlerts,
});

export default connect(mapStateToProps, {showWindow})(MainContent);