import { useSelector } from 'react-redux';

const UserDisplayComponent = () => {
    const userData = useSelector((state) => state);

    return (
        <div>
            <h2>Форма информации</h2>
            <div>
                <p>Name: {userData.name}</p>
                <p>Age: {userData.age}</p>
            </div>
        </div>
    );
};

export default UserDisplayComponent;
