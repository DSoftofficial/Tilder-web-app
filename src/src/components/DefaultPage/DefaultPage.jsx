import React from 'react'

export default function DefaultPage(props) {
    return (
        <>
            <div id="defaultPage" className={`d-${props.DefaultPageDisplay}`} style={props.dimensionsDefaultPage}>
                <div className="defaultPageSection">
                    <img src="/Tilder_icon.png" alt="" />
                </div>
                <div className="defaultPageSection">
                    <div className="shortcutkeys">
                        <div className="shortcutkeysSection">
                            <span className="shortcutkeys">New File</span>
                            <span className="shortcutkeys">New Folder</span>
                            <span className="shortcutkeys">Open File</span>
                            <span className="shortcutkeys">Open Folder</span>
                            <span className="shortcutkeys">Toggle Primary SideBar</span>
                        </div>
                        <div className="shortcutkeysSection">
                            <span className="shortcutkeys"><kbd>Ctrl</kbd> + <kbd>N</kbd></span>
                            <span className="shortcutkeys"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd></span>
                            <span className="shortcutkeys"><kbd>Ctrl</kbd> + <kbd>O</kbd></span>
                            <span className="shortcutkeys"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>O</kbd></span>
                            <span className="shortcutkeys"><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
