export default function Stats() {
    return (
        <section className="stats" id="about">
            <div className="section-header">
                <h2>About Me</h2>
                <div className="intro-text">
                    <p>In short: I turn complex problems into smooth user<br />
                        experiences, creating visual frameworks and digital<br />
                        prototypes. I love crafting things that are scalable and<br />
                        metrics-centric. And I mix all of these things with style.</p>

                    <a href="#about" className="btn-circle">About Is <i className="ri-arrow-right-line"></i></a>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-item">
                    <div className="number">1M<span className="plus">+</span></div>
                    <div className="label">Users impacted by my<br />proposed solutions</div>
                </div>
                <div className="stat-item">
                    <div className="number">4.9<span className="plus">*</span></div>
                    <div className="label">Average rating score on all<br />managed projects</div>
                </div>
                <div className="stat-item">
                    <div className="number">80<span className="plus">%</span></div>
                    <div className="label">Improvement in conversion rates<br />for previous clients</div>
                </div>
                <div className="stat-item">
                    <div className="number">99<span className="plus">%</span></div>
                    <div className="label">Client satisfaction<br />across 50+ projects</div>
                </div>
            </div>
        </section>
    );
}
