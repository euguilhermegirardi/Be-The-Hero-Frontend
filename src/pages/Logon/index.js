import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      // console.log(response.data.name);

      localStorage.setItem('ongID', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('profile');

    } catch {
      alert('Something went wrong, try again.');
    }
  };

  return (
    <>
      <div className="logon-container">
        <section className="form">
          <img src={logo} alt="Be The Hero"/>

          <form onSubmit={handleLogin}>
            <h2>Sign In</h2>

            <input
              placeholder="Your ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />
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
