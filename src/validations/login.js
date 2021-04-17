/* eslint-disable */
import { object, string } from 'yup'
const loginFormSchema = object().shape({
    username: string().min(3, "Username must be between 3 - 15 character length.")
        .required("Username field is required."),
    password: string()
        .min(4, "Password field must be atleast 4 - 15 character length.")
        .max(15)
        .required("Password field is required.")
});

export default loginFormSchema;