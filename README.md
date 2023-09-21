# Drag-and-Drop Image Gallery

Welcome to the Drag-and-Drop Image Gallery project! This project is designed to showcase a collection of images in an interactive and visually appealing gallery. Users can log in, rearrange images using drag-and-drop, search for images by tags, and enjoy a seamless user experience. This project is the state 3 project of HNGX Internship, 2023.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Authentication**: Users can log in to access the gallery. Only authenticated users can access the gallery.
  Authentication is done using a provided username and password. In order to login, a user must sign up first

- **Image Display**: The gallery displays images in a grid layout with consistent spacing and sizing. Each image is tagged for easy identification.

- **Loading State**: A loading state is implemented for when images are not ready for display. A skeleton loader loading shown during loading.

- **Search Functionality**: Users can search for images based on the tags assigned to the images. The search field filters the image list dynamically.

- **Drag-and-Drop**: Authenticated users can rearrange images within the gallery using a drag-and-drop feature.

- **User-Friendly Feedback**: Smooth animations and visual cues provide feedback during drag-and-drop interactions, enhancing the user experience. For example, the opacity of the image being draged is different from that of all other images.

- **Responsive Design**: The gallery is designed to be responsive and functions seamlessly on various devices, including desktops, tablets, and mobile phones.

- **Design Flexibility**: While meeting the project requirements, the design offers creative freedom to create a unique and appealing gallery.

## Demo

https://opuba-gallarina.netlify.app/

## Getting Started

To get started with this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone [repository-url]
   ```

2. Install the required dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and access the application at http://localhost:5173/.

## Usage

- **Authentication:** Use the provided authentication credentials to log in.

  - Username: user@example.com
  - Password: 1Password

- **Image Gallery:** Explore the image gallery, rearrange images using drag-and-drop, and search for images by tags.

## Technologies Used

- React.js
- Tailwind css

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-name.
5. Submit a pull request with a clear description of your changes.

### Acknowledgments

- HNG INTERNSHIP for providding the internship opportunity.
- Blessing Dawodo for her support and motivation.
