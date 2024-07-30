import "./App.css";
import AgeChecker from "./AgeChecker";
import DisplayMyName from "./DisplayMyName";
import DisplayColour from "./Displaycolur";
import CarList from "./CarList";
import FruitAndVegies from "./FruitAndVegies";
import SubtractionOfOperation from "./SubraactionOfOperation";
import AdditionOfOperation from "./AdditionOfOperation";
import MultplicationOfOperation from "./MultiplicationOfOperation";
import DivisionOfOperation from "./DivisionOfOperation";
import PhoneList from "./PhoneList";
import FoodList from "./assets/FoodList";

function App() {
    const ListOfPhones = [{
        name: 'samsung',
        model:'s21',
        year:2022
    },
    {
        name:'iphone',
        model:'13pro',
        year:2021
    }

] 
const ListOfFood =[
    {
        name: 'burger',
        type: 'lunch',
        country: 'german'

    },
    {
        name:'firfir',
        type:'breakfast/lunch/dinner',
        country:'finfine'
    },
    {
        name:'jolof',
        type:'lunch',
        country:'all african countries'
    }

]
return <div>
    <DisplayMyName name = {'suspect'}/>
    <DisplayColour ></DisplayColour>
    <CarList></CarList>
    <FruitAndVegies></FruitAndVegies>
    <SubtractionOfOperation a = {4} b= {7}></SubtractionOfOperation>
    <AdditionOfOperation c= {2} d ={5}></AdditionOfOperation>
    <MultplicationOfOperation e={5}f={7}></MultplicationOfOperation>
    <DivisionOfOperation g={6}h={3}></DivisionOfOperation>
    <PhoneList ListOfPhones= {ListOfPhones}></PhoneList>
    <FoodList ListOfFood={ListOfFood}></FoodList>
</div> 


}

export default App;
