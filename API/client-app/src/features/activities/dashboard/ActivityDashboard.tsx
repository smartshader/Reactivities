import React from 'react';
import { Image, Grid, GridColumn, List, Item } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

interface IProps {
  activities: IActivity[];
}

const ActivityDashboard: React.FC<IProps> = ({activities}) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList activities={activities} />
      </GridColumn>
      
      <GridColumn width={6}>
        <ActivityDetails />
        <ActivityForm />
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;