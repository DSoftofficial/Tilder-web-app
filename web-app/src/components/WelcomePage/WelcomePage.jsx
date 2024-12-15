import React from 'react'

function welcomePage(props) {
    return (
        <>
            <div className={`welcomePage d-${props.WelcomePageDisplay}`} style={props.DimensionsWelcomePage}>
                <div className="welcomePageSection">
                    <div id="greetings">
                        <h1>Welcome back to Tilder!</h1>
                        <p>Code like a pro!</p>
                    </div>
                    <div id="quick-file-management">
                        <p className="file-options" onClick={props.triggerNewFile}><i className="fa-solid fa-file-circle-plus"></i> New File</p>
                        <p className="file-options"><i className="fa-solid fa-folder-plus"></i> New Folder</p>
                        <p className="file-options form">
                            <i className="fa-solid fa-file-import"></i>
                            <label className="add-photo-btn" id="welcomePage_openFile" htmlFor="myfile">Open File</label>
                            <input type="file" id="myfile" name="myfile" onChange={props.handleFileChange} />
                        </p>
                        <p className="file-options"><i className="fa-regular fa-folder-open"></i> Open Folder</p>
                        <p className="file-options"></p>
                    </div>
                </div>
                <div className="welcomePageSection">
                    <h2>Quick Links</h2>
                    <div id="importantLinks">
                        <a href="https://github.com" className="linkto" target="_blank">
                            <div className="link">
                                <div className="link-icon">
                                    <i className="fa-brands fa-github fa-2xl"></i>
                                </div>
                                <div className="link-content">
                                    <h4>Github</h4>
                                    <p>Host your code!</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.youtube.com" className="linkto" target="_blank">
                            <div className="link">
                                <div className="link-icon">
                                    <i className="fa-brands fa-youtube fa-2xl"></i>
                                </div>
                                <div className="link-content">
                                    <h4>Youtube</h4>
                                    <p>Watch Videos!</p>
                                </div>
                            </div>
                        </a>
                        <a href="" className="linkto" target="_blank">
                            <div className="link">
                                <div className="link-icon">
                                </div>
                                <div className="link-content">
                                    <h4>DSoft</h4>
                                    <p>Explore our other products.</p>
                                </div>
                            </div>
                        </a>
                        <a href="https://stackoverflow.com" className="linkto" target="_blank">
                            <div className="link">
                                <div className="link-icon">
                                    <i className="fa-brands fa-stack-overflow fa-2xl"></i>
                                </div>
                                <div className="link-content">
                                    <h4>Stack Overflow</h4>
                                    <p>Fix your problem!</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default welcomePage