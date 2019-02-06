import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './table.css';
import PropTypes from 'prop-types';

const options = {
  onRowClick: function (row) {
    // Add modal here
    console.log('clicked');
  }
};

class Table extends Component {
  render () {
    const tableHeaderList = this.props.headersConfig.map((headerConfig) => {
      return (
        <TableHeaderColumn
          {...headerConfig}
          key={headerConfig.dataField}
          dataAlign='center'>
          { headerConfig.label }
        </TableHeaderColumn>
      );
    });

    return (
      <div>
        <BootstrapTable
          {...this.props.tableConfig}
          data={this.props.data}
          options={options}
        >
          { tableHeaderList }
        </BootstrapTable>
      </div>
    );
  }
}

Table.protoTypes = {
  useAsKey: PropTypes.string.isRequired
};

export default Table;
