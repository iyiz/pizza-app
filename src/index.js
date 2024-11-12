import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data.js';  

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase", textAlign: "center" }}>
            Zi Yi's Pizza Co.
        </h1>
    );
}

function Menu() {
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <div className="menu-container">
                <div className="pizza-grid">
                    {pizzaData.map((pizza) => (
                        <Pizza 
                            key={pizza.name}
                            name={pizza.name} 
                            ingredients={pizza.ingredients} 
                            price={pizza.price}
                            image={pizza.photoName}
                            soldOut={pizza.soldOut}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Pizza({ name, ingredients, price, image, soldOut }) {
    return (
        <div className="pizza">
            <img 
                src={image} 
                alt={name} 
                style={{ width: "100%", height: "auto", maxHeight: "300px", objectFit: "cover", opacity: soldOut ? 0.5 : 1 }} 
            />
            <h3>{name} {soldOut && <span className="sold-out">Sold Out</span>}</h3>
            <p>Ingredients: {ingredients}</p>
            <p>Price: ${price}</p>
        </div>
    );
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour < 22;

    return (
        <footer className="footer">
            <div>{isOpen ? "We're currently open" : "Sorry, we're closed"}</div>

            {isOpen && (
                <button className="order-button">Order</button>
            )}
        </footer>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
