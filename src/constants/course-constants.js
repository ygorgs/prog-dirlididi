export const HEADERS_TABLE_CONFIG = [
  { dataField: 'id', isKey: true, label: 'ID', width: '10' },
  { dataField: 'name', label: 'Name', width: '100' },
  { dataField: 'members', label: 'Members', width: '30' },
  { dataField: 'owner', label: 'Owner', width: '30' },
  { dataField: 'data', label: 'Created at', width: '80' },
  { dataField: 'enrolled', label: 'Enrolled', width: '80' },
  { dataField: 'actions', label: 'Actions', width: '80' } // check how we're going to deal with solving
];

export const TABLE_CONFIG = {
  search: true,
  pagination: true,
  hover: true
};
