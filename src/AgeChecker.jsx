function AgeChecker(){
    const age = 18;
    if (age > 18) {
      return <h1>hello {age} years old adult</h1>;
    } else if (age > 11 && age < 19) {
      return <h1>hello {age} years old teen</h1>;
    } else {
      return <h1>{age} years old kid</h1>;
    }
}
export default AgeChecker