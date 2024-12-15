import React, { useState, useEffect } from 'react';

export default function NewFile(props) {
    return (
        <>
            <div id="newfilewrapper">
                <div className={`d-${props.NewFileVisibility}`} id='newFile'>
                    <h5>New File</h5><br></br>
                    <form>
                        <div className="file_wrapper">
                            <div className="file_wrapper_element">
                                <h6 className="heading_file"><label for="file_name">File Name:</label></h6>
                                <input type="placeholder" name="file_name" id="formFileName_id" />
                            </div>
                            <div className="file_wrapper_element">
                                <h6 className="heading_file"><label for="template_checkbox">Template:</label></h6>
                                <input type="checkbox" name="template" id="template_checkbox" />
                            </div>
                            <div id="file_wrapper_submit_button">
                                <button type="submit" id="create_new_file" onClick={props.CreateNewFile}>Create File</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
