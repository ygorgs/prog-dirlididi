import React, { Component } from 'react';
import { Button, ControlLabel, FormGroup } from 'react-bootstrap';

import './form.css';

class AddTagForm extends Component {
  render () {
    return (
      <FormGroup>
        <ControlLabel>Tags</ControlLabel>
        { this.props.tags.map((tag, index) => (
          <div className='input-group mb-3' key={tag}>
            <input
              id='tag-name'
              type='text'
              className='form-control'
              placeholder={`Tag #${index + 1} name`}
              value={tag}
              onChange={this.props.handleTagChange(index)} />
            <Button
              id='remove-tag-btn'
              className='btn btn-outline-secondary input-group-append'
              onClick={this.props.handleRemoveTag(index)}
            > {'-'} </Button>
          </div>
        )) }
        <div>
          <Button
            id='add-tag-btn'
            onClick={this.props.handleAddTag}
          > {'+'} </Button>
        </div>
      </FormGroup>
    );
  }
}

export default AddTagForm;
