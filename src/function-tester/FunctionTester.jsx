import BasicTable from '../basic-table/BasicTable';
import theSimpleExample from '../stories/example-data/the-simple-example';
import ActionButton from '../action-button';


const columns = [
  { field: 'name', headerName: 'Name' },
  { field: 'testFn', headerName: 'Result' },
  {field: 'action', headerName: 'Action'},
  { field: 'points', headerName: 'Points' },
];

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  console.log(fn);
  console.log(input);
  console.log(output);
  console.log(tests);
  return (
    <>
      <h1>FunctionTester</h1>
      <h2>Function</h2>
      <p>{fn.toString()}</p>
      <BasicTable {...{fn, input, output, tests, onFinish}}/>
      <button
        onClick={() =>
          onFinish({
            givenTests: [],
            testResult: { achieved: 100, all: 100 },
            customTests: [],
          })
        }
      >
        OK
      </button>
    </>
  );
}