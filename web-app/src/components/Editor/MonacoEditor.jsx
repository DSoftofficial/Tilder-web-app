import React from 'react'
import { Editor } from '@monaco-editor/react';

function MonacoEditor(props) {
    return (
        <>
            <div id="editorwrapper">
                <Editor
                    height="83vh"
                    theme='vs-dark'
                    defaultLanguage='python'
                    options={{ minimap: { enabled: false }, wordWrapColumn: 80 }}
                    path='fileName'
                />
            </div>
        </>
    )
}

export default MonacoEditor;
