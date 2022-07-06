import React from 'react';
import {usersService} from "../../services/users.service";

const Registration = () => {
    const registration = () => {
        const [email, password] = [prompt('email'), prompt('password?')]

        const user = {
            "email": String(email), "password": password, "profile": {
                "name": "Max",
                "surname": "opapa",
                "age": 18,
                "phone": "2222"
            }
        }
        console.log(user);
        try {
            usersService.postUser({user})

        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div>
            <input type={"button"} value={'registration'} onClick={() => registration()}/>
        </div>
    );
};

export default Registration;