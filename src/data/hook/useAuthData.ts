import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function useAuthData() {
    return useContext(AuthContext)
}