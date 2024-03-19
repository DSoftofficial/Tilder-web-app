import React from 'react'
import { Editor } from '@monaco-editor/react';

function MonacoEditor(props) {
    // console.log(props.code) // ** test purposes **
    let options = {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
        minimap: {enabled: true},
        wordWrapColumn: 82 
    };
    return (
        <>
            <div id="editor-wrapper" style={props.monacoEditorStyle} className={`d-${props.MonacoEditorDisplay}`}>
                <Editor
                    theme='vs-dark'
                    defaultLanguage='python'
                    options={options}
                    path='fileName'
                    language={props.language}
                    value={props.code}
                />
            </div>
        </>
    )
}

export default MonacoEditor;