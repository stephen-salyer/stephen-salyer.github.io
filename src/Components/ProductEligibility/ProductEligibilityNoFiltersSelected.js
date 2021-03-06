import React from 'react';
import 'typeface-roboto';
import {Typography, Box, makeStyles} from '@material-ui/core';
import {Warning} from '@material-ui/icons';

const useStyles = makeStyles({
  conState: {
    transform: 'scale(2)',
    paddingBottom: 8,
  },
});

const ProductEligibilityNoFiltersSelected = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      style={{height: '50vh'}}
    >
      <Warning className={classes.conState} />
      <Typography variant="h6">No Filters Selected</Typography>
      <Typography variant="body2">
        Please Select Filters To Start Search
      </Typography>
    </Box>
  );
};

export default ProductEligibilityNoFiltersSelected;
