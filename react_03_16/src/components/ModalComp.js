import React, {useState} from 'react';
import Modal from "react-modal"
import Datetime from "react-datetime"

export default function ({isOpen, onClose, onEventAdded, id}) {

    const [start, setStart] = useState(new Date())
    const [end, setEnd] = useState(new Date())

    const onSubmit = (event) => {
        event.preventDefault()
        onEventAdded({
            start, end
        })
        onClose()
        console.log(start, end)
    }


    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <div className="d-flex">
                    <div>
                        <label>Start date</label>
                        <Datetime value={start} onChange={date => setStart(date)}/>
                    </div>
                    <div>
                        <label>End date</label>
                        <Datetime value={end} onChange={date => setEnd(date)}/>
                    </div>
                </div>
            </form>
            <button onClick={onSubmit}>Book dates</button>
        </Modal>
    )
}