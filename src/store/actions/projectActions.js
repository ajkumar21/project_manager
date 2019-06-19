export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to db
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'AJ', //will be taken from Auth details
        authorLastName: 'Kumar',
        authorID: 12345,
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
