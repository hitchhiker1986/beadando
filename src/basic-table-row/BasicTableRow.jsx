import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import ActionButton from '../action-button';

export default function BasicTableRow({row, resultParam, onAction}) {
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(resultParam);
  }, [resultParam]);

  return (
    <>
      <TableRow
        key={row.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{row.name}</TableCell>
        <TableCell>{result}</TableCell>
        <TableCell><ActionButton handleClick={onAction} /></TableCell>
        <TableCell>{row.points}</TableCell>
      </TableRow>
    </>
    );
  }
