import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero"/>
        <span>Welcome, APAD</span>

        <Link className="button" to="/incidents/new">Register new case</Link>
        <button type="button">
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Registered cases</h1>
      <ul>
        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>VAlue test</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>VAlue test</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>VAlue test</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li>
          <strong>Case:</strong>
          <p>Case test</p>

          <strong>Description:</strong>
          <p>description test</p>

          <strong>Value:</strong>
          <p>VAlue test</p>

          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>
    </div>
  )
}
