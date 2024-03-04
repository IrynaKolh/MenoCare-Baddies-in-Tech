import React from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { Login } from '../models/interfaces';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import { loginSchema } from '../schemas';
import './Register.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const onSubmit = async (values: Login, actions: FormikHelpers<Login>) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_URL}/auth/login`, values);
      const user = response.data;

      localStorage.setItem('user', JSON.stringify(user));
      login(user);
      actions.resetForm();
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div className="form-container">
      <h3 className="form-title"> Login to your account</h3>
      <form onSubmit={handleSubmit} action="#" method="POST" className="form">
        <div>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <div className="">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              onBlur={handleBlur}
              className="form-input"
            />
            {errors.email && touched.email && <p className="error-msg">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="password" className="label">
            Password
          </label>
          <div className="">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-input"
            />
            {errors.password && touched.password && <p className="error-msg">{errors.password}</p>}
          </div>
        </div>

        <div>
          <button type="submit" disabled={isSubmitting} className="register-btn">
            Login
          </button>
        </div>
      </form>
      <p className="lint-to-login">
        Not registered yet?
        <Link to="/registration"> Create account</Link>
      </p>
    </div>
  );
};

export default LoginForm;
