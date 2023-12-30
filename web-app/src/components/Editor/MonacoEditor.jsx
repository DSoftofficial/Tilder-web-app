import React from 'react'
import { Editor } from '@monaco-editor/react';

function MonacoEditor(props) {
    return (
        <>
            <div id="editorwrapper">
                <Editor
                    theme='vs-dark'
                    defaultLanguage='python'
                    options={{ minimap: { enabled: true }, wordWrapColumn: 82 }}
                    path='fileName'
                />
            </div>
        </>
    )
}

export default MonacoEditor;
