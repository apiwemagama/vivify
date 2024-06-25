# My Project

This is a full-stack project with a React frontend and a Node.js/Express backend.

## Prerequisites

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)
- MySQL (for database)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Clone the Repository

```bash
git clone https://github.com/aphiweagama/moviedb.git
cd moviedb

Database Setup

1. Create a databse on RDBMS and name it moviedb
2. Import the dump on db folder located in the root directory of this application

Backend Setup

1. Navigate to the backend directory
  ```bash
  cd backend
2. Install backend dependencies
  ```bash
  npm install
3. Create a .env file in the backend directory and add your environment variables (e.g., TMDB API key, database connection details):
  ```plaintext
  TMDB_API_KEY=your_tmdb_api_key
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_password
  DB_NAME=moviedb

Frontend Setup

1. Navigate to the frontend directory:
```bash
  cd ../frontend
2. Install the frontend dependencies:
```bash
  npm install

Running the application

1. Navigate to the moviedb directory:
```bash
  cd ../
2. Install the moviedb dependencies:
```bash
  npm install
3. Start the application development server
  ```bash
  npm start

Note: The application should start on the default browser, if it does not follow the prompts on the bash (terminal)





