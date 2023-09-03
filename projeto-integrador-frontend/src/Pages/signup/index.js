import { useState } from 'react';
import { useForm } from '../../hooks';
import {
    CenteredPageContainer as SignupPageContainer,
    FormContainer,
    EmailInput,
    PasswordlInput,
    NamelInput
} from '../../components/index';
import {
    FormControl,
    Button,
} from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import { Signup } from '../../constants';
import {
    goToFeedPage
} from '../../routes'
import { useNavigate } from 'react-router-dom';


export const SignupPage = () => {

    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
        name: "",
        email: "",
        password: ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            const { token } = await Signup({
                email: form.email,
                password: form.password,
                name: form.name
            });
            console.log(token);
            localStorage.setItem("site.token", token);
            goToFeedPage(navigate);

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <SignupPageContainer>
            <FormContainer>
                <FormControl>

                </FormControl>
                <form onSubmit={onSubmit}>
                    <img src={logo} alt='logo labook' />
                    <NamelInput value={form.name} onChange={onChangeInputs} />
                    <EmailInput value={form.email} onChange={onChangeInputs} />
                    <PasswordlInput value={form.password} onChange={onChangeInputs} />
                    <FormControl>
                        <Button type='submit' variant="form-main">Cadastrar</Button>
                    </FormControl>

                </form>
            </FormContainer>
        </SignupPageContainer>
    )

};