import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/table/table';
import { Button, PageHeader } from 'react-bootstrap';
import { fetchCourses } from '../../actions/course-action';
import './style/courses.css';
import Spinner from '../../components/spinner/spinner';
import { HEADERS_TABLE } from '../../constants/course-constants';

class Courses extends Component {
  componentDidMount () {
    this.props.onFetchCourses();
  }

  render () {
    const containerData = (this.props.isLoading) ? <Spinner />
      : <Table headers={HEADERS_TABLE} data={this.props.courses} useAsKey={'id'} />;

    return (
      <div className='course-container'>
        <PageHeader>
          Courses
        </PageHeader>
        <div>
          <Button bsStyle='primary' href='/addCourse'>Add Course</Button>
        </div>
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
    onFetchCourses: () => dispatch(fetchCourses())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
