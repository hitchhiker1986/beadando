//import theSimpleExample from '../stories/example-data/the-simple-example';
import theComplexExample from '../stories/example-data/the-complex-example';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ActionButton from '../action-button';
import { useState } from 'react';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import Button from '@mui/material/Button';


function createData(name, result, action, points) {
  return { name, result, action, points };
}

function handleClick(event) {
  console.log(event);
}

function onClick(row) {
  console.log(row)
  const result = row.testFn;
  console.log(result)
  return result ? 1 : 2;
}

function BasicTableRow(row) {

  const [result, setResult] = useState(0);

  let Cell = <TableCell>0</TableCell>;

  
  if (result === 1 ) {
    Cell = <TableCell>1</TableCell>
  }
  if (result === 2 ) {
    Cell = <TableCell>2</TableCell>
  }
  

  return (
    <TableRow
    key={row.name}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>{row.name}</TableCell>
      {Cell}
      <TableCell >
        <ActionButton handleClick={() => setResult(onClick(row))}>

        </ActionButton>
        {/*<Button variant='contained' sx={{borderRadius: "50%", width: 50, height: 50, minWidth: 0}} onClick={() => setResult(onClick(row))}>
            <PlayCircleFilledOutlinedIcon sx={{color: "#fff"}} />
  </Button>*/}
      </TableCell>
      <TableCell >{row.points}</TableCell>
    </TableRow>
  )
}

export default function BasicTable({ fn, input, output, tests, onFinish }) {
  return (
    <TableContainer sx={{ width: 400 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Result</TableCell>
            <TableCell >Action</TableCell>
            <TableCell >Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tests.map((row, idx) => (
            <BasicTableRow {...row} key={idx} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}