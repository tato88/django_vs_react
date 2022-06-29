import React, {useEffect, useState} from 'react';
import {autoparkservice} from "../../services/auto_park.service";
import {carService} from "../../services/carService";

const AutoParks = () => {
    const [auto_parks, setAutoParks] = useState([])
    const [cars, setCars] = useState([])

    useEffect((autopark_id) => {
        autoparkservice.getAll().then(({data}) => setAutoParks(data))
    }, [cars])

    const showCars = (autoparkId) => {
        console.log(autoparkId)
        carService.getCarsByAutoparkId(autoparkId).then(({data}) => setCars(data))
    }

    const deleteCar = (carId, autoparkId) => {
        carService.deleteCar(carId)
    }

    return (
        <div>
            {auto_parks.map(value => <div key={value.id}>{value.name}<input type={"button"} value={'Show Cars'}
                                                                            onClick={() => showCars(value.id)}/></div>)}
            {cars.map(value => <div key={value.id}>{value.brand} -- {value.price}$ -- {value.year}year<input
                type={"button"} value={"delete Car"}
                onClick={async () => {
                    await deleteCar(value.id)
                    await showCars(value.auto_park_id)
                }}/></div>)}
        </div>
    );
};

export default AutoParks;