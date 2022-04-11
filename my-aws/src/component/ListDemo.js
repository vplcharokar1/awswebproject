import {react} from 'react'
import Car from './Car';

function ListDemo()
{
    const cars=[
        {id:1,brand:'ford'},
        {id:2,brand:'tata'},
        {id:3,brand:'maruti'}
    ];
    return(
        <>
         <h1>
             Who live in my Garage
         </h1>
         <ul>
             {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
         </ul>
        
        </>
    )
}

 export default ListDemo;