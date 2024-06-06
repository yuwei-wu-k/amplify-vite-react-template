import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Welcome to Pet Trainer and Behavior Analyst</h1>
            <p>Your go-to app for monitoring and improving your pet's behavior and training.</p>
          </header>
          <nav className="App-nav">
            <a href="#dashboard" className="nav-link">Dashboard</a>
            <a href="#reports" className="nav-link">Reports</a>

          </nav>
          <button onClick={signOut}>Sign out</button>
          <main className="App-main">
            <section id="benefits">
              <h2>Benefits</h2>
              <p>Manage and improve your pet's behavior and training with easy-to-use tools.</p>
            </section>
          </main>
          <footer className="App-footer">
            <p>Copyright © 2024 Pet Trainer and Behavior Analyst</p>
          </footer>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
