function FoodList ({ListOfFood}){
    return (
        <div>
            <ul>
                {ListOfFood?.map((fl,index)=>(
                    <li key={index}> {index} {fl.name} {fl.type}{fl.country}</li>

                ))
                    
                }
            </ul>
        </div>
    )
}
export default FoodList