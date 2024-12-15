import React, { useState } from 'react'

export default function DigitalClock() {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    setInterval(updateTime, 1000);
    return (
        <>
            <b style={{display: 'inline'}}>{currentTime}</b>
        </>
    )
}
