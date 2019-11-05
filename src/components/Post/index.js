import React, { useEffect } from "react";
import "./styles.less";

const Post = () => {
  const post =
    '<p style="text-align:center;">Cuộc sống thật thú vị</p><figure class="image image-style-align-right image_resized" style="width:243px;"><img src="https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg" srcset="https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_120 120w, https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_200 200w, https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_280 280w, https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_360 360w, https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_440 440w, https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_520 520w, https://43173.cdn.cke-cs.com/eq03LoeocTKUydppJhgK/images/f7982c79d6af71c210af47c23c2f5900f22bd96ef59521a8.jpg/w_600 600w" sizes="100vw" width="600"><figcaption>mẫu th</figcaption></figure><p>abx</p><p>&nbsp;</p>';
  useEffect(() => {
    document.getElementById("post_1").className = "ck-content";
    document.getElementById("post_1").innerHTML = post;
    return () => {};
  }, []);

  return (
    <div className="app-post">
      <div id="post_1"></div>
    </div>
  );
};

export default Post;
