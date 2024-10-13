# Collage for You

This project is a web application named "Collage for You". It is designed to provide a collage-making experience with various interactive features.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project has the following structure:

- `index.html`: The main HTML file that includes the structure of the web application.
- `README.md`: This file, containing information about the project.
- `src/`: The source directory containing all the assets and scripts.
  - `images/`: Directory for storing images.
  - `javaScript/`: Directory for JavaScript files.
    - [`slide.js`](src/javaScript/slide.js): JavaScript file for handling slide functionality.
    - [`type.js`](src/javaScript/type.js): JavaScript file for handling typing functionality.
  - `style/`: Directory for CSS files.
    - [`main.css`](src/style/main.css): Main CSS file.
    - [`output.css`](src/style/output.css): Output CSS file.
    - [`style.css`](src/style/style.css): Additional CSS file.
  - [`tailwind.config.js`](src/tailwind.config.js): Configuration file for Tailwind CSS.
- `package.json`: Contains metadata about the project and its dependencies.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/collage-for-you.git
    ```
2. Navigate to the project directory:
    ```sh
    cd collage-for-you
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Installing Tailwind CSS

To install Tailwind CSS, follow these steps:

1. Install Tailwind CSS via npm:
    ```sh
    npm install -D tailwindcss
    ```
2. Create a `tailwind.config.js` file:
    ```sh
    npx tailwindcss init
    ```
3. Configure the `tailwind.config.js` file to include your content paths:
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["*"],
      theme: {
        extend: {
          screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
          },
        },
      },
      plugins: [],
    }
    ```
4. Add the Tailwind directives to your CSS file (`src/style/main.css`):
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

To run the project locally, open `index.html` in your web browser. You can use a live server extension in your code editor for a better development experience.

## Features

- **Responsive Design**: The application is designed to be responsive and works well on different screen sizes.
- **Interactive Dropdown Menu**: The dropdown menu can be toggled by clicking the button.
- **Image Slider**: The slider automatically transitions between images every 3 seconds.

## Dependencies

The project uses the following dependencies:

- **Font Awesome**: For icons.
- **Tailwind CSS**: For utility-first CSS styling.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Description of changes"
    ```
4. Push to the branch:
    ```sh
    git push origin feature-branch
    ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.