/* eslint-disable */
import { object, string, number } from 'yup'
const TicketFormSchema = object().shape({
    number: string()
        .min(2, "Number must be at least 2.")
        .required("Number field is required."),
    game_direct_id: string()
        .required("Please select any game direct."),
    game_slot_id: string()
        .required("Please select any time or game slot."),
    point_option_id: string()
        .required("Please select any point option of your choice."),
    against: string()
        .required("Please select lottery play day.")
    
});

export default TicketFormSchema;