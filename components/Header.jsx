"use client";
export default function Header() {
    return (
        <header className="header">
            <div className="logo-badge">
                <svg viewBox="0 0 100 100" className="rotating-text">
                    <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text>
                        <textPath href="#curve" startOffset="0%">
                            NEW PROJECTS • OPEN FOR WORK •
                        </textPath>
                    </text>
                </svg>
                <div className="center-icon">NF</div>
            </div>

            <nav className="main-nav">
                <a href="#projects">Works</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="header-right">
                <span>AVAILABLE FOR WORK</span>
                <button className="menu-btn" onClick={() => alert('Mobile menu clicked - To be implemented: Expand overlay')}><i className="ri-menu-line"></i></button>
            </div>
        </header>
    );
}
