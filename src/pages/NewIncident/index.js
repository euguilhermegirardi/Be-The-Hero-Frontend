import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';


export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero"/>

          <h1>Register new case</h1>
          <p>Describe a case with details to find a hero to support it.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Back
          </Link>
        </section>

        <form>
          <input placeholder="Case title"/>
          <textarea placeholder="Description"></textarea>
          <input placeholder="Value" />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}
