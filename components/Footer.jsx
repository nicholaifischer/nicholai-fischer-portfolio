export default function Footer() {
    return (
        <>
            <section className="footer-cta" id="contact">
                <h2>Let&apos;s build something<br />meaningful together.</h2>
                <a href="mailto:hello@example.com" className="btn-circle-dark">
                    Drop a line <i className="ri-arrow-right-line"></i>
                </a>
            </section>

            <footer className="main-footer">
                <div className="footer-top">
                    <div className="footer-left">
                        <span>Get in touch</span>
                        <a href="mailto:hello@nicholaifischer.com">hello@nicholaifischer.com</a>
                        <p>Based in Venice, Italy<br />Working worldwide</p>
                    </div>

                    <div className="footer-center">
                        <a href="#">Dribbble <i className="ri-external-link-line"></i></a>
                        <a href="#">Behance <i className="ri-external-link-line"></i></a>
                        <a href="#">LinkedIn <i className="ri-external-link-line"></i></a>
                        <a href="#">Instagram <i className="ri-external-link-line"></i></a>
                    </div>

                    <div className="footer-right">
                        <div className="col">
                            <a href="#projects">Work</a>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="col">
                            <a href="#">Styleguide</a>
                            <a href="#">Licensing</a>
                            <a href="#">Changelog</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-logo">NF</div>
                    <div className="big-asterisk">*</div>
                </div>
            </footer>
        </>
    );
}
