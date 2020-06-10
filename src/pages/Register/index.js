import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero"/>

          <h1>Register</h1>
          <p>Register, enter in the app and help people to find your cases.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Don't have register
          </Link>
        </section>

        <form>
          <input placeholder="NGO name"/>
          <input type="email" placeholder="Email"/>
          <input placeholder="WhatApp"/>

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}
