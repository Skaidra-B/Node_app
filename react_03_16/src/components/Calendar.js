import React, {useRef, useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import ModalComp from "./ModalComp";
import axios from "axios"
import moment from "moment"
import http from "../plugins/http";

export default function({id}) {

    const [modalOpen, setModalOpen] = useState(false)
    const calendarRef = useRef(null)
    const [events, setEvents] = useState([])

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate()
        })
    }

    // async function handleEventAdd(event) {
    //     const dates = {
    //         startDate: moment(event.start).toISOString(),
    //         endDate: moment(event.end).toISOString(),
    //         apartmentId: id
    //     }
    //     const response = await http.post(dates, "/makeReservation")
    //     console.log(response)
    // }


    async function handleEventAdd(data) {
        await axios.post("/makeReservation", data.event)
        console.log(data.event)
    }
    async function handleDatesSet(data) {
        const response = await axios.get("/getDates"+moment(data.start).toISOString()+"&end="+moment(data.end).toISOString())
        setEvents(response.data)
        console.log(response.data)
    }

    return (
        <section>
            <button onClick={() => setModalOpen(true)}>Choose Dates</button>
            {/*<button onClick={handleEventAdd}>Reserve</button> // mano pridetas*/}
            <div style={{position: "relative", zIndex: 0}}>
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    eventAdd={event => handleEventAdd(event)}
                    dateSet={date => handleDatesSet(date)}
                />
            </div>
            <ModalComp isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)}/>
        </section>
    )
}