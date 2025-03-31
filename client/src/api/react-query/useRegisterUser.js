import { useMutation } from "@tanstack/react-query";
import { main_post_query_hof } from "../main_query_hoc";
import { registerRoute } from "../apiRoutes";



export const useRegisterUser = () => {

    return useMutation({
        mutationFn: (userData) => main_post_query_hof(registerRoute, userData),
    });

}