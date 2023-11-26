const PRODUCTS = [
  {
    name: "Sac",
  },
  {
    name: "Bijou",
  },
  {
    name: "livre",
  },
];

function App() {
  return (
    <div className="App">
      {PRODUCTS.map((item, index) => {
        return <div key={index}>{item.name}</div>;
      })}
    </div>
  );
}

export default App;
