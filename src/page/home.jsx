import { keyframes } from "styled-components"
import tests from "../function-tester/tests"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <ul>
            {
                tests.map((test, idx) => <li key={idx}> <Link to={`tester/${idx}`}>{test.fn.toString()}</Link> </li>)
            }
        </ul>

    )
}

