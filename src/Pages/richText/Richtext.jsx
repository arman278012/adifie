import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
      );
    
      const handleEditorStateChange = (editorState) => {
        setEditorState(editorState);
      };
    
      const convertToHtml = () => {
        const contentState = editorState.getCurrentContent();
        const html = draftToHtml(convertToRaw(contentState));
        console.log(html);
      };
    
      return (
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorStateChange}
          />
          <button onClick={convertToHtml}>
            Convert to HTML
          </button>
        </div>
  );
};

export default RichTextEditor;
