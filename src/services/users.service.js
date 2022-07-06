import {axiosService} from "./axios.service";
import {links} from "../constans/links";

export const usersService = {
    getAll: () => axiosService.get(links.users),
    postUser: ({user}) => axiosService.post(links.users, user)
}