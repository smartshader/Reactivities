import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import ActivityList from './ActivityList';

const ActivityDashboard: React.FC = () => {
  
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList />
      </GridColumn>
      
      <GridColumn width={6}>
        <h2>Activity filters</h2>
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;