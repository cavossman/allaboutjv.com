import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


import './textEditor.css';
class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
    this.props.onChange(this.props.name, draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="text-editor-wrapper"
        editorClassName="text-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}
export default TextEditor;