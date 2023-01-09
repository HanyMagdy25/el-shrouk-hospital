import React, { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
const url_main = "https://el-shrouk-hospital-dashboard.technomasrsystems.com";
function NewsInsideMainContent({ articleInside, loadingArticle }) {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      {loadingArticle ? (
        <Spinner />
      ) : (
        <div className="newsInsideMainContent container px-5 lg:px-0">
          <div className="heroNewsInsideContent__images mt-2">
            <div className="heroNewsInsideContent__images__selected">
              <img
                src={`${url_main}/uploads/news/${articleInside.id}/${articleInside?.images[selectedImage]}`}
                alt={articleInside?.title}
                className="image__mainStyle md:rounded-lg"
              />
            </div>
            <div className="heroNewsInsideContent__images__right">
              {articleInside.images.map((item, index) => (
                <img
                  key={index}
                  src={`${url_main}/uploads/news/${articleInside.id}/${item}`}
                  alt="news"
                  onClick={() => setSelectedImage(index)}
                  className={index === selectedImage ? "" : "some-blur"}
                />
              ))}
            </div>
          </div>
          <div className="newsInsideMainContent__allParagraph">
            <div className="flex gap-4 mt-4">
              <span>By : Admin</span>
              <span>{articleInside.created_at}</span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: articleInside.description }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default NewsInsideMainContent;
