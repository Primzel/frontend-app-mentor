import {Button, DataTable} from "@openedx/paragon";

const TableView = (props) => {
    const {data, columns, toggleRole} = props
    return (
        <DataTable
            isSelectable
            columns={columns}
            itemCount={7}
            data={data}
            additionalColumns={[
                {
                    id: 'action',
                    Header: 'Action',
                    // Proptypes disabled as this prop is passed in separately
                    Cell: ({row}) => {

                        return <Button variant="link" onClick={() => {
                            if (toggleRole)
                                toggleRole(row);
                        }}>{row.original.has_mentorship?'Remove Mentorship':'Assign Mentorship'}</Button>
                    },
                }
            ]}
        >
            <DataTable.Table/>
        </DataTable>
    )
}

export default TableView;
