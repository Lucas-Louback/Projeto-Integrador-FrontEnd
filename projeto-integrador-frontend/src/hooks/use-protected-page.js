import { useEffect } from "react";
import { goToLoginPage } from "../routes";
export const useProtectedPage = (navigate) => {
    useEffect(() => {
        const token = localStorage.getItem("site.token")
        if (!token) {
            goToLoginPage(navigate);
        }
    }, [navigate])
}