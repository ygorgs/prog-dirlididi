import React, { Component } from 'react';
import {connect} from "react-redux";
import * as problemAction from "../../actions/problem";
import Table from '../../components/utils/table'
import './style/problems.css';

class Problems extends Component {
  render() {
    const headers = {
      name: 'Problem',
      description: 'Description',
      key: 'Key',
      date: 'Created',
      solved: 'Solved' // check how we're going to deal with solving
    };

    if (this.props.isLoading) {
      return (<div className="spinner"/>)
    }

    return(
      <div className='problems-container'>
        <Table headers={headers} data={this.props.problems}/>
      </div>
    )
  }

  componentDidMount () {
    this.props.onInitProblems()
  }
}

const mapStateToProps = state => (
  {
    problems: state.problemReducer.problems,
    isLoading: state.problemReducer.isLoading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitProblems: () => dispatch(problemAction.initProblems()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Problems)
