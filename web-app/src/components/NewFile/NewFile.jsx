import React from 'react'

export default function NewFile(props) {
    return (
        <>
            <div id="newfilewrapper">
                <div className={`d-${props.NewFileVisibility}`} id='newFile'>
                    <h5>New File</h5>

                </div>
            </div>
        </>
    )
}
