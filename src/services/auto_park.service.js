import {axiosService} from "./axios.service";
import {links} from "../constans/links";

export const autoparkservice = {
    getAll: () => axiosService.get(links.auto_parks)
}