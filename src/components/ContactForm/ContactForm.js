import { Formik, Field } from 'formik';
import {Button, ErrorMsg, FormWrapper, InputWrapper} from './ContactForms.styled'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;

const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(1, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   number: Yup.string()
     .matches(phoneRegExp, 'Incorrect phone, example(111-11-11)')
     .required('Required'),
 });

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={SignupSchema}
            onSubmit={(value, action) => {
                if (contacts.some(el => el.name === value.name)) {
                    return alert(`${value.name} is already in contacts.`);
                    }
                dispatch(addContact(value));
                action.resetForm();
            }}
        >
            <FormWrapper>
                <InputWrapper>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMsg component="span" name="name" />
                </InputWrapper>
                <InputWrapper>
                    Number
                    <Field name="number" type="tel"placeholder="000-00-00"/>
                    <ErrorMsg component="span" name="number" />
                </InputWrapper>
            <Button type="submit">Add contact</Button>
            </FormWrapper>
        </Formik>
    )
}
