import Link from 'next/link';

export default function ProjectsGrid() {
    return (
        <section className="projects" id="projects">
            <div className="projects-header">
                <h2>Drive your project toward<br />excellence with clarity.</h2>
            </div>

            <div className="projects-grid">
                <Link href="/projekt1" className="project-card block">
                    <article>
                        <div className="card-image">
                            <img src="/assets/images/hero_new.png" alt="Project 1" />
                        </div>
                        <div className="card-meta">
                            <span>Revolut</span>
                            <span>Jan 2024 - Brand</span>
                        </div>
                    </article>
                </Link>

                <Link href="/projekt2" className="project-card block">
                    <article>
                        <div className="card-image">
                            <img src="/assets/images/hero_new.png" alt="Project 2" />
                        </div>
                        <div className="card-meta">
                            <span>Architecture</span>
                            <span>Oct 2023 - Visual</span>
                        </div>
                    </article>
                </Link>

                <Link href="/projekt3" className="project-card block">
                    <article>
                        <div className="card-image">
                            <img src="/assets/images/hero_new.png" alt="Project 3" />
                        </div>
                        <div className="card-meta">
                            <span>Cylan</span>
                            <span>Jun 2023 - Brand</span>
                        </div>
                    </article>
                </Link>

                <Link href="/projekt4" className="project-card block">
                    <article>
                        <div className="card-image">
                            <img src="/assets/images/hero_new.png" alt="Project 4" />
                        </div>
                        <div className="card-meta">
                            <span>App UI</span>
                            <span>Jan 2023 - Product</span>
                        </div>
                    </article>
                </Link>
            </div>
        </section>
    );
}
