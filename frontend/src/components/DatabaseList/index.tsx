import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Accordion, Icon, Loader, List } from 'semantic-ui-react'
import { Database, IAppState } from '../../reducers';
import { getDatabaseRoutine, getDatabasesRoutine, getTableRoutine } from '../../sagas/routines';

interface IDatabaseListState {
  activeIndex: number;
}
 
class DatabaseList extends React.Component<ListProps, IDatabaseListState> {
  constructor(props:any) {
    super(props);
    this.state = { activeIndex: -1};
  }
    

  handleClick = (e: any, titleProps: any) => {
    const { index, children } = titleProps
    const { activeIndex } = this.state

    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })

    this.props.getCurrentDB(children[1]);
  }

  componentDidMount() {
    this.props.getDbs();
  }

  componentDidUpdate(prevProps: ListProps) {
    if (prevProps.dbs !== this.props.dbs) {
      // this.setState({ dbs: this.props.dbs? this.props.dbs: []})
    }
  }

  handleTableClick = (e: any, tableName: string) => {
    this.props.getCurrentTable(tableName);
  }

  render() {
    const { activeIndex } = this.state
    return (
      <>
      { this.props.loading?
              <Loader active inline='centered'/>:
          <Accordion>
          {this.props.dbs?.map( (db,i) => {
              return (
                <>
                <Accordion.Title
              active={activeIndex === i}
              index={i}
              onClick={this.handleClick}
              >
              <Icon name='dropdown' />
              {db.name}
              </Accordion.Title>
              {this.props.loading?
              <Loader active inline='centered'>Loading</Loader>
              :
              <Accordion.Content active={activeIndex === i}>
              <List>
                {this.props.currentDB?.tables?.map((table, i) => {
                  return (
                    <List.Item as="a" key={i} onClick={(e) => this.handleTableClick(e, table.name)}>
                      <Icon name='table' />
                        <List.Content>
                          {table.name}
                        </List.Content>
                    </List.Item>
                  )
                })}
              </List>
              </Accordion.Content>
          }
              </>
              );
          })}
        </Accordion>
      }
      </>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
    loading: state.database.isLoading,
    dbs: state.database.dbs,
    currentDB: state.database.currentDB
});

const mapDispatchToProps = {
  getDbs: getDatabasesRoutine,
  getCurrentDB: getDatabaseRoutine,
  getCurrentTable: getTableRoutine
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ListProps = ConnectedProps<typeof connector>;
export default connector(DatabaseList);