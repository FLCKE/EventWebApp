# EventWebApp (EventManager)

Application React pour la gestion et la visualisation d'événements.

## 🚀 Fonctionnalités

- Authentification (login/register)
- Tableau de bord organisateur (statistiques, ventes, progression)
- Création/édition d'événements (avec upload d'image)
- Liste des événements, participants, clients
- Notifications in-app (rappels événements)
- Responsive et moderne (React Bootstrap)

## ⚙️ Installation

1. **Cloner le repo**

   ```bash
   cd EventManager/EventWebApp/EventManager
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Configurer l'API**

   - L'API doit tourner sur `http://localhost:5000/api` (voir `src/config/Api.jsx`).

4. **Lancer l'application**
   ```bash
   npm run dev
   ```
   L'application tourne sur [http://localhost:5173](http://localhost:5173)

## 📚 Structure

- `src/screens/` : pages principales (Dashboard, AddEvent, EventList, Profil, etc.)
- `src/components/` : composants réutilisables (NavBar, LoginForm, RegisterForm, etc.)
- `src/services/` : appels API (axios)
- `src/auth/` : gestion du contexte utilisateur et ProtectedRoutes
- `src/config/` : configuration axios, routes
