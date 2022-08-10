import React from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

    const [cars, setCars] = React.useState([
        {
            name: 'Tesla',
            url: 'https://www.thestreet.com/.image/t_share/MTY4NjUyNzU1NTM0MTYxODE1/wall-street-is-tepid-on-teslas-new-cybertruck-its-kind-of-aggressive.jpg'
        },
        {
            name: 'BMW',
            url: 'https://images.hgmsites.net/hug/bmw-i8_100634676_h.jpg'
        },
        {
            name: 'Lykan',
            url: 'https://cdn.carbuzz.com/gallery-images/840x560/220000/400/220452.jpg'
        },
        {
            name: 'porche',
            url: 'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/911ModelImage.jpg&w=730&h=484&q=75&c=1'
        }


    ]);
  return (
    <div className='card-container'>
      {
        cars.map( car => (
            <TinderCard
            className="swipe"
            key={car.name}
            preventSwipe={['up', 'down']}
            >
                <div 
                style={ {backgroundImage: `url(${car.url})`} }
                className='card'>
                    <h2>{car.name}</h2>
                </div>
            </TinderCard>
        ))
      }
    </div>
  )
}

export default TinderCards