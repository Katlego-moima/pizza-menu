import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
    skill: "PostgreSQL 😁",
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
    skill: "FireBase 🔥",
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
    skill: "ReactJS 🥰",
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
    skill: "Typescript 😱",
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
    skill: "MongoDB 😍",
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
    skill: "JavaScript 😜",
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>The Fast Pizza .co</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];

  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className='pizzas'>
          {pizzas.map((pizza, index) => (
            <Pizza pizzaOBJ={pizza} key={index} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu please come back later!</p>
      )}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className='pizza'>
      <img src={props.pizzaOBJ.photoName} alt='pizza' />
      <div>
        <h3>{props.pizzaOBJ.name}</h3>
        <p>{props.pizzaOBJ.ingredients}</p>
        <span>{props.pizzaOBJ.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert(" We're currently open! "); else alert(" Sorry we're closed! ")

  console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen && (
        <div className='order'>
          <p>We're open until {closeHour}:00 Come visit us or order online</p>
          <div className='btn'>Order</div>
        </div>
      )}
    </footer>
  );
}

//React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
