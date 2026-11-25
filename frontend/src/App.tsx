
import './App.css'

function App() {
    return (
        <div className="app">
            <header className="navbar">
                <a href="#" className="logo">Access<span>SA</span></a>

                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#explore">Explore</a>
                </nav>

                <a href="#explore" className="nav-button">Get Started</a>
            </header>

            <main>
                <section className="hero" id="home">
                    <div className="hero-content">
                        <p className="eyebrow">A MORE INCLUSIVE SOUTH AFRICA</p>

                        <h1>Making South Africa more accessible.</h1>

                        <p className="hero-description">
                            Discover accessibility information, identify barriers and
                            help create more inclusive spaces for everyone.
                        </p>

                        <a href="#explore" className="primary-button">
                            Explore AccessSA →
                        </a>
                    </div>

                    <div className="hero-visual">
                        <div className="visual-card">
                            <span className="visual-icon">♿</span>
                            <h3>Accessibility matters.</h3>
                            <p>Better information. Better access. Better communities.</p>
                        </div>
                    </div>
                </section>

                <section className="about" id="about">
                    <p className="eyebrow">ABOUT ACCESSSA</p>
                    <h2>Access should never be an afterthought.</h2>
                    <p>
                        AccessSA aims to make accessibility information easier to find
                        and help organisations understand and remove barriers.
                    </p>
                </section>

                <section className="explore" id="explore">
                    <h2>Start exploring.</h2>
                    <p>Find out how AccessSA can help make spaces more inclusive.</p>
                </section>
            </main>

            <footer>
                <p>© 2026 AccessSA. Building a more accessible South Africa.</p>
            </footer>
        </div>
    )
}

export default App
