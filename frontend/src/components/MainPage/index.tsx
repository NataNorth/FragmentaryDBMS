import React from 'react';
import styles from './styles.module.scss';
import { Button, Divider, Loader } from 'semantic-ui-react';
import { history } from './../..//history';
import DatabaseList from '../DatabaseList';
import TableItem from '../TableItem';
import { IAppState } from '../../reducers';
import { connect, ConnectedProps } from 'react-redux';

const MainPage: React.FC<MainProps> = ({loading}) => (
    <div className={styles.contentContainer}>
            <div className={styles.listContainer}>
            <DatabaseList/>
            </div>
            <div className={styles.tableContainer}> 
                <TableItem></TableItem>
            </div>
            {/* <div className={styles.buttonContainer}>
                <Button size='huge'
                onClick={() => history.push('/upload')}>Check</Button>
            </div> */}
    </div>
);

const mapStateToProps = (state: IAppState) => ({
    loading: state.database.isLoading
});

const connector = connect(mapStateToProps);
type MainProps = ConnectedProps<typeof connector>;
export default connector(MainPage);