// Zbirke - Detaljna - Section 2

const Section2 = ({ content }) => {
  const paragraph = (content.split && content.split("\\n")) || [];

  return (
    <div className="m-t-xs-20-xl-40 content-1 zbirke-detalji__section-2">
      {paragraph.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default Section2;
