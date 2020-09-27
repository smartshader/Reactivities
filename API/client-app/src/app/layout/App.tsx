import React, { useEffect, useState, Fragment, SyntheticEvent, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../stores/activityStore';
import { observer } from 'mobx-react-lite';

const App = () => {
  
  const activityStore = useContext(ActivityStore);
  
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState('')
  
  const handleDeleteActivity = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name);
    agent.Activities.delete(id).then(() => {
      setActivities([...activities.filter(a => a.id !== id)]);
    }).then(() => setSubmitting(false));
  };
  
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);
  
  if (activityStore.loadingInitial) return <LoadingComponent inverted={true} content='Loading activities...' />

  return (
    <Fragment>
      
      <NavBar />
      
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard
          activities={activityStore.activities}
          deleteActivity={handleDeleteActivity}
          target={target}
        />
      </Container>
      
    </Fragment>
  );
}

export default observer(App);
