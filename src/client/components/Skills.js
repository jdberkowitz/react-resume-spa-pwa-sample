import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Title from './TableTitle';


let counter = 0;
function createData(name, experiance, type) {
  counter += 1;
  return { id: counter, name, experiance, type };
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Skill' },
  { id: 'experiance', numeric: false, disablePadding: true, label: 'Experiance' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' }
];

class SkillsHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {  order, orderBy, classes } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                    className="tableTitle"
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

SkillsHead.propTypes = {
  
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let SkillsToolbar = props => {
  const { classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root)}>
      <div className={classes.title}>
          <Typography variant="title" id="tableTitle">
            Skills
          </Typography>
      </div>
      
      <div className={classes.actions}>
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
      </div>
    </Toolbar>
  );
};

SkillsToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

SkillsToolbar = withStyles(toolbarStyles)(SkillsToolbar);

const styles = theme => ({
  root: {
    minWidth: 300,
    marginTop: theme.spacing.unit * 3,
  },
  titleBlock: {
    marginBottom: 20,
  },
  table: {
    minWidth: 300,
  },
  firstRow: {
    paddingLeft: 10
  },
  tableWrapper: {
    overflowX: 'auto',

    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  pageNav: {
    padding: 5
  }
});

class Skills extends Component {
  state = {
    order: 'asc',
    orderBy: 'experiance',
    selected: [],
    data: [
      createData('JavaScript', 'Intermediate', 'Language'),
      createData('PHP', 'Intermediate', 'Language'),
      createData('React', 'Intermediate', 'Library'),
      createData('Wordpress', 'Advanced', 'Framework'),
      createData('Drupal', 'Intermediate', 'Framework'),
      createData('Angular 6', 'Intermediate', 'Framework'),
      createData('JQuery', 'Advanced', 'Library'),
      createData('Node', 'Intermediate', 'Library'),
      createData('CSS', 'Advanced', 'Language'),
      createData('HTML5', 'Intermediate', 'Language'),
      createData('SASS', 'Intermediate', 'Library'),
      createData('LESS', 'Beginner', 'Library'),
      createData('Magento', 'Intermediate', 'Software'),
      createData('Bootstrap', 'Advanced', 'Library'),
      createData('Git', 'Intermediate', 'Software'),
      createData('SVN', 'Intermediate', 'Software'),
      createData('G-Suite', 'Advanced', 'Software'),
      createData('Google Apps', 'Advanced', 'Software'),
      createData('Excel', 'Advanced', 'Software'),
      createData('Word', 'Advanced', 'Software'),
      createData('PowerPoint', 'Advanced', 'Software'),
      createData('Vue', 'Beginner', 'LIbrary'),
      createData('SQL', 'Intermediate', 'Language'),
      createData('NoSQL', 'Intermediate', 'Language'),
      createData('MongoDB', 'Intermediate', 'Language'),
      createData('Java', 'Beginner', 'Language'),
      createData('Power BI', 'Intermediate', 'Software'),
      createData('SAP', 'Intermediate', 'Software'),
    ],
    page: 0,
    rowsPerPage: 10,
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <Grid container spacing={16}>
          <Grid item key={1} sm={12} md={12} lg={6}>        
            <Title className={classes.titleBlock}/>
          </Grid>
          <Grid item key={2} sm={12} md={12} lg={6}>  
            
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
                <SkillsHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                />
                <TableBody>
                  {stableSort(data, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(n => {
                      
                      return (
                        <TableRow>
                          <TableCell component="th" scope="row" padding="none" className={classes.firstRow}>
                            {n.name}
                          </TableCell>
                          <TableCell >{n.experiance}</TableCell>
                          <TableCell >{n.type}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              component="div"
              className={classes.pageNav}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Grid>
        </Grid>
    );
  }
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);
