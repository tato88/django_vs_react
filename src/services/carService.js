import {axiosService} from "./axios.service";
import {links} from "../constans/links";

export const carService = {
    getAll: () => axiosService.get(links.cars),
    getCarsByAutoparkId: (id) => axiosService.get(`${links.cars}?autoParkId=${id}`),
    deleteCar:(id) => axiosService.delete(`${links.cars}/${id}`),
    postCar:(id,{car})=> axiosService.post(`${links.auto_parks}/${id}${links.cars}`,car)
}