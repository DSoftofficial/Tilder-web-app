import moment from 'moment'
import React from 'react'

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
                        <hr className="dropdowncontent-hr"/>
                        <p>Version: <b> {import.meta.env.VITE_REACT_APP_VERSION}</b></p>
                        <p>Date: <b>{moment().format('MMMM Do YYYY')}</b></p>
                        <p>Licensed under <q><b>MIT</b></q></p>
                        <p>Copyright &copy; {moment().format('YYYY')} DSoft</p>
                        <button className="btn-normal">Send Feedback</button>
                    </div>
                </div>
            </div>
        </>
    )
}
