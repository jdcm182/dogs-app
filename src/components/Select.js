import React, { useState, useEffect } from 'react'
import getBreeds from '../helpers/getBreeds';


const initialBreeds = [
    { id: 1, name: 'Boxer' },
    { id: 2, name: 'Husky' },
    { id: 3, name: 'Ovejero' },
]

const Select = () => {

    const [breeds, setBreeds] = useState(initialBreeds);

    useEffect(() => {
        updateBreeds();
    }, []);


    const updateBreeds = () => {
        getBreeds()
            .then((newBreeds) => {
                setBreeds(newBreeds);
            })
    }

    return (
        <select onChange={() => alert("change")}>
            {
                breeds.map(breed =>
                    <option value={breed.id} key={breed.id}>{breed.name}</option>)}

            {/* <option value="1">Boxer</option>
            <option value="2">Labrador</option> */}
        </select>
    )
}

export default Select