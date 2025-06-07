import type { Result } from "../types/globals";

const ResultTable = ({ result }: {result: Result}) => {
    return (
        <div className='result'>
            <h2>The following users have worked the longest on the same project</h2>
            <table>
                <thead>
                    <tr>
                        <th>First employee ID</th>
                        <th>Second employee ID</th>
                        <th>Number of days</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{result.FirstEmpId}</td>
                        <td>{result.SecondEmpId}</td>
                        <td>{result.days}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable;