import './termForm.css';
import { useState } from 'react';

const TermForm = () => {
    const [termYear, setTermYear] = useState('');
    const [termType, setTermType] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const term = { termYear, termType };

        const response = await fetch('/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(term)
        });

        console.log('Response:', response);

        const data = await response.json();

        console.log('Data:', data);

        if (!data.ok) {
            setError(data.error);
        }

        if (data.ok) {
            setError(null);
            setTermType('');
            setTermYear('');
            console.log('Term created', data);
        }
        window.location.reload();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Academic Year"
                    id="termInput"
                    value={termYear}
                    onChange={(e) => setTermYear(e.target.value)}
                />

                <select
                    id="semSelect"
                    value={termType}
                    onChange={(e) => setTermType(e.target.value)}
                >
                    <option value="">Select Sem</option>
                    <option value="Even">Even</option>
                    <option value="Odd">Odd</option>
                </select>

                <button type="submit" id="createButton">Create</button>
            </form>

            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default TermForm;
