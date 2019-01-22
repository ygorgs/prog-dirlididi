import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './table.css';

const options = {
  onRowClick: function (row) {
    // Add modal here
    console.log('clicked');
  }
};

class Table extends Component {
  constructor (props) {
    super(props);

    this.state = {
      headers: props.headers,
      data: props.data
    };
  }

  render () {
    const headers = Object.keys(this.state.headers).map((key) => {
      return (
        <TableHeaderColumn dataField={key}>
          { this.state.headers[key] }
        </TableHeaderColumn>
      );
    });

    return (
      <div>
        <BootstrapTable
          data={this.state.data}
          options={options}
          search
          keyField='dirlididi-table'
          pagination
          hover
        >
          { headers }
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
