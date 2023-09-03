import { useState } from 'react';
import { useForm } from '../../hooks';
import {
    CenteredPageContainer as LoginPageContainer,
    FormContainer,
    EmailInput,
    PasswordlInput
} from '../../components/index';
import {
    FormControl,
    Button,
} from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import {
    goToSignupPage,
    goToFeedPage
} from '../../routes'
import { useNavigate } from 'react-router-dom';
import { Login } from '../../constants';


export const LoginPage = ({ setIsLoggedIn }) => {

    const navigate = useNavigate()

    const [form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    });


    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            const { token } = await Login({
                email: form.email,
                password: form.password
            });
            console.log(token);
            localStorage.setItem("site.token", token);
            goToFeedPage(navigate);
            setIsLoggedIn(true);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <LoginPageContainer>
            <FormContainer>
                <FormControl>

                </FormControl>
                <form onSubmit={onSubmit}>
                    <img src={logo} alt='logo labook' />
                    <EmailInput value={form.email} onChange={onChangeInputs} />
                    <PasswordlInput value={form.password} onChange={onChangeInputs} />
                    <FormControl>
                        <Button type='submit' variant="form-main">Enviar</Button>
                    </FormControl>
                    <FormControl>
                        <Button onClick={() => goToSignupPage(navigate)} type='button' variant="form-secondary">Não possui conta? Cadastre-se já!</Button>
                    </FormControl>
                </form>
            </FormContainer>
        </LoginPageContainer>
    )
}