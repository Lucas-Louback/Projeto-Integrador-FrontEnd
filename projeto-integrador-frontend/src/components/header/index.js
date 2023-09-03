import { HeaderStyled } from "./styled"
import { Button } from "@chakra-ui/react"
import {
    goToLoginPage,
    goToFeedPage
} from '../../routes'
import { useNavigate } from "react-router-dom";

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const buttonAction = () => {
        if (isLoggedIn) {
            localStorage.removeItem("site.token");
            setIsLoggedIn(false);
        }
        goToLoginPage(navigate)
    }

    const buttonText = isLoggedIn ? "Logout" : "Login"



    return (
        <HeaderStyled>
            <Button onClick={() => goToFeedPage(navigate)} variant="header">LabEddit</Button>
            <Button onClick={buttonAction} variant="header">{buttonText}</Button>
        </HeaderStyled>
    )
}