import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {ArrowBack} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  containerPadding: {
    padding: '112px 24px 32px 24px',
    [theme.breakpoints.down('sm')]: {
      padding: '75px 16px 32px 16px',
    },
  },
  typographyPadding: {
    padding: '8px 0 0 0',
  },
  formControl: {
    minWidth: 120,
  },
  flexPositioning: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'start',
      paddingTop: 16,
    },
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
};

const SecondaryNavProgramPrintable = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.containerPadding}>
      <Grid container direction="row" justify="space-evenly">
        <Grid item xs={12} md={8}>
          <Grid container>
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton
                aria-label="arrow-back"
                color="default"
                href="#/program/:id"
              >
                <ArrowBack />
              </IconButton>
              <Typography>Programs</Typography>
            </Box>
          </Grid>
          <Typography variant="h3" color="primary">
            Program Printable View
          </Typography>
          <Typography className={classes.typographyPadding}>
            An_Extremely Long Program Name 123123123123123 (Draft)
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display="flex"
            justifyContent="flex-end"
            className={classes.flexPositioning}
          >
            <FormControl
              variant="outlined"
              className={classes.formControl}
              margin="dense"
              label="Version"
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Version
              </InputLabel>
              <Select
                style={{height: 37}}
                MenuProps={menuProps}
                defaultValue={30}
                id="demo-simple-select-outlined"
                label="Version"
              >
                <MenuItem value={10}>1.1</MenuItem>
                <MenuItem value={20}>1.2</MenuItem>
                <MenuItem value={30}>1.3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecondaryNavProgramPrintable;
