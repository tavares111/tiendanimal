# Front-end challenge React 

This project is a **To-Do list application** built with a modern front-end stack. 

## Key features include:

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS** for utility-first styling and rapid UI development.
- **React Query** for efficient data fetching and synchronization.
- **React Hook Form** for form management, providing seamless user input handling.
- **Zod** for schema validation, ensuring the reliability of form data.

The app allows users to list, add, and delete tasks, making it a simple and effective tool for task management.

## Requirements

- **Node.js** (>= version Node.js 18.17 or later.)

## Installation

Follow these steps to run the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/tavares111/tiendanimal
    ```

2. Navigate to the project directory:

    ```bash
    cd your-project
    ```

3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

Describe the project's organization and key folders/files:

```bash
├── /src
│   ├── /components   # Reusable components
│   ├── /pages        # Pages managed by Next.js
│   ├── /styles       # Styling files (CSS, SCSS)
│   ├── /lib          # Other files requeried to use some lib's
│   ├── /hook         # React custom hooks
├── /public            # Public assets (root-level, e.g., favicon, robots.txt)
└── README.md          # Project documentation
└── tailwind.config    # Tailwind css configuration file

```
## Deployment

Instructions on how to deploy the project

- The app is deployed on [Vercel](https://vercel.com/) 
- [Link to the live application](https://tiendanimal.vercel.app/).
