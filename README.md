# Calculator

A sleek and responsive web-based calculator with a modern interface. Supports basic arithmetic operations with an intuitive button layout and keyboard-friendly design.

## Features

- **Basic Arithmetic**: Addition, subtraction, multiplication, and division
- **Clear Functions**: Clear all (C) and delete last character (⌫)
- **Decimal Support**: Handle floating-point numbers
- **Theme Switching**: Choose from blue, green, or red color schemes
- **Dark Mode**: Toggle between light and dark themes
- **Visual Feedback**: Hover effects and color-coded buttons
- **Responsive Design**: Works on desktop and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript
- **Modern UI**: Dark display with gradient backgrounds and shadows

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No internet connection required (works completely offline)

## Installation

1. Clone or download this repository to your local machine
2. Navigate to the `Calculator` folder

## How to Run

1. Open the `index.html` file in your web browser
   - You can double-click the file directly, or
   - Use a local server (recommended for better compatibility):
     - Python: `python -m http.server 8000`
     - Node.js: `npx http-server`
     - PHP: `php -S localhost:8000`

2. The calculator will load immediately and be ready to use

## Usage

### Using the Interface
- **Number Buttons (0-9)**: Click to input digits
- **Decimal Point (.)**: Click to add decimal places
- **Operators (+, −, ×, ÷)**: Click to perform arithmetic operations
- **Equals (=)**: Click to calculate the result
- **Clear (C)**: Click to clear the entire display
- **Delete (⌫)**: Click to remove the last character
- **Theme Buttons**: Click 💙Blue, Green, or ❤️Red to change color scheme
- **Dark Mode**: Click Dark to toggle between light and dark themes

### Example Calculations
- **Simple Addition**: `5 + 3 =` → Result: `8`
- **Multiplication**: `12 × 4 =` → Result: `48`
- **Division**: `15 ÷ 3 =` → Result: `5`
- **Decimal Calculation**: `10.5 - 2.3 =` → Result: `8.2`

### Operation Order
The calculator follows standard mathematical precedence:
1. Multiplication and Division (left to right)
2. Addition and Subtraction (left to right)

## Controls

| Button | Function | Color |
|--------|----------|-------|
| 0-9 | Input digits | Blue |
| . | Decimal point | Blue |
| +, −, ×, ÷ | Arithmetic operators | Orange |
| = | Calculate result | Green |
| C | Clear display | Red |
| ⌫ | Delete last character | Blue |
| 💙Blue | Switch to blue theme | Theme |
| Green | Switch to green theme | Theme |
| ❤️Red | Switch to red theme | Theme |
| Dark | Toggle dark mode | Theme |

## Customization

### Changing the Appearance
- Modify colors and gradients in `style.css`
- Adjust the background image by replacing `images.jpg`
- Change button sizes, fonts, and spacing
- Add new themes by extending the CSS variables

### Adding Features
- **Scientific Functions**: Add sin, cos, tan, log, etc.
- **Memory Functions**: Add M+, M-, MR, MC buttons
- **Keyboard Support**: Enhance keyboard input handling
- **History**: Save calculation history
- **Themes**: Add more color schemes or custom themes

### Improving Security
The current implementation uses `eval()` which can be unsafe. Consider implementing a proper expression parser for production use.

## Project Structure

```
Calculator/
├── index.html      # Main HTML page with calculator interface
├── script.js       # JavaScript calculation logic and event handlers
├── style.css       # Styling, layout, and visual effects
└── README.md       # This documentation file
```

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Technical Details

- **Calculation Method**: Uses JavaScript `eval()` with symbol replacement
- **Layout**: CSS Grid for responsive button arrangement
- **Styling**: Modern design with gradients, shadows, and hover effects
- **Error Handling**: Basic try-catch for invalid expressions

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.