import React, { Component } from 'react';
import {connect} from "react-redux";
import * as problemAction from "../../actions/problem";
import Table from '../../components/utils/table'
import './style/problems.css';

class Problems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: []
    }
  }

  render() {
    const headers = {
      name: 'Problem',
      description: 'Description',
      key: 'Key',
      created: 'Created',
      solved: 'Solved'
    };

    if (this.props.isLoading) {
      return (<div className="spinner"/>)
    }

    console.log(this.props.problems);
    return(
      <div className='problems-container'>
        <Table headers={headers} data={this.state.problems}/>
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
