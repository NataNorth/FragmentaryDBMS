import React from 'react';
import { Table, TableBody, TableRow, TableHead, TableSortLabel, TableCell } from '@material-ui/core';
import { Loader, Tab } from 'semantic-ui-react';
import { IAppState } from '../../reducers';
import { getTableRoutine, sortTableRoutine } from '../../sagas/routines';
import { connect, ConnectedProps } from 'react-redux';
import UIContainer from '../UIContainer'
import styles from './styles.module.scss';

const TableItem: React.FC<TableProps> = ({loading, currentTable, sortTable}) => {

    const handleSortClick = (e: any, columnName: any) => {
        sortTable(columnName);
    }

    return (
        <>
        {loading?<Loader active inline='centered'>Loading</Loader>:
        <UIContainer visible={currentTable !== undefined}>
            <Table>
            <TableHead>
                <TableRow>
                    {currentTable?.columns.map(column => {
                        return (
                            <TableCell classes={{root: styles.tableStyle}}>
                                <TableSortLabel active onClick={(e) => handleSortClick(e, column.name)}>
                                    {column.name}</TableSortLabel>
                            </TableCell>
                        );
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {currentTable?.rows.map(row => {
                        return (
                            <TableRow>
                                {row.cells.map(cell => {
                                    return (
                                    <TableCell classes={{root: styles.tableStyle}}>
                                        {cell}</TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                })}
            </TableBody>
        </Table>
        </UIContainer>
        }
        </>
    );
};

const mapStateToProps = (state: IAppState) => ({
    loading: state.database.isLoading,
    currentTable: state.database.currentTable
});

const mapDispatchToProps = {
  sortTable: sortTableRoutine
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type TableProps = ConnectedProps<typeof connector>;
export default connector(TableItem);