import { useSelector } from "react-redux";



export const useCalendarStore = () => {

    // const dispatch = useDispatch();
    // const { events, activeEvent } = useSelector( state => console.log("state.calendar: ", state.calendar.events) );
    const { events, activeEvent } = useSelector( state => state.calendar );
    console.log("events::: ", events);

    return (
        // * propiedades
         events,
         activeEvent

        // * métodos
    )
}
