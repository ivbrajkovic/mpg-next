// hero component

// const small = 'static/img/banner/baner-pocetna-768px.jpg';
// const small = 'https://via.placeholder.com/575x500';
// const medium = 'https://via.placeholder.com/991x500';
// const large = 'https://via.placeholder.com/1199x500';
// const xlarge = 'https://via.placeholder.com/1600x500';
// const large = 'static/img/banner/baner-pocetna-1200px.jpg';
// const xlarge = 'static/img/banner/baner-pocetna.jpg';

const Hero = props => {
    const banner = props.banner;
    // console.log('TCL: banner', banner);

    return (
        <section className="w3-card-4 banner hero">
            {/* <picture>
        <source media="(min-width: 1200px)" srcset="static/img/banner/baner-pocetna.jpg" />
        <source
            media="(min-width: 992px) and (max-width: 1199px)"
            srcset="static/img/banner/baner-pocetna-1200px.jpg"
        />
        <source
            media="(min-width: 768px) and (max-width: 991px)"
            scrset="https://via.placeholder.com/991x500"
        />

        <img className="img-cover" srcset="static/img/banner/baner-pocetna-768px.jpg" />
    </picture> */}

            <img
                className="img-cover"
                src={banner.small}
                srcSet={`${banner.small} 575w, ${banner.medium} 991w, ${banner.large} 1199w, ${banner.xlarge} 1600w`}
            />
            <div className="header-hero">{props.title}</div>
        </section>
    );
};

export default Hero;
