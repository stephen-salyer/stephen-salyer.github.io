import Card from '@material-ui/core/Card';
import React from 'react';
import {makeStyles, fade} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SecondaryNavTowerReview from './SecondaryNavTowerReview';
import {Box, Hidden} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ApprovalStatusDraft from './ApprovalStatusDraft';
import ApprovalStatusNoPrograms from './ApprovalStatusNoPrograms';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    padding: '0',
    minHeight: '67vh',
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
      },
    },
  },
}));

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
};

const TowerReview = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="lg" style={{paddingBottom: '24px'}}>
        <SecondaryNavTowerReview />
        <Card>
          <CardContent className={classes.content}>
            <Hidden smDown>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Analytics" {...a11yProps(0)} />
                <Tab label="Programs" {...a11yProps(1)} />
                <Tab label="Price Plan" {...a11yProps(2)} />
              </Tabs>
            </Hidden>
            <Hidden only={['xl', 'lg', 'md']}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
              >
                <Tab label="Analytics" {...a11yProps(0)} />
                <Tab label="Programs" {...a11yProps(1)} />
                <Tab label="Price Plan" {...a11yProps(2)} />
              </Tabs>
            </Hidden>
            <TabPanel value={value} index={0}>
              <Box className={classes.tabPanel}>
                <ApprovalStatusDraft />
              </Box>
              <Pagination
                style={{paddingTop: '16px', marginBottom: '-8px'}}
                count={10}
                color="secondary"
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box className={classes.tabPanel}>
                <ApprovalStatusNoPrograms />
              </Box>
              <Pagination
                style={{paddingTop: '16px', marginBottom: '-8px'}}
                count={1}
                color="secondary"
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box className={classes.tabPanel}>
                <ApprovalStatusDraft />
              </Box>
              <Pagination
                style={{paddingTop: '16px', marginBottom: '-8px'}}
                count={10}
                color="secondary"
              />
            </TabPanel>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default TowerReview;
