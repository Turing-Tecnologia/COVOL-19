import React ,{useState} from 'react';
import './style.css';

export default function RequestHelp() {
    const [volunteers, setVolunteers] = useState([
        {
            id: 1,
            name: 'Paulo',
            city: 'Afonso Bezerra',
            whatsapp: '(84) 9 9999-9999',
        },
        {
            id: 2,
            name: 'Sérgio',
            city: 'Angicos',
            whatsapp: '(84) 9 8888-8888',
        },
        {
            id: 3,
            name: 'Emmanuel',
            city: 'Afonso Bezerra',
            whatsapp: '(84) 9 8853-2982',
        },
        {
            id: 4,
            name: 'Marta',
            city: 'Assu',
            whatsapp: '(84) 9 5555-5555',
        },
        {
            id: 5,
            name: 'Marcela',
            city: 'Carnaubais',
            whatsapp: '(84) 9 3333-3333',
        },
        {
            id: 6,
            name: 'Marcelo',
            city: 'Pendências',
            whatsapp: '(84) 9 2222-2222',
        },
    ]);
    return (
        <div>
            <section className="formA hideA">
                <h2>Preciso de Ajuda</h2>
                <form action="/" method="POST">
                    <select name="select">
                        {volunteers.map(options => <option key={options} value={options.city}>{options.city}</option>)}
                        
                    </select>
                    <button type="submit">Listar voluntários</button>
                </form>
            </section>
        </div>
    );
}
