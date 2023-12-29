import { useDispatch } from 'react-redux';
import { updateUser } from '../reducer.js'; // Исправьте расширение файла
import {useState} from "react";

const UserFormComponent = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ name, age }));
        console.log('Данные обновлены:', { name, age });
    };

    return (
        <div>
            <h2>Форма зополнении</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text"
                       placeholder="Имя"
                       value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number"
                       placeholder="Возраст"
                       value={age} onChange={(e) => setAge(e.target.value)} />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default UserFormComponent;