// import styles from './styles.module.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate,Link } from 'react-router-dom';

// const Login = () => {
//     const [data, setData] = useState({
//         email: "",
//         password: "",
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/api/auth";
//             const { data: res } = await axios.post(url, data);
//             localStorage.setItem("token", res.data);
//             navigate("/app"); // Navigate to AppLayout or the desired route
//         } catch (error) {
//             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <div className={styles.login_container}>
//             <div className={styles.login_form_container}>
//                 <div className={styles.left}>
//                     <form className={styles.form_container} onSubmit={handleSubmit}>
//                         <h1>Login to Your Account</h1>
//                         <input
//                             type='email'
//                             placeholder='Email'
//                             name='email'
//                             onChange={handleChange}
//                             value={data.email}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name='password'
//                             onChange={handleChange}
//                             value={data.password}
//                             required
//                             className={styles.input}
//                         />
//                         {error && <div className={styles.error_msg}>{error}</div>}
//                         <button type='submit' className={styles.green_btn}>Login</button>
//                     </form>
//                 </div>
//                 <div className={styles.right}>
//                     <h1>New Here?</h1>
//                     <Link to="/signup">
//                         <button type='button' className={styles.white_btn}>Sign Up</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


// import styles from './styles.module.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const Signup = ({ onSignupSuccess }) => {
//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/api/users";
//             const { data: res } = await axios.post(url, data);
//             onSignupSuccess(res.data.token); // Automatically log in after signup
//             navigate("/app"); // Redirect to AppLayout
//         } catch (error) {
//             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <div className={styles.signup_container}>
//             <div className={styles.signup_form_container}>
//                 <div className={styles.left}>
//                     <h1>Welcome Back</h1>
//                     <Link to="/login">
//                         <button type='button' className={styles.white_btn}>Sign In</button>
//                     </Link>
//                 </div>
//                 <div className={styles.right}>
//                     <form className={styles.form_container} onSubmit={handleSubmit}>
//                         <h1>Create Account</h1>
//                         <input
//                             type='text'
//                             placeholder='First Name'
//                             name='firstName'
//                             onChange={handleChange}
//                             value={data.firstName}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='text'
//                             placeholder='Last Name'
//                             name='lastName'
//                             onChange={handleChange}
//                             value={data.lastName}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='email'
//                             placeholder='Email'
//                             name='email'
//                             onChange={handleChange}
//                             value={data.email}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name='password'
//                             onChange={handleChange}
//                             value={data.password}
//                             required
//                             className={styles.input}
//                         />
//                         {error && <div className={styles.error_msg}>{error}</div>}
//                         <button type='submit' className={styles.green_btn}>Sign Up</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;
// import styles from './styles.module.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const Signup = () => {
//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:9000/api/users";
//             const { data: res } = await axios.post(url, data);
//             navigate("/login"); // Redirect to the login page after successful signup
//         } catch (error) {
//             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <div className={styles.signup_container}>
//             <div className={styles.signup_form_container}>
//                 <div className={styles.left}>
//                     <h1>Welcome Back</h1>
//                     <Link to="/login">
//                         <button type='button' className={styles.white_btn}>Sign In</button>
//                     </Link>
//                 </div>
//                 <div className={styles.right}>
//                     <form className={styles.form_container} onSubmit={handleSubmit}>
//                         <h1>Create Account</h1>
//                         <input
//                             type='text'
//                             placeholder='First Name'
//                             name='firstName'
//                             onChange={handleChange}
//                             value={data.firstName}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='text'
//                             placeholder='Last Name'
//                             name='lastName'
//                             onChange={handleChange}
//                             value={data.lastName}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='email'
//                             placeholder='Email'
//                             name='email'
//                             onChange={handleChange}
//                             value={data.email}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name='password'
//                             onChange={handleChange}
//                             value={data.password}
//                             required
//                             className={styles.input}
//                         />
//                         {error && <div className={styles.error_msg}>{error}</div>}
//                         <button type='submit' className={styles.green_btn}>Sign Up</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;



// import styles from './styles.module.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const Signup = ({ onSignupSuccess }) => {
//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//     });
//     const [error, setError] = useState("");
//     const navigate = useNavigate();

//     const handleChange = ({ currentTarget: input }) => {
//         setData({ ...data, [input.name]: input.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = "http://localhost:8080/api/users";
//             const { data: res } = await axios.post(url, data);
//             onSignupSuccess(res.data.token); // Automatically log in after signup
//             navigate("/"); // Redirect to main layout
//         } catch (error) {
//             if (error.response && error.response.status >= 400 && error.response.status <= 500) {
//                 setError(error.response.data.message);
//             }
//         }
//     };

//     return (
//         <div className={styles.signup_container}>
//             <div className={styles.signup_form_container}>
//                 <div className={styles.left}>
//                     <h1>Welcome Back</h1>
//                     <Link to="/login">
//                         <button type='button' className={styles.white_btn}>Sign In</button>
//                     </Link>
//                 </div>
//                 <div className={styles.right}>
//                     <form className={styles.form_container} onSubmit={handleSubmit}>
//                         <h1>Create Account</h1>
//                         <input
//                             type='text'
//                             placeholder='First Name'
//                             name='firstName'
//                             onChange={handleChange}
//                             value={data.firstName}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='text'
//                             placeholder='Last Name'
//                             name='lastName'
//                             onChange={handleChange}
//                             value={data.lastName}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='email'
//                             placeholder='Email'
//                             name='email'
//                             onChange={handleChange}
//                             value={data.email}
//                             required
//                             className={styles.input}
//                         />
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name='password'
//                             onChange={handleChange}
//                             value={data.password}
//                             required
//                             className={styles.input}
//                         />
//                         {error && <div className={styles.error_msg}>{error}</div>}
//                         <button type='submit' className={styles.green_btn}>Sign Up</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import styles from './styles.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = ({ onSignupSuccess }) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:9000/api/users"; // Update this if necessary
            const { data: res } = await axios.post(url, data);
            console.log(res); // Log the response for debugging
            onSignupSuccess(res.token); // Automatically log in after signup
            navigate("/"); // Redirect to main layout
            console.log("Navigating to main layout...");
        } catch (error) {
            console.error("Error during signup:", error); // Log the error for debugging
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>Sign In</button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type='text'
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type='text'
                            placeholder='Last Name'
                            name='lastName'
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type='submit' className={styles.green_btn}>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
