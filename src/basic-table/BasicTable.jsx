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
import Button from '@mui/material/Button';

function createData(name, result, action, points) {
  return { name, result, action, points };
}

function handleClick(event) {
  console.log(event);
  
}

function getResult(row, fn) {
  const result = row.testFn(fn);
  return result ? 1 : 2;

}

{/*function BasicTableRow({row, fn}) {

  const [result, setResult] = useState(0);

  let Cell = <TableCell>0</TableCell>;

  
  if (result === 1 ) {
    Cell = <TableCell>1</TableCell>
  }
  if (result === 2 ) {
    Cell = <TableCell>2</TableCell>
  }

  

  return (
    <>
      <TableRow
      key={row.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{row.name}</TableCell>
        {Cell}
        <TableCell >
          <ActionButton handleClick={() => setResult(getResult(row, fn))} />
        </TableCell>
        <TableCell >{row.points}</TableCell>
      </TableRow>
    </>

  )
}*/}

function runAllTests(tests, fn) {
  tests.forEach(row => {
    setResult(getResult(row, fn))});
}

export default function BasicTable({ fn, input, output, tests, onFinish }) {


  const [result, setResult] = useState(Array.from({length: tests.length}, () => 0));


  const [idx, setIdx] = useState(0);
  let Cell = <TableCell>0</TableCell>;

  console.log(result);
  
  if (result[idx] === 1 ) {
    Cell = <TableCell>1</TableCell>
  }

  if (result[idx] === 2 ) {
    Cell = <TableCell>2</TableCell>
  }

  function valami(row, fn, idx) {
    setIdx(idx);
    
    setResult(getResult(row, fn));
    
  }
  
  return (
    <TableContainer sx={{ width: 400 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>Action</TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tests.map((row, idx) => (
            <TableRow
            key={idx}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{result[idx]}</TableCell>
              <TableCell >
                <ActionButton handleClick={() => valami(row, fn, idx)} />
              </TableCell>
              <TableCell >{row.points}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} align="right"><Button onClick={() => runAllTests(tests, fn)}></Button></TableCell>
            <TableCell>Points</TableCell>
          </TableRow>
        </TableBody>

      </Table>
    </TableContainer>
  );
}