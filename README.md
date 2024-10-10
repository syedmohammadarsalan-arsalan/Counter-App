# Counter App

This is a simple web-based counter application that allows users to increment or decrement a counter by clicking buttons. The app is built using basic HTML, Tailwind CSS for styling, and JavaScript for functionality.

## Features

- **Increment and Decrement**: Users can increase or decrease the counter value by clicking the respective buttons.
- **Responsive Design**: The app is fully responsive, designed with Tailwind CSS, and works seamlessly across different screen sizes.
- **Smooth User Experience**: Buttons change color on hover with smooth transitions for a better user interface.

## Technologies Used

- **HTML5**: The structure and layout of the app.
- **Tailwind CSS**: A utility-first CSS framework used to create a clean, modern, and responsive design.
- **JavaScript**: Provides the logic to increment and decrement the counter value.
  
## Setup Instructions

1. Clone the repository or download the project files.
2. Open the `index.html` file in any web browser to view and interact with the counter app.

## File Structure

- **index.html**: Contains the structure and layout of the counter app. It also includes the Tailwind CSS CDN link for styling and references the external JavaScript file (`script.js`) for functionality.
- **script.js**: Contains the logic for the increment and decrement functionality. It listens for button clicks and updates the counter value in real-time.

## How It Works

- The app displays two buttons labeled `+` and `-` alongside a counter in the middle.
- The initial counter value is set to `0`.
- Clicking the `+` button increases the counter by 1.
- Clicking the `-` button decreases the counter by 1.
- The counter value is dynamically updated on the page using JavaScript, and the current value is retrieved and modified via the `textContent` property.

## Code Overview

- **HTML**: The buttons are placed inside a flex container for easy alignment, and Tailwind CSS is used for styling and layout.
- **JavaScript**: Two functions, `Increment()` and `decrement()`, handle the increase and decrease of the counter value. These functions are attached to the `onclick` event of the buttons.

## Tailwind CSS

Tailwind CSS is used for styling the app, including:
- A gradient background for the page (`bg-gradient-to-r from-purple-400 via-pink-500 to-red-500`).
- Button hover effects (`hover:bg-blue-600 transition duration-300`).
- Flexbox for centering and spacing elements.

## Demo

To see the app in action, simply open the `index.html` file in your browser. You should see a centered counter with increment and decrement buttons.
