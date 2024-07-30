function CarList(){
    const ListOfCar = [ 
        {
            name:'toyoya',
            model:2017,
            price: 2000

        },
        {
          name:'porsche',
          model:911,
          price:12000
        },
        {
            name:'tesla',
            model:'s',
            price:7000

        }

    
    ]

    return <div> 
        <ul>
            {
                ListOfCar.map((car,index)=>
                <li key={index}>{car.name} {car.model} {car.price}</li>
                )
            }
        </ul>
    </div>
}
export default CarList