import React from 'react';
import { Image, Grid, GridColumn, List, Item } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';

interface IProps {
  activities: IActivity[];
}

const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList activities={activities} />
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;