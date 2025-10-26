import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TiffinBox</h1>
        <p>Delicious homemade meals delivered daily</p>
      </header>

      <section className="hero">
        <img src="/images/tiffin.jpg" alt="Tiffin delivery" />
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <button>Order Now</button>
        </a>
      </section>

      <footer>
        <p>© 2025 TiffinBox. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;