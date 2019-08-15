import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'; //date display manipulation - check docs for functions

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: '20px'
  },

  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard({ project }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {project.title}
        </Typography>

        <Typography className={classes.pos} color='textSecondary'>
          Posted By {project.authorFirstName + ' ' + project.authorLastName}
        </Typography>
        <Typography variant='body2' component='p'>
          {moment(project.createdAt.toDate()).calendar()}
        </Typography>
      </CardContent>
    </Card>
  );
}
