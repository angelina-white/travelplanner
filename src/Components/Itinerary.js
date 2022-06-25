import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useState } from "react"
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-bootstrap/Modal';

function Itinerary()
{
    const locales = {
        'en-US': enUS,
      }
      
    const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
    })
      
    const events = [
        {
            title: "Big Meeting",
            allDay: false,
            start: new Date(2022,5,25, 13, 30),
            end: new Date(2022, 5, 25, 17, 30),
            isFlight: true
        },
        {
            title: "Vacation",
            start: new Date(2022,6,27),
            end: new Date(2022, 6, 30),
            isTranspo: true
        },
        {
            title: "Conference",
            start: new Date(2022,6,28),
            end: new Date(2022, 6, 28)
        }
    ]

    //color flights
    function eventStyleGetter(event, start, end, isSelected) 
    {
        var backgroundColor = "#FFC0CB"
        var style = {
            backgroundColor: backgroundColor,
            // borderRadius: '0px',
            // opacity: 0.8,
            // color: 'black',
            // border: '0px',
            // display: 'block'
        };
        if (event.isFlight)
        {
            style.backgroundColor = '#ff0000'
        }
        else if (event.isHotel)
        {
            style.backgroundColor = '#FFA500'
        }
        else if (event.isTranspo)
        {
            style.backgroundColor = '#FFFF00'
        }
        else if (event.isFood)
        {
            style.backgroundColor = '#00FF00'
        }
        else if (event.isActivity)
        {
            style.backgroundColor = "#ADD8E6"
        }
        else if (event.isShopping)
        {
            style.backgroundColor = "#0000FF"
        }
        else if (event.isMisc)
        {
            style.backgroundColor = "#6a0dad"
        }

        return {
            style: style
        }
    }
    
    //all events
    const [allEvents, setAllEvents] = useState(events)

    //add flight
    const [newFlight, setNewFlight] = useState({ title: "", start: "", end: "", isFlight: true})
    function handleSubmitFlight()
    {
        setAllEvents([...allEvents, newFlight])
    }

    //add hotel
    const [newHotel, setNewHotel] = useState({ title: "", start: "", end: "", isHotel: true})
    function handleSubmitHotel()
    {
        setAllEvents([...allEvents, newHotel])
    }

    //add transpo
    const [newTranspo, setNewTranspo] = useState({ title: "", start: "", end: "", isTranspo: true})
    function handleSubmitTranspo()
    {
        setAllEvents([...allEvents, newTranspo])
    }

    //add food
    const [newFood, setNewFood] = useState({ title: "", start: "", end: "", isFood: true})
    function handleSubmitFood()
    {
        setAllEvents([...allEvents, newFood])
    }

    //add activity
    const [newActivity, setNewActivity] = useState({ title: "", start: "", end: "", isActivity: true})
    function handleSubmitActivity()
    {
        setAllEvents([...allEvents, newActivity])
    }

    //add shopping
    const [newShopping, setNewShopping] = useState({ title: "", start: "", end: "", isShopping: true})
    function handleSubmitShopping()
    {
        setAllEvents([...allEvents, newShopping])
    }

    //add misc
    const [newMisc, setNewMisc] = useState({ title: "", start: "", end: "", isMisc: true})
    function handleSubmitMisc()
    {
        setAllEvents([...allEvents, newMisc])
    }


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            <h1>Itinerary</h1>

            <button variant="primary" onClick={handleShow}>
                Add Flight
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Flight</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Add Title" value={newFlight.title} onChange={(e) => setNewFlight({...newFlight, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newFlight.start} selected={newFlight.start} onChange={(e) =>    setNewFlight({...newFlight, start: e})} />
                    <DateTimePicker disableClock placeholderText="End Date" value={newFlight.end} selected={newFlight.end} onChange={(e) => setNewFlight({...newFlight, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitFlight }>Submit</button>
                </Modal.Footer>
            </Modal>

            <button variant="primary" onClick={handleShow}>
                Add Hotel
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Add Title" value={newHotel.title} onChange={(e) => setNewHotel({...newHotel, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newHotel.start} selected={newHotel.start} onChange={(e) => setNewHotel({...newHotel, start: e})} />
                    <DateTimePicker disableClock placeholderText="End Date" value={newHotel.end} selected={newHotel.end} onChange={(e) => setNewHotel({...newHotel, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitHotel }>Submit</button>
                </Modal.Footer>
            </Modal>

            <button variant="primary" onClick={handleShow}>
                Add Transportation
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Transportation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input type="text" placeholder="Add Title" value={newTranspo.title} onChange={(e) => setNewTranspo({...newTranspo, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newTranspo.start} selected={newTranspo.start} onChange={(e) => setNewTranspo({...newTranspo, start: e})} />
                    <DateTimePicker disableClock  placeholderText="End Date" value={newTranspo.end} selected={newTranspo.end} onChange={(e) => setNewTranspo({...newTranspo, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitTranspo }>Submit</button>
                </Modal.Footer>
            </Modal>

            <button variant="primary" onClick={handleShow}>
                Add Restaurant
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Restaurant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Add Title" value={newFood.title} onChange={(e) => setNewFood({...newFood, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newFood.start} selected={newFood.start} onChange={(e) => setNewFood({...newFood, start: e})} />
                    <DateTimePicker disableClock placeholderText="End Date" value={newFood.end} selected={newFood.end} onChange={(e) => setNewFood({...newFood, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitFood }>Submit</button>
                </Modal.Footer>
            </Modal>

            <button variant="primary" onClick={handleShow}>
                Add Activity
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input type="text" placeholder="Add Title" value={newActivity.title} onChange={(e) => setNewActivity({...newActivity, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newActivity.start} selected={newActivity.start} onChange={(e) => setNewActivity({...newActivity, start: e})} />
                    <DateTimePicker disableClock placeholderText="End Date" value={newActivity.end} selected={newActivity.end} onChange={(e) => setNewActivity({...newActivity, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitActivity }>Submit</button>
                </Modal.Footer>
            </Modal>

            <button variant="primary" onClick={handleShow}>
                Add Shopping
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Shopping</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Add Title" value={newShopping.title} onChange={(e) => setNewShopping({...newShopping, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newShopping.start} selected={newShopping.start} onChange={(e) => setNewShopping({...newShopping, start: e})} />
                    <DateTimePicker disableClock placeholderText="End Date" value={newShopping.end} selected={newShopping.end} onChange={(e) => setNewShopping({...newShopping, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitShopping }>Submit</button>
                </Modal.Footer>
            </Modal>

            <button variant="primary" onClick={handleShow}>
                Add Misc
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Misc</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" placeholder="Add Title" value={newMisc.title} onChange={(e) => setNewMisc({...newMisc, title: e.target.value})} />
                    <DateTimePicker disableClock placeholderText="Start Date" value={newMisc.start} selected={newMisc.start} onChange={(e) => setNewMisc({...newMisc, start: e})} />
                    <DateTimePicker disableClock placeholderText="End Date" value={newMisc.end} selected={newMisc.end} onChange={(e) => setNewMisc({...newMisc, end: e})} />
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button onClick={ handleSubmitMisc }>Submit</button>
                </Modal.Footer>
            </Modal>

            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={(eventStyleGetter)}
            />
        </div>
    )
}
export default Itinerary