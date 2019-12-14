import React, { Fragment, useState } from 'react';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import SnackBar from '../SnackBar/SnackBar';

const Toggle = (props) => {
  const [toggleState, changeToggleState] = useState({
    toggleOn: true,
  });

  const [snackBarState, changeSnackBarState] = useState({
    snackBarOpen: false,
    message: props.snackBarMessage,
  });

  const toggleHandle = () => {
    changeToggleState({
      toggleOn: !toggleState.toggleOn,
    });
    changeSnackBarState({
      ...snackBarState,
      snackBarOpen: !snackBarState.snackBarOpen,
    });
  };

  const cancelButtonHandle = () => {
    changeSnackBarState({
      ...snackBarState,
      snackBarOpen: !snackBarState.snackBarOpen,
    });
  };

  const undoHandle = () => {
    changeSnackBarState({
      ...snackBarState,
      snackBarOpen: !snackBarState.snackBarOpen,
    });
    changeToggleState({
      toggleOn: !toggleState.toggleOn,
    });
  };
  return (
    <Fragment>
      <SnackBar
        snackBarOpen={snackBarState.snackBarOpen}
        cancelButtonHandle={cancelButtonHandle}
        message={toggleState.toggleOn ? 'Flux is on.' : 'Flux is off.'}
        undoHandle={undoHandle}
      />
      <i onClick={toggleHandle} style={{ cursor: 'pointer' }}>
        {toggleState.toggleOn ? (
          <ToggleOnIcon fontSize='large' color='primary' />
        ) : (
          <ToggleOffIcon fontSize='large' />
        )}
      </i>
    </Fragment>
  );
};

export default Toggle;
