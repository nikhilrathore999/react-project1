import React, { useContext } from "react";
import { ArticleData } from "../ArticleContext";
import {useNavigate } from "react-router";
const Home = () => {
  const [artData] = useContext(ArticleData);
  const navigate=useNavigate()
  console.log(artData);
  return (
    <div className="home_page_container">
      <div style={{ display: "flex" }}>
        <div className="home_article1">
          <img onClick={()=>navigate("/category/"+artData[0].category+"/"+artData[0].data_obj[0].id)}
            style={{ width: "780px", height: "500px", borderRadius: "10px" ,cursor:"pointer"}}
            src={artData[0].data_obj[0].image}
            alt=""
          />
          <p className="home_heading">{artData[0].data_obj[0].heading}</p>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <img onClick={()=>navigate("/category/"+artData[1].category+"/"+artData[1].data_obj[4].id)}
              style={{
                width: "300px",
                height: "240px",
                marginBottom: "20px",
                borderRadius: "10px",
                cursor:"pointer"
              }}
              src={artData[1].data_obj[4].image}
              alt=""
            />
          </div>
          <div>
            <img onClick={()=>navigate("/category/"+artData[2].category+"/"+artData[2].data_obj[3].id)}
              style={{ width: "300px", height: "240px", borderRadius: "10px",cursor:"pointer" }}
              src={artData[2].data_obj[3].image}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <h2>The Latest</h2>

      <br />
      <br />

      <div style={{ display: "flex" }}>
        <div className="latest_artcle">
          <img onClick={()=>navigate("/category/"+artData[2].category+"/"+artData[2].data_obj[0].id)}
            style={{ width: "300px", height: "150px",cursor:"pointer" }}
            src={artData[2].data_obj[0].image}
            alt=""
          />
          <h3>{artData[2].data_obj[0].heading}</h3> <br />
          <p className="latest_para">{artData[2].data_obj[0].data}</p>
        </div>

        <div className="latest_artcle">
          <img onClick={()=>navigate("/category/"+artData[1].category+"/"+artData[1].data_obj[3].id)}
            style={{ width: "300px", height: "150px",cursor:"pointer" }}
            src={artData[1].data_obj[3].image}
            alt=""
          />
          <h3>{artData[1].data_obj[3].heading}</h3> <br />
          <p className="latest_para">{artData[1].data_obj[3].data}</p>
        </div>

        <div className="latest_artcle">
          <img onClick={()=>navigate("/category/"+artData[3].category+"/"+artData[3].data_obj[2].id)}
            style={{ width: "300px", height: "150px",cursor:"pointer" }}
            src={artData[3].data_obj[2].image}
            alt=""
          />
          <h3>{artData[3].data_obj[2].heading}</h3> <br />
          <p className="latest_para">{artData[3].data_obj[2].data}</p>
        </div>
      </div>

      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <h1>Latest Articles</h1>
          <br />
          <br />
          <div className="article">
            <div>
              <img onClick={()=>navigate("/category/"+artData[0].category+"/"+artData[0].data_obj[3].id)}
                style={{ width: "300px", height: "170px" }}
                src={artData[0].data_obj[3].image}
                alt=""
              />
            </div>
            <div className="article_info">
              <div className="article_header">
                {artData[0].data_obj[3].heading}
              </div>
              <div className="article_data">{artData[0].data_obj[3].data}</div>
            </div>
          </div>

          <hr style={{ maxWidth: "120%", marginLeft: "0px" }} />

          <div className="article">
            <div>
              <img onClick={()=>navigate("/category/"+artData[3].category+"/"+artData[3].data_obj[2].id)}
                style={{ width: "300px", height: "170px" }}
                src={artData[3].data_obj[2].image}
                alt=""
              />
            </div>
            <div className="article_info">
              <div className="article_header">
                {artData[3].data_obj[2].heading}
              </div>
              <div className="article_data">{artData[3].data_obj[2].data}</div>
            </div>
          </div>

          <hr style={{ maxWidth: "120%", marginLeft: "0px" }} />

          <div className="article">
            <div>
              <img onClick={()=>navigate("/category/"+artData[2].category+"/"+artData[2].data_obj[4].id)}
                style={{ width: "300px", height: "170px" }}
                src={artData[2].data_obj[4].image}
                alt=""
              />
            </div>
            <div className="article_info">
              <div className="article_header">
                {artData[2].data_obj[4].heading}
              </div>
              <div className="article_data">{artData[2].data_obj[4].data}</div>
            </div>
          </div>

          <hr style={{ maxWidth: "120%", marginLeft: "0px" }} />

          <div className="article">
            <div>
              <img onClick={()=>navigate("/category/"+artData[4].category+"/"+artData[4].data_obj[3].id)}
                style={{ width: "300px", height: "170px" }}
                src={artData[4].data_obj[3].image}
                alt=""
              />
            </div>
            <div className="article_info">
              <div className="article_header">
                {artData[4].data_obj[3].heading}
              </div>
              <div className="article_data">{artData[4].data_obj[3].data}</div>
            </div>
          </div>

          <hr style={{ maxWidth: "120%", marginLeft: "0px" }} />
        </div>






        <div style={{marginLeft:"100px"}}>
          <div className="top_stories">
            <div>
              <img onClick={()=>navigate("/category/"+artData[0].category+"/"+artData[0].data_obj[4].id)}
                style={{ width: "200px", height: "100px" }}
                src={artData[0].data_obj[4].image}
                alt=""
              />
            </div>
            <div className="article_info_div">
              <div className="article_top">{artData[0].data_obj[4].heading}</div>
              <p>{artData[0].data_obj[4].caption}</p>
            </div>
          </div>
          <hr style={{ maxWidth: "90%", marginLeft: "0px" }} />

          <div className="top_stories">
            <div>
              <img onClick={()=>navigate("/category/"+artData[3].category+"/"+artData[3].data_obj[1].id)}
                style={{ width: "200px", height: "100px" }}
                src={artData[3].data_obj[1].image}
                alt=""
              />
            </div>
            <div className="article_info_div">
              <div className="article_top">{artData[3].data_obj[1].heading}</div>
              <p>{artData[3].data_obj[1].caption}</p>
            </div>
          </div>
          <hr style={{ maxWidth: "90%", marginLeft: "0px" }} />

          <div className="top_stories">
            <div>
              <img onClick={()=>navigate("/category/"+artData[2].category+"/"+artData[2].data_obj[3].id)}
                style={{ width: "200px", height: "100px" }}
                src={artData[2].data_obj[3].image}
                alt=""
              />
            </div>
            <div className="article_info_div">
              <div className="article_top">{artData[2].data_obj[3].heading}</div>
              <p>{artData[2].data_obj[3].caption}</p>
            </div>
          </div>
          <hr style={{ maxWidth: "90%", marginLeft: "0px" }} />

          <div className="top_stories">
            <div>
              <img onClick={()=>navigate("/category/"+artData[4].category+"/"+artData[4].data_obj[0].id)}
                style={{ width: "200px", height: "100px" }}
                src={artData[4].data_obj[0].image}
                alt=""
              />
            </div>
            <div className="article_info_div">
              <div className="article_top">{artData[4].data_obj[0].heading}</div>
              <p>{artData[4].data_obj[0].caption}</p>
            </div>
          </div>
          <hr style={{ maxWidth: "90%", marginLeft: "0px" }} />

          <div className="top_stories">
            <div>
              <img onClick={()=>navigate("/category/"+artData[1].category+"/"+artData[1].data_obj[1].id)}
                style={{ width: "200px", height: "100px" }}
                src={artData[1].data_obj[1].image}
                alt=""
              />
            </div>
            <div className="article_info_div">
              <div className="article_top">{artData[1].data_obj[1].heading}</div>
              <p>{artData[1].data_obj[1].caption}</p>
            </div>
          </div>
          <hr style={{ maxWidth: "90%", marginLeft: "0px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
