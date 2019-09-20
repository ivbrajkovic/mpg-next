// Extract content from json

export default function getContentFromJson(content) {
  const text = (content && content.split && content.split("\\n")) || [];

  return text.map((item, index) => {
    return (
      <>
        {((item.startsWith("-") ||
          item.startsWith("−") ||
          item.startsWith("–")) && (
          // <div className="list-item" key={index}>
          <li style={{ marginLeft: 40 }} key={index}>
            {item.substring(1)}
          </li>
        )) || <p key={index}>{item}</p>}
      </>
    );
  });
}
