export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    console.log('here');

    //get user details from state
    const profile = getState().firebase.profile;
    const authorID = getState().firebase.auth.uid;
    console.log(project);

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName, //will be taken from Auth details
        authorLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      })
      .then(res => {
        dispatch({ type: 'CREATE_PROJECT', project: project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
