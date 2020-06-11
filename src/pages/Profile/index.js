import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');

  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      // To remove the specific incident as soon as the user delete it.
      setIncidents(incidents.filter(incident => incident.id !== id));

    } catch {
      alert('Something went wrong, try again.');
    }
  };

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="Be The Hero"/>
        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">Register new case</Link>
        <button type="button">
          <FiPower onClick={handleLogout} size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Registered cases</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
          <strong>Case:</strong>
          <p>{incident.title}</p>

          <strong>Description:</strong>
          <p>{incident.description}</p>

          <strong>Value:</strong>
          <p>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(incident.value)}</p>

          <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  )
};

// if you use .map(incident => {
  // curly brackets, you have to 'return' something
// })
