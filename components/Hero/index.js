// hero component

const Hero = ({ title, banner }) => {
    return (
        <section className="w3-card-4 banner hero">
            <img
                className="img-cover"
                src={banner.small}
                srcSet={`${banner.small} 575w, ${banner.medium} 991w, ${banner.large} 1199w, ${banner.xlarge} 1600w`}
            />
            <h1 className="header-hero">{title}</h1>
        </section>
    );
};

export default Hero;
