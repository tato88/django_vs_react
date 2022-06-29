import axios from "axios";
import baseURL from "../constans/links";

export const axiosService = axios.create({baseURL})