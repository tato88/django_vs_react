import React, {useEffect, useState} from 'react';
import {autoparkservice} from "../../services/auto_park.service";
import {carService} from "../../services/carService";

const AutoParks = () => {
    const [auto_parks, setAutoParks] = useState([])
    const [cars, setCars] = useState([])

    useEffect((autopark_id) => {
        autoparkservice.getAll().then(({data}) => setAutoParks(data))
    }, [])

    const showCars = (autoparkId) => {
        console.log(autoparkId)
        carService.getCarsByAutoparkId(autoparkId).then(({data}) => setCars(data))
    }

    const deleteCar = (carId, autoparkId) => {
        carService.deleteCar(carId)
    }

    const addCar = (parkId) => {
        const [brand, price, year] = [prompt('brand?'), prompt('price?'), prompt('year?')]

        const car = {"brand": String(brand), "price": Number(price), "year": Number(year)}
        // localhost:8000/auto_parks/2/cars
        console.log(car);
        console.log(parkId);
        carService.postCar(parkId, {car})

    }

    return (
        <div>
            {auto_parks.map(value => <div key={value.id}>
                {value.name}
                <input type={"button"}
                       value={'Show Cars'}
                       onClick={() => showCars(value.id)}/>
                <input type={"button"}
                       value={"add car"}
                       onClick={() => addCar(value.id)}/>
            </div>)}
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