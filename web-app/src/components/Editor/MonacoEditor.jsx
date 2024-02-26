import React from 'react'
import { Editor } from '@monaco-editor/react';

function MonacoEditor(props) {
    // console.log(props.code) // ** test purposes **
    return (
        <>
            <div id="editor-wrapper" style={props.monacoEditorStyle} className={`d-${props.MonacoEditorDisplay}`}>
                <Editor
                    theme='vs-dark'
                    defaultLanguage='python'
                    options={{ minimap: { enabled: true }, wordWrapColumn: 82 }}
                    path='fileName'
                    language={props.language}
                    value={props.code}
                />
            </div>
        </>
    )
}

export default MonacoEditor;