function FruitAndVegies() {
  const listofFnV = [
    {
      name: "mango",price: 199, country: "south africa", },
    {
      name: "banana",
      price: 169,
      country: "madagaskar",
    },
    {
      name: "avocado",
      price: 259,
      country: "kongo",
    },
    { name: "the name of the vegitable is cabbage", price: 120, country: "mongolia" },
    { name: "rice", price: 180, country: "china" },
    { name: "onions", price: 190, country: "ethiopia" },
  ];
  return (
    <div>
      <ul>
        {listofFnV.map((fNv,index) => (
          <li key={index}>
            {fNv.name} {fNv.price} {fNv.country}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FruitAndVegies;
