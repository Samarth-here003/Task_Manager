// import AppLayout from "./components/AppLayout";
// import { Routes, Route } from "react-router-dom";
// import Task from "./components/Task";
// import { Toaster } from "react-hot-toast";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import { Navigate } from "react-router-dom";
// function App() {
//   console.log('render app..')
//   return (
//     <AppLayout>
//       <Toaster
//         position="top-right"
//         gutter={8}
//       />
//       <Routes>
//       <Route path="/signup" exact element={<Signup/>}/>
//     <Route path="/login" exact element={<Login/>}/>
//     <Route path="/" exact element={<Navigate replace to="/login"/>}/>
//         <Route path="/:projectId" element={<Task />} />
//         <Route path="/" element={
//           <div className="flex flex-col items-center w-full pt-10">
//             <img src="./image/welcome.svg" className="w-5/12" alt="" />
//             <h1 className="text-lg text-gray-600">Select or create new project</h1>
//           </div>
//         } />
//       </Routes>
//     </AppLayout>
//   );
// }

// export default App;


// import AppLayout from "./components/AppLayout";
// import { Routes, Route } from "react-router-dom";
// import Task from "./components/Task";
// // import { Toaster } from "react-hot-toast";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import { Navigate } from "react-router-dom";
// import AppLayout from "./components/AppLayout";
// function App() {
//   console.log('render app..')
//   return (
   
//       <Routes>
//       <Route path="/signup" exact element={<Signup/>}/>
//     <Route path="/login" exact element={<Login/>}/>
//     <Route path="/app" exact element={<AppLayout/>}/>

//     <Route path="/" exact element={<Navigate replace to="/Signup"/>}/>
//         <Route path="/:projectId" element={<Task />} />
//         <Route path="/" element={
//           <div className="flex flex-col items-center w-full pt-10">
//             <img src="./image/welcome.svg" className="w-5/12" alt="" />
//             <h1 className="text-lg text-gray-600">Select or create new project</h1>
//           </div>
//         } />
//       </Routes>
  
//   );
// }

// export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // Use state to track whether the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // This effect simulates checking if the user is authenticated (e.g., check localStorage or JWT)
//   useEffect(() => {
//     // Check if a token or user info exists (this is a placeholder for actual auth logic)
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Set auth state based on whether token exists
//   }, []);

//   const handleLoginSuccess = (token) => {
//     // Save token and update authentication state on successful login
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Clear token and reset authentication state
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       {/* Render Toaster globally */}
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {/* Signup and Login routes should only be accessible if not authenticated */}
//         {!isAuthenticated && (
//           <>
//             <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/" element={<Navigate to="/login" />} />
//           </>
//         )}

//         {/* Once authenticated, redirect to the app layout */}
//         {isAuthenticated && (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
//                         <h1 className="text-lg text-gray-600">Select or create new project</h1>
//                       </div>
//                     }
//                   />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // Use state to track whether the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication status on app load
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Set auth state based on token presence
//   }, []);

//   const handleLoginSuccess = (token) => {
//     // Save token and update authentication state on successful login
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Clear token and reset authentication state
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       {/* Render Toaster globally */}
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {!isAuthenticated ? (
//           <>
//             <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         ) : (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
//                         <h1 className="text-lg text-gray-600">Select or create new project</h1>
//                       </div>
//                     }
//                   />
//                   {/* Optional: redirect to a default project or path */}
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;

// import AppLayout from "./components/AppLayout";
// import { Routes, Route } from "react-router-dom";
// import Task from "./components/Task";
// import { Toaster } from "react-hot-toast";
// function App() {
//   console.log('render app..')
//   return (
//     <AppLayout>
//       <Toaster
//         position="top-right"
//         gutter={8}
//       />
//       <Routes>
//         <Route path="/:projectId" element={<Task />} />
//         <Route path="/" element={
//           <div className="flex flex-col items-center w-full pt-10">
//             <img src="./image/welcome.svg" className="w-5/12" alt="" />
//             <h1 className="text-lg text-gray-600">Select or create new project</h1>
//           </div>
//         } />
//       </Routes>
//     </AppLayout>
//   );
// }

// export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // Use state to track whether the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check authentication status on app load
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Set auth state based on token presence
//   }, []);

//   const handleLoginSuccess = (token) => {
//     // Save token and update authentication state on successful login
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Clear token and reset authentication state
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       {/* Render Toaster globally */}
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {!isAuthenticated ? (
//           <>
//             <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         ) : (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 {/* The inner routes for authenticated users */}
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
//                         <h1 className="text-lg text-gray-600">Select or create new project</h1>
//                       </div>
//                     }
//                   />
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken"); // Consistent key usage
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLoginSuccess = (token) => {
//     localStorage.setItem("authToken", token); // Consistent key usage
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   return (
//     <>
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {!isAuthenticated ? (
//           <>
//             <Route
//               path="/signup"
//               element={<Signup onSignupSuccess={handleLoginSuccess} />}
//             />
//             <Route
//               path="/login"
//               element={<Login onLoginSuccess={handleLoginSuccess} />}
//             />
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         ) : (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img
//                           src="./image/welcome.svg"
//                           className="w-5/12"
//                           alt="Welcome"
//                         />
//                         <h1 className="text-lg text-gray-600">
//                           Select or create new project
//                         </h1>
//                       </div>
//                     }
//                   />
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // Use state to track whether the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(null); // Change to null initially

//   // Check authentication status on app load
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Set auth state based on token presence
//   }, []);

//   const handleLoginSuccess = (token) => {
//     // Save token and update authentication state on successful login
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Clear token and reset authentication state
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   // Handle initial loading state
//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Show a loading state while determining authentication
//   }

//   return (
//     <>
//       {/* Render Toaster globally */}
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {isAuthenticated ? (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
//                         <h1 className="text-lg text-gray-600">Select or create new project</h1>
//                       </div>
//                     }
//                   />
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         ) : (
//           <>
//             <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // Use state to track whether the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(null); // Set to null initially for loading state

//   // Check authentication status on app load
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Set auth state based on token presence
//   }, []);

//   const handleLoginSuccess = (token) => {
//     // Save token and update authentication state on successful login
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Clear token and reset authentication state
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   // Handle initial loading state (checking authentication status)
//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Show a loading spinner while authentication is being checked
//   }

//   return (
//     <>
//       {/* Render Toaster globally */}
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {/* Authenticated routes */}
//         {isAuthenticated ? (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
//                         <h1 className="text-lg text-gray-600">Select or create new project</h1>
//                       </div>
//                     }
//                   />
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         ) : (
//           // Non-authenticated routes (Login & Signup)
//           <>
//             <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             {/* Redirect any other path to login if not authenticated */}
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Task from "./components/Task";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import AppLayout from "./components/AppLayout";
// import { Toaster } from "react-hot-toast";

// function App() {
//   // Use state to track whether the user is authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(null); // Set null initially for loading state

//   // Check authentication status on app load
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsAuthenticated(!!token); // Set auth state based on token presence
//   }, []);

//   const handleSignupSuccess = (token) => {
//     // Save token and update authentication state
//     console.log("Signup successful, saving token...");
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLoginSuccess = (token) => {
//     // Save token and update authentication state on successful login
//     console.log("Login successful, saving token...");
//     localStorage.setItem("authToken", token);
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     // Clear token and reset authentication state
//     console.log("Logging out...");
//     localStorage.removeItem("authToken");
//     setIsAuthenticated(false);
//   };

//   // Handle initial loading state
//   if (isAuthenticated === null) {
//     return <div>Loading...</div>; // Show a loading state while determining authentication
//   }

//   return (
//     <>
//       {/* Render Toaster globally */}
//       <Toaster position="top-right" gutter={8} />

//       <Routes>
//         {isAuthenticated ? (
//           <Route
//             path="/*"
//             element={
//               <AppLayout onLogout={handleLogout}>
//                 <Routes>
//                   <Route path="/:projectId" element={<Task />} />
//                   <Route
//                     path="/"
//                     element={
//                       <div className="flex flex-col items-center w-full pt-10">
//                         <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
//                         <h1 className="text-lg text-gray-600">Select or create new project</h1>
//                       </div>
//                     }
//                   />
//                   <Route path="*" element={<Navigate to="/" />} />
//                 </Routes>
//               </AppLayout>
//             }
//           />
//         ) : (
//           <>
//             <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />
//             <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
//             <Route path="/*" element={<Navigate to="/login" />} />
//           </>
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Task from "./components/Task";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AppLayout from "./components/AppLayout";
import { Toaster } from "react-hot-toast";
import Chatbot from "./components/Chatbot/Chatbot"; // Import the Chatbot component

function App() {
  // Use state to track whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Set null initially for loading state

  // Clear authToken on app load to force login each time
  useEffect(() => {
    localStorage.removeItem("authToken"); // Clear the token on app load to force login every time
    setIsAuthenticated(false); // Force the user to be unauthenticated initially
  }, []);

  const handleSignupSuccess = (token) => {
    // Save token and update authentication state
    console.log("Signup successful, saving token...");
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const handleLoginSuccess = (token) => {
    // Save token and update authentication state on successful login
    console.log("Login successful, saving token...");
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Clear token and reset authentication state
    console.log("Logging out...");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  // Handle initial loading state
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state while determining authentication
  }

  return (
    <>
      {/* Render Toaster globally */}
      <Toaster position="top-right" gutter={8} />

      <Routes>
        {isAuthenticated ? (
          <Route
            path="/*"
            element={
              <AppLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="/:projectId" element={<Task />} />
                      {/* Route for Chatbot */}
                  <Route path="/chat" element={<Chatbot />} />
                  <Route
                    path="/"
                    element={
                      <div className="flex flex-col items-center w-full pt-10">
                        <img src="./image/welcome.svg" className="w-5/12" alt="Welcome" />
                        <h1 className="text-lg text-gray-600">Select or create new project</h1>
                      </div>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </AppLayout>
            }
          />
        ) : (
          <>
            <Route path="/signup" element={<Signup onSignupSuccess={handleSignupSuccess} />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
