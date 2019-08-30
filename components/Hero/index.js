// hero component

const Hero = props => {
    const banner = props.banner;

    return (
        <section className="w3-card-4 banner hero">
            <img
                className="img-cover"
                src={banner.small}
                srcSet={`${banner.small} 575w, ${banner.medium} 991w, ${banner.large} 1199w, ${banner.xlarge} 1600w`}
            />
            <div className="header-hero">{banner.title}</div>
        </section>
    );
};

export default Hero;
