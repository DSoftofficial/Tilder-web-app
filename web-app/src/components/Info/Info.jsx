import moment from 'moment';
import React from 'react';
import DigitalClock from '../DigitalClock/DigitalClock';

export default function Info(props) {
    // console.log(import.meta.env.VITE_REACT_APP_VERSION) // **test purposes**
    return (
        <>
            <div id="infowrpr" className={`d-${props.InfoDisplay}`} onClick={props.triggerInfoClose}>
                <div id='info'>
                    <div id="infoClose" className="infoSection" onClick={props.triggerInfoClose}>
                        <i className="fa-solid fa-xmark fa-lg"></i>
                    </div>
                    <div id="infoContent" className="infoSection" align="center">
                        <h5>Info</h5>
                        <hr className="dropdowncontent-hr" />
                        <p>Version: <b> {import.meta.env.VITE_REACT_APP_VERSION}</b></p>
                        <p>Date: <b>{moment().format('MMMM Do YYYY')}</b></p>
                        <p>Time: <DigitalClock /> </p>
                        <p>Licensed under <q><b>MIT</b></q></p>
                        <p>Copyright &copy; {moment().format('YYYY')} DSoft</p>
                        <a href="https://shorturl.at/C9Xnk" target="_blank">
                            <button className="btn-normal">Send Feedback</button>
                        </a>
                        <a className="githubicon" href="https://github.com/DSoftofficial/Tilder-web-app">
                            <p id="contributionp">To learn how you can contribute to Tilder, check out the project on <u >GitHub</u>.</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
