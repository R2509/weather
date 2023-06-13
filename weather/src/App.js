import './App.css';
import Modal from 'react-modal';

function App() {
    return (
        <>
            <Modal className="modal" isOpen={true}>
                <input onClick={ev => {ev.target.parentElement.classList.add('expand')}} onInput={ev => {ev.target.style.width = `${ev.target.value.length}ch`}} type='text' placeholder='Type a place...' />
            </Modal>
        </>
    );
}

export default App;
