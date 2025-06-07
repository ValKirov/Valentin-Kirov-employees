import React from 'react';
import { useParsedCsv } from './hooks/useParsedCsv';
import { useEmployeeCollaboration } from './hooks/useEmployeeCollaboration';
import ResultTable from './components/ResultTable';
import './App.css';

const App: React.FC = () => {
    const { data, handleFileChange } = useParsedCsv();
    const { mostHardworkingCombo } = useEmployeeCollaboration(data);

    return (
        <div className="wrapper">
            <h1>Upload CSV</h1>
            <input
                className="file"
                id="file"
                type="file"
                accept=".csv"
                onChange={handleFileChange}
            />
            <label className="custom-input" htmlFor="file">Select file</label>

            <div>
                {!mostHardworkingCombo ? (
                    <p>No users to show.</p>
                ) : (
                    <ResultTable result={mostHardworkingCombo} />
                )}
            </div>
        </div>
    );
};

export default App;
