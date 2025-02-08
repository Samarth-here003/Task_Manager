# Task_Manager
# Task Manager system using MERN stack (Mongodb, Express.js, React.js and Node.js) 

We have created a Project Management Tool using MERN where we can work upon multiple projects simultaneously and effortlessly.
We can add To-Do Section and write all the relevant description of our projects.

# Our tool works upon:-
1.Simplify the Project Management
2.Assign and Track tasks
3.Task and Project Management
4.Facilitate Effective Communication
5.Provides notification for adding new projects and tasks

## Setup instruction

- Step 1: install dependencies/node_module
  - Go to /backend directory for backend setup and run `npm install`

  - Go to /frontend directory for frontend setup and run `npm install`

- Step 2: Configure mongodb connection url
Go to backend directory and create .env file 
and put into `MONGODB_PATH=your-mongodb-connection-url`

- Step 3:  Change server port and cors origin (Optional)
by default your server running in port `http://localhost:9000` and cors origin/frontend url is`http://localhost:3000` , you can change port and cors, simply put this key into your .env
`SERVER_PORT=your-port` and` CORS_ORIGIN=-your-client-origin`

- Step 4: Run project
in your backend `npm start` for start node server and `npm run start` for frontend

## Packages used
- Tailwindcss
- Headlessui
- React router
- Axios
- UUID
- Joi
- Cors
- Dotenv
