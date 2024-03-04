import React from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { registrationSchema } from '../schemas';
import { Registration, User } from '../models/interfaces';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import './Register.css';

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const onSubmit = async (values: Registration, actions: FormikHelpers<Registration>) => {
    const newUser: User = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_URL}/auth/register`, newUser);
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
        name: '',
        email: '',
        password: '',
      },
      validationSchema: registrationSchema,
      onSubmit,
    });

  return (
    <div className="form-container">
      <h3 className="form-title">Create your account</h3>
      <p className="form-description">
        To protect your privacy we use a phone number to make sure no one but you can access your
        personal information.
      </p>
      <form onSubmit={handleSubmit} action="#" method="POST" className="form">
        <div>
          <label htmlFor="name" className="label">
            Your name
          </label>
          <div className="">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={handleChange}
              placeholder="Enter your name"
              onBlur={handleBlur}
              className="form-input"
            />
            {errors.name && touched.name && <p className="error-msg">{errors.name}</p>}
          </div>
        </div>

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
            Create account
          </button>
        </div>
      </form>
      <p className="lint-to-login">
        Have already account?
        <Link to="/login"> Log in</Link>
      </p>
      <p className="terms">
        By signing into Menocare, you agree to our <a href="#">Terms and Privacy Policy.</a>
      </p>
    </div>
  );
};

export default RegistrationForm;
