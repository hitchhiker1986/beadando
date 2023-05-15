import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import BasicTableRow from '../basic-table-row/BasicTableRow';

export default function BasicTable({ fn, tests }) {
  const [results, setResults] = useState(tests.map(() => 0));

  const getResult = (row, fn) => row.testFn(fn) ? 1 : 2;

  const runTest = (row, idx) => {
    setResults(results.map((result, i) => i === idx ? getResult(row, fn) : result));
  };

  const runAllTests = () => {
    setResults(tests.map((row) => getResult(row, fn)));
  };

  const getTotalPoints = () => {
    return tests.reduce((acc, curr, index) => {
      let currentPoints = 0;

      if (results[index] === 1) {
        currentPoints = curr.points
      }

      return acc += currentPoints;
    }, 0);
  };

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
            <BasicTableRow
              key={idx}
              {...{row}}
              resultParam={results[idx]}
              onAction={() => runTest(row, idx)}
            ></BasicTableRow>
          ))}
          <TableRow>
            <TableCell colSpan={3} align="right">
              <Button variant="contained" onClick={runAllTests}>Run all</Button>
            </TableCell>
            <TableCell>Sum:{getTotalPoints()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
