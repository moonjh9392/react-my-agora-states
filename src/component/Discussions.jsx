import { useEffect, useState } from "react";

export default function Discussions(params) {
  const url = "http://localhost:4000/discussions";
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <ul className="discussions__container">
      {data
        ? data.map((ele) => {
            return (
              <div key={ele.id}>
                <li className="discussion__container">
                  <div className="discussion__avatar--wrapper">
                    <img src={ele.avatarUrl} alt={ele.author} />
                  </div>
                  <div className="discussion__content">
                    <h2 className="discussion__title">
                      <a href={ele.url}>{ele.title}</a>
                    </h2>
                    <div className="discussion__information">
                      {ele.id} / {ele.createdAt}
                    </div>
                  </div>
                  <div className="discussion__answered">
                    <div className="discussion__answered"></div>
                  </div>
                </li>
              </div>
            );
          })
        : null}
    </ul>
  );
}
