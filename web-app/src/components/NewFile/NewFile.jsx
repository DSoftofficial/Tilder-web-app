import React from 'react'

export default function NewFile(props) {
    return (
        <>
            <div id="newfilewrapper">
                <div className={`d-${props.NewFileVisibility}`} id='newFile'>
                    <h5>New File</h5><br></br>
                    <form>
                        <h6>File Name:</h6><input type="placeholder" name="file_name" id="fileName" /><br></br>
                        <h6>Template:</h6><input type="checkbox" name="template" id="template_checkbox" />
                    </form>

                </div>
            </div>
        </>
    )
}
