import React, { useState } from 'react';
import { registerService } from '../../services/authServices';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const Navigate = useNavigate(); // Assurez-vous d'importer useNavigate depuis react-router-dom
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation basique
    if (!name || !email || !password || !confirmation) {
      setError('Veuillez remplir tous les champs.');
      setSuccess('');
    } else if (password !== confirmation) {
      setError('Les mots de passe ne correspondent pas.');
      setSuccess('');
    } else {
     registerService({ name, email, password, role:"organizer" })
        .then(response => {
          console.log(response);
          setSuccess('Inscription réussie !');
          setError('');
          // Réinitialiser les champs du formulaire
          setName('');
          setEmail('');
          setPassword('');
          setConfirmation('');
          Navigate('/login'); // Rediriger vers la page de connexion après l'inscription réussie
        })
        .catch(err => {
          console.error('Erreur d\'inscription', err);
          setError('Erreur lors de l\'inscription. Veuillez réessayer.');
          setSuccess('');
        });


      // Tu peux ici envoyer les données à ton backend avec fetch/axios
      console.log({ name, email, password });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow text-start" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Inscription</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Jean Dupont"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse e-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="ex: email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmation" className="form-label">Confirmer le mot de passe</label>
            <input
              type="password"
              className="form-control"
              id="confirmation"
              placeholder="••••••••"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
