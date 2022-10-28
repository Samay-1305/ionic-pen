import "./popular_section.styles.css";


function PopularSection() {
  // Todo: Make this an API call instead
  const popular_urls = [
    "https://ionic-pen-public-assets.s3.amazonaws.com/book_cover_6.jpeg",
    "https://ionic-pen-public-assets.s3.amazonaws.com/book_cover_5.jpeg",
    "https://ionic-pen-public-assets.s3.amazonaws.com/book_cover_2.jpeg",
    "https://ionic-pen-public-assets.s3.amazonaws.com/book_cover_1.jpeg",
    "https://ionic-pen-public-assets.s3.amazonaws.com/book_cover_4.jpeg",
  ];

  return (
    <div className="popular-section-container">
      <h1 className="popular-text">Popular Now</h1>
      <div>
      {popular_urls.map((url) => {
        return (
          <a href="https://google.com" key={url}>
            <img className="popular-cover-image" src={url} width="100" height="180" />
          </a>
        );
      })}

      </div>
    </div>
  );
}

export default PopularSection;