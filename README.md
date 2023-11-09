# Fast Pizza Co. Menu App

This is a simple React application for a fast food pizzeria. It displays a menu of pizzas, their details, and the restaurant's opening hours.

# Installation

To run this application, you need to have Node.js and npm installed. Follow these steps:

#### Clone the repository to your local machine:

```bash
git clone
```

#### Navigate to the project directory:

```bash
cd fast-pizza-co
```

### Install the required dependencies:

```bash
npm install
```

# Usage

Once you have installed the dependencies, you can run the application with the following command:

```bash
npm start
```

This will start the development server, and you can view the application in your web browser at http://localhost:3000.

## Features

## Components

. App: The main component that composes the entire app, including the header, menu, and footer.

. Header: Displays the restaurant name.

. Menu: Displays the list of available pizzas. It checks the number of pizzas available and displays them if any exist; otherwise, it shows a message.

. Pizza: Represents individual pizza items, displaying their name, ingredients, and price.

. Footer: Displays the restaurant's opening hours and an order button if the restaurant is currently open.

## Data

The pizza data is stored in the pizzaData array, including the name, ingredients, price, photo name, and whether the pizza is sold out.

Each pizza is associated with a specific skill, indicating the skill or technology used in making it.

# Styling

The application uses CSS styles to format and style the components.

## Screenshots

![App Screenshot](/public/header.png)
![App Screenshot](/public/menu.png)
![App Screenshot](/public/footer.png)
