import { useParams } from "react-router-dom";
import { FunctionTester } from "../function-tester/FunctionTester";
import tests from "../function-tester/tests"

export default function Tester() {
    const { idx } = useParams()
    const test = tests[idx]

    return (
        <FunctionTester
            fn={test.fn}
            input={test.input}
            output={test.output}
            tests={test.tests}
        >
        </FunctionTester>
    )
}