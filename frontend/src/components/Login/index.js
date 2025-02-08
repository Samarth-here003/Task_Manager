// import styles from './styles.module.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = ({ onLoginSuccess }) => {
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
//             localStorage.setItem("token", res.data.token); // Store the token
//             onLoginSuccess(res.data.token); // Notify App about login success
//             navigate("/app"); // Redirect to AppLayout
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

// const Login = ({ onLoginSuccess }) => {
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
//             localStorage.setItem("authToken", res.data.token); // Store the token
//             onLoginSuccess(res.data.token); // Notify App about login success
//             navigate("/app"); // Redirect to AppLayout (make sure this path matches your routing setup)
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
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styles from './styles.module.css';

const Login = ({ onLoginSuccess }) => {
    const [data, setData] = useState({
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
            const url = "http://localhost:9000/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("authToken", res.data.token); // Store the token
            onLoginSuccess(res.data.token); // Notify App about login success
            navigate("/"); // Redirect to the main layout
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login to Your Account</h1>
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
                        <button type='submit' className={styles.green_btn}>Login</button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New Here?</h1>
                    <Link to="/signup">
                        <button type='button' className={styles.white_btn}>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;

