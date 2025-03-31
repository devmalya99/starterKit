import { useMutation } from "@tanstack/react-query"
import { main_post_query_hof } from "../main_query_hoc"
import { loginRoute } from "../apiRoutes"



export const useLoginUser = () => {

    return useMutation(
        {mutationFn: (formdata)=>main_post_query_hof(loginRoute, formdata)}
    )

}