import React, { useState } from 'react';
import { loginService } from '../../services/authServices';
import { useAuth } from '../../auth/authProvider';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const {loginContext} = useAuth();
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Exemple de validation
    if (email === '' || password === '') {
      setError('Veuillez remplir tous les champs.');
    } else{
      const data ={ email, password };
      loginService(data)
        .then(response => {
          const { user, token } = response;
          loginContext(user, token);

          Navigate('/dashboard'); // Rediriger vers la page d'accueil ou une autre page après la connexion réussie
          // Rediriger ou afficher un message
        })
        .catch(err => {
          console.error('Erreur de connexion', err);
          setError('Erreur de connexion. Veuillez réessayer.');
        });
    } 
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow text-start" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Connexion</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
