import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {
  return (
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logo} alt="Be The Hero"/>

          <form>
            <h2>Sign In</h2>

            <input placeholder="Your ID"/>
            <button className="button" type="submit">Enter</button>

            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#E02041" />
              Sign Up
            </Link>
          </form>
        </section>

        <img className="logon-img" src={heroesImg} alt="Heroes"/>
      </div>
    </>
  )
};
