export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-top">
                <div className="hero-image-small">
                    <img src="/assets/images/hero_new.png" alt="Abstract shape" />
                </div>
            </div>

            <h1 className="hero-title">
                I&apos;m <span className="script-font">Nicholai</span>,<br />
                a <span className="italic">Product Designer</span><br />
                based in <span className="italic">Venice</span>
            </h1>

            <p className="hero-sub">
                I have 8 years of experience building brands and digital<br />
                products that define startups and established series.
            </p>
        </section>
    );
}
