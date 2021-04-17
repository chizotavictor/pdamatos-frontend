/* eslint-disable */
import { object, string } from 'yup'
const registerFormSchema = object().shape({
    username: string().min(3, "Username must be between 3 - 15 character length.")
        .required("Username field is required."),
    first_name: string().min(3, "First name must be between 3 - 15 character length.")
        .max(20)
        .required("First name is required."),
    last_name: string().min(3, "Last name must be between 3 - 15 character length.")
        .max(20)
        .required("Last name is required."),
    email: string()
        .email()
        .required(),
    phone_number: string()
        .min(10, "Phone number must be at least 11 digit length.")
        .max(13)
        .required("Phone number field is required."),
    password: string()
        .min(4, "Password field must be atleast 4 - 15 character length.")
        .required("Password field is required.")
});

export default registerFormSchema;