import GalleryItem from "../Gallery/GalleryItem";
// import preloadImages from "../../../lib/preloadImages";

const DELAY = 50;

const Section2 = ({ lang, data }) => {
  const section2 = (data && data[lang] && data[lang].section2) || [];
  console.log("TCL: data.gallery", data.gallery);
  const folder = data.folder || "";

  return (
    <>
      {section2 &&
        section2.map &&
        section2.map((item, index) => {
          const gallery = data.gallery.filter(img => {
            return new RegExp(item.src, "i").test(img);
            // img.toLowerCase().includes(item.src.toLowerCase())
            // );
            // return img.toLowerCase().includes(item.src.toLowerCase());
            // img.toLowerCase().includes(item.src.toLowerCase());
          });
          // console.log("TCL: large", large);
          // console.log("TCL: item.src", item.src);
          // console.log("TCL: gallery", gallery);
          // console.log("TCL: gallery.length", gallery.length);

          return (
            <div
              className="postav-page__section2"
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="header-2">{item.title}</h1>
              <p className="content-1">{item.content}</p>

              <div className="d-grid gap-xs-20-xl-30">
                {gallery.map((item, index) => {
                  return (
                    <GalleryItem
                      key={index}
                      thumb={
                        folder +
                        item.replace(/(.*)(\.jpg|\.png)/gim, "$1-tmb$2")
                      }
                      large={folder + item}
                      style={{ transitionDelay: `${index * DELAY}ms` }}
                    />
                  );
                })}
              </div>

              {/* <img
                src={item.src || "https://via.placeholder.com/350"}
                alt="lorem pics"
              /> */}
            </div>
          );
        })}
    </>
  );
};

export default Section2;
