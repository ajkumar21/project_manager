import React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 400,
    margin: 'auto',
    marginTop: '20px'
  }
});

const Notifications = ({ notifications }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Notifications</span>
          <ul className='notifications'>
            {notifications &&
              notifications.map(notification => {
                return (
                  <li key={notification.id}>
                    <span className='pink-text'> {notification.user} </span>
                    <span>{notification.content}</span>
                    <div className='grey-text note-date'>
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                    <br />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default Notifications;
