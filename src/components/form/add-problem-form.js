import React, { Component } from 'react';
import { Button, ControlLabel, FormGroup, FormControl, HelpBlock } from 'react-bootstrap';

import AddTagForm from './add-tag-form';
import AddTextAreaForm from './add-text-area-form';

class AddProblemForm extends Component {
  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FieldGroup
          className='form-control-field'
          type='text'
          label='Name'
          placeholder='Enter name'
          onChange={this.props.handleProblemNameChange} />
        <FieldGroup
          className='form-control-field'
          id='form-control-description'
          componentClass='textarea'
          type='text'
          label='Description'
          placeholder='Enter description'
          onChange={this.props.handleProblemDescriptionChange} />
        <FieldGroup
          className='form-control-field'
          type='text'
          label='Tip'
          placeholder='Enter tip'
          onChange={this.props.handleProblemTipChange} />
        <AddTagForm
          tags={this.props.tags}
          handleTagChange={this.props.handleTagChange}
          handleRemoveTag={this.props.handleRemoveTag}
          handleAddTag={this.props.handleAddTag} />
        <AddTextAreaForm
          label='Tests'
          data={this.props.tests}
          handleTextAreaChange={this.props.handleTestChange}
          handleRemoveComponent={this.props.handleRemoveTest}
          handleAddComponent={this.props.handleAddTest} />
        <Button bsStyle='primary' type='submit' onClick={this.props.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}

function FieldGroup ({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{ label }</ControlLabel>
      <FormControl {...props} />
      { help && <HelpBlock>{help}</HelpBlock> }
    </FormGroup>
  );
}

export default AddProblemForm;
