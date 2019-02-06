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

  ownerHeaderFormatter (cell) {
    return cell.name;
  }

  enrolledHeaderFormatter = () => {
    // verificar se o usuário está inscrito no curso
    return (<div><i className='fa fa-times-circle' style={{ color: '#dc3545' }} /></div>);
  }

  actionsHeaderFormatter = () => {
    // verificar se o usuário está inscrito no curso
    return (<div><a href={'/'} style={{ color: '#28a745' }}>Join</a></div>);
  }

  defineHeaders () {
    return HEADERS_TABLE_CONFIG.map(headerConfig => {
      switch (headerConfig.dataField) {
        case 'owner':
          headerConfig.dataFormat = this.ownerHeaderFormatter;
          break;
        case 'enrolled':
          headerConfig.dataFormat = this.enrolledHeaderFormatter;
          break;
        case 'actions':
          headerConfig.dataFormat = this.actionsHeaderFormatter;
          break;
        default:
      }
      return headerConfig;
    });
  }

  render () {
    this.defineHeaders();
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
