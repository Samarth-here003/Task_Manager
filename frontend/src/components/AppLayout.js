// import React from 'react'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'

// const AppLayout = ({ children }) => {
//     return (
//         <div className='bg-white'>
//             <Navbar />
//             <div className=' w-screen flex container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
//                 <div className="w-[220px]">
//                     <Sidebar />
//                 </div>
//                 <div className="flex-1">
//                     <div className="flex">
//                         {children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AppLayout
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Chatbot from './Chatbot/Chatbot'; // Import the Chatbot component

const AppLayout = ({ children }) => {
    return (
        <div className='bg-white'>
            <Navbar>
                {/* You can optionally include a Chatbot link here */}
                <Link to="/chat" className="text-blue-500 hover:underline">Open Chatbot</Link>
            </Navbar>
            <div className='w-screen flex container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
                <div className="w-[220px]">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <div className="flex">
                        {children}
                    </div>
                </div>
            </div>
            {/* Add the Chatbot component */}
            <div className="fixed bottom-4 right-4 z-50">
                <Chatbot />
            </div>
        </div>
    );
}

export default AppLayout
// import React from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// const AppLayout = ({ children, onLogout }) => {
//     const handleLogout = () => {
//         localStorage.removeItem("token"); // Clear the token from local storage
//         onLogout(); // Notify App component about logout
//     };

//     return (
//         <div className='bg-white'>
//             <Navbar />
//             <button onClick={handleLogout}>Logout</button> {/* Logout button */}
//             <div className='w-screen flex container mx-auto' style={{ height: 'calc(100vh - 56px)' }}>
//                 <div className="w-[220px]">
//                     <Sidebar />
//                 </div>
//                 <div className="flex-1">
//                     <div className="flex">
//                         {children}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AppLayout;
