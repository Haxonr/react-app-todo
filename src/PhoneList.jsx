function PhoneList ({ListOfPhones}){
    return (
        <div>
            <ul>
                {ListOfPhones?.map((Mp,index)=>(
                    <li key={index}> {index} {Mp.name} {Mp.model}{Mp.year}</li>

                ))
                    
                }
            </ul>
        </div>
    )
}
export default PhoneList