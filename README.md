# Random Block Graph Generator

This application allows users to create, delete, and move blocks around the screen. Lines are drawn between a block and its parent block, showing the relationship between blocks.

## Features

- Block Creation: Users can create blocks by clicking the '+' button on any existing block. The new block will be randomly positioned within the window.

- Block Deletion: Users can delete blocks by clicking the '-' button on any block. The block and its associated lines will be removed.

- Block Movement: Users can move blocks around the screen by dragging them. The lines connected to the block will adjust accordingly to maintain the connection.

- Line Drawing: Lines are drawn between a block and its parent block, showing the relationship between blocks.

## How to Run the Project

1. **Clone the repository**: First, you need to clone the repository to your local machine. You can do this by running the following command in your terminal:

   ```bash
   git clone https://github.com/yourusername/random-block-graph-generator.git
   ```

2. **Install the necessary packages**: Navigate into the project directory and run the following command to install all the necessary packages:

   ```bash
   cd random-block-graph-generator
   npm install
   ```

3. **Start the development server**: Finally, you can start the development server by running the following command:

   ```bash
   npm run dev
   ```

   The application should now be running at `http://localhost:3000`.
