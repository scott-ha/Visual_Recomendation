import React, { Component } from 'react';
import Developer from './components/developer';
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

// CSS using withStyles

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const developer = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '하늘',
    'birthday': '920927',
    'gender': '남자',
    'job': '대학원생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '나동빈',
    'birthday': '960508',
    'gender': '남자',
    'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이순신',
    'birthday': '961127',
    'gender': '남자',
    'job': '디자이너'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      // 반복하여 출력할 때 map을 통하여 수행하고 이때 key라는 이름의 props를 사용해야 한다.
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developer.map(c => {
              return <Developer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}


export default withStyles(styles)(App);
