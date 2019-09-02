// section5.js

const Section5 = ({ data, banner }) => {
    const header = data && data.header;
    const content1 = data && data.content1;
    return (
        <section className="m-t-xs-20-xl-40 p-relative text-center section-5">
            <div className="container p-0 banner w3-card-4 item-1">
                <img
                    className="img-cover"
                    src={banner.small}
                    srcSet={`${banner.small} 575w, ${banner.medium} 991w, ${banner.large} 1199w, ${banner.xlarge} 1600w`}
                />
            </div>

            <div className="container p-0 item-2">
                <div className="p-20 w3-card-4 float-right">
                    <h1 className="header-2-light">{header}</h1>
                    <p className="m-b-20 content-1-light">{content1}</p>
                    <div className="btn-container">
                        <button className="btn btn-light f-m-18">VIŠE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;