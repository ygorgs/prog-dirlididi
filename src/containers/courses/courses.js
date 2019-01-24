import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/table/table';
import * as courseAction from '../../actions/course-action';
import './style/courses.css';
import Spinner from '../../components/spinner/spinner';
import { HEADERS_TABLE } from '../../constants/course-constants';

class Courses extends Component {
  componentDidMount () {
    this.props.onFetchCourses();
  }

  render () {
    // TODO It's necessary identify the user logged to se if he is a course member
    const dataValues = this.props.courses.map(course => {
      course.members = course.members.length;
      return course;
    });
    const containerData = (this.props.isLoading) ? <Spinner />
      : <Table headers={HEADERS_TABLE} data={dataValues} />;

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
