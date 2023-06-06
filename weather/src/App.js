import './App.css';
import Modal from 'react-modal';

function App() {
    return (
        <>
            <Modal className="modal" isOpen={true}>
                <input type='text' placeholder='enter a country' />
            </Modal>
        </>
    );
}

export default App;
