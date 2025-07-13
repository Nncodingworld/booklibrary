import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateSignup = () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert('All fields are required!');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format!');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      if (validateSignup()) {
        alert('Signup successful! You can now login.');
        setIsSignup(false);
      }
    } else {
      const validUsername = formData.username === 'booklibrary';
      const validEmail = formData.email === 'Booklibrary@gmail.com';
      const validPassword = formData.password === 'BookLib';

      if ((validUsername || validEmail) && validPassword) {
        alert('Login successful!');
      } else {
        alert('Invalid credentials!');
      }
    }
  };

  return (
  <div className='form'>
      <div className="card p-4 glass-form">
      <h3 className="text-center authtext mb-4">{isSignup ? 'Sign Up' : 'Login'}</h3>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {!isSignup && (
          <>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {isSignup && (
          <div className="mb-3">
            <button type="button" className="google w-100">
              Sign up with Google
            </button>
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100 mb-3">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>

        <p className="text-center">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className="text-primary"
            onClick={() => setIsSignup(!isSignup)}
            style={{ cursor: 'pointer' }}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </form>
    </div>
  </div>
  );
};

export default AuthForm;
