import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/table/table';
import * as courseAction from '../../actions/course-action';
import './style/courses.css';
import Spinner from '../../components/spinner/spinner';
import { TABLE_CONFIG, HEADERS_TABLE_CONFIG } from '../../constants/course-constants';

class Courses extends Component {
  componentDidMount () {
    this.props.onFetchCourses();
  }

  render () {
    const containerData = (this.props.isLoading) ? <Spinner />
      : (<Table
        data={this.props.courses}
        headersConfig={HEADERS_TABLE_CONFIG}
        tableConfig={TABLE_CONFIG} />);

    return (
      <div className='course-container'>
        {containerData}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    courses: state.coursesReducer.courses,
    isLoading: state.coursesReducer.isLoading
  }
);

const mapDispatchToProps = dispatch => (
  {
    onFetchCourses: () => dispatch(courseAction.fetchCourses())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
