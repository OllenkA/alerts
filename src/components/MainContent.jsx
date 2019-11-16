import React from 'react';
import './../App.css';
import {connect} from "react-redux";
import {showWindow} from "../redux/reducer";


const MainContent = (props) => {
    let addWindow = (styles, title) => {
        return props.showWindow(styles, title)
    };

    return <main className="container">
        <div className='main'>
            {props.alerts.map((al, i) =>
                (<button key={i} className='buttons' style={al.styles}
                         onClick={() => {addWindow(al.styles, al.title)}}>
                    {al.title}
                </button>))}
        </div>
        <p> Hi, my dear friend!!!</p>
        <div className='popUpContainer'>
            {props.popUpAlerts.length >= 1 ?
                props.popUpAlerts.map((pop, i) => {
                    return <div key={i} className='pop' style={pop.styles}>
                        {pop.title}
                    </div>})
                :null}
        </div>

    </main>
};

const mapStateToProps = (state) => ({
    alerts: state.main.alerts,
    popUpAlerts: state.main.popUpAlerts,
});

export default connect(mapStateToProps, {showWindow})(MainContent);