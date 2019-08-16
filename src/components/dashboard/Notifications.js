import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { makeStyles } from '@material-ui/core/styles';

import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '20px',
    backgroundColor: '#cccccc'
  },
  cardInnerJoin: {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#CB2D6F'
  },
  cardInnerPost: {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#14A098'
  }
});

const Notifications = ({ notifications }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title='Notifications' />
      <ul className='notifications'>
        {notifications &&
          notifications.map((notification, index) => {
            return (
              <Grow in {...{ timeout: 1000 * index }} key={notification.id}>
                <Card
                  className={
                    notification.content === 'Joined the party'
                      ? classes.cardInnerJoin
                      : classes.cardInnerPost
                  }
                >
                  <span className='white-text'> {notification.user} </span>
                  <span className='white-text'>{notification.content}</span>
                  <div className='white-text note-date'>
                    {moment(notification.time.toDate()).fromNow()}
                  </div>
                </Card>
              </Grow>
            );
          })}
      </ul>
    </Card>
  );
};

export default Notifications;
