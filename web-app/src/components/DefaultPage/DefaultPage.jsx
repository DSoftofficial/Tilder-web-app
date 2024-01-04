import React from 'react'

export default function DefaultPage(props) {
    return (
        <>
            <div id="defaultPage" className={`d-${props.DefaultPageDisplay}`}>
                <div className="defaultPageSection">
                    <img src="/Tilder_icon.png" alt="" />
                </div>
                <div className="defaultPageSection">
                    <div className="shortcutkeys">
                        <div className="shortcutkeysSection">
                            <span className="shortcutkeys">New File</span><br />
                            <span className="shortcutkeys">New Folder</span><br />
                            <span className="shortcutkeys">Open File</span><br />
                            <span className="shortcutkeys">Open Folder</span><br />
                            <span className="shortcutkeys">Toggle Primary SideBar</span>
                        </div>
                        <div className="shortcutkeysSection">
                            <span><kbd>Ctrl</kbd> + <kbd>N</kbd><br /></span>
                            <span><kbd>Ctrl</kbd> + <kbd>N</kbd><br /></span>
                            <span><kbd>Ctrl</kbd> + <kbd>N</kbd><br /></span>
                            <span><kbd>Ctrl</kbd> + <kbd>N</kbd><br /></span>
                            <span><kbd>Ctrl</kbd> + <kbd>N</kbd><br /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
