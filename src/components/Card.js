import React from 'react'

const Card = ({ dog }) => {
    return (
        <div className="card">
            <img
                /* src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" */
                /* src="https://wallpapercave.com/wp/LrltByp.jpg" */
                /* src="https://www.natureplprints.com/p/729/dalmatian-dog-barney-6-years-play-bow-stance-19114405.jpg.webp" */
                src={dog.image}
                alt="dog"
            />
            <p>
                {dog.breed.name}
            </p>
        </div>
    )
}

export default Card