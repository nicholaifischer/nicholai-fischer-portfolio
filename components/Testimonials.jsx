export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonial-header">
                <h2 className="section-label">Selected<br />Voices</h2>
                <p className="testimonial-sub">What clients say about our collaboration.</p>
            </div>

            <div className="testimonial-slider">
                <div className="testimonial-card">
                    <h3>"Exceptional vision<br />and execution."</h3>
                    <p className="quote-text">
                        Nicholai brought an incredible level of detail and strategic thinking to our branding project. The final result exceeded all expectations and gave our product the premium feel it was missing.
                    </p>
                    <div className="author">
                        <img src="/assets/images/placeholder.jpg" alt="Sarah Jenkins" />
                        <div className="author-info">
                            <strong>Sarah Jenkins</strong>
                            <span>CEO, FutureTech Labs</span>
                        </div>
                        <i className="ri-double-quotes-r quote-icon"></i>
                    </div>
                </div>

                <div className="testimonial-nav">
                    <button className="nav-btn"><i className="ri-arrow-left-line"></i></button>
                    <button className="nav-btn"><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </section>
    );
}
