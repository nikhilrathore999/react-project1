import React, { useContext } from "react";
import {useNavigate, useParams } from "react-router";
import { ArticleData } from "../ArticleContext";

const ArtcileDisplay = () => {
  const [artData] = useContext(ArticleData);
  const navigate=useNavigate();
  const {catag} = useParams();
  //console.log(artData);
  
  return (
    <>
      <div className="article_page_container">
        <div className="article_page_main">
            <h1 className="header_article">{catag.toUpperCase()}</h1>
            {
              artData.map((article)=>{
                if(catag===article.category){
                return(
                  <>
                    {
                      article.data_obj.map((ele,index)=>{
                         
                        return(
                            <>
                              <div key={index} onClick={()=>navigate("/category/"+article.category+"/"+ele.id)} className="article">
                                <div>
                                    <img
                                  style={{ width: "300px", height: "170px" }}
                                  src={ele.image}
                                  alt=""
                                />
                              </div>
                              <div className="article_info">
                                <div className="article_header">
                                  {ele.heading}
                                </div>
                                <div className="article_data">
                                  {ele.data}
                               </div>
                              </div>
                            </div>
                            <hr style={{ maxWidth: "120%", marginLeft: "0px" }} />
                            <br /><br />
                           </>
                        )
                      })
                    }
                  </>
                )}
                return null;
                }
              )
            }
        </div>
        <div  className="article_page">
          <h2>Top Stories</h2>
            {
              artData.map((article)=>{
                if(article.category===catag){
                return(
                  <>
                    {article.data_obj.map((ele,index)=>{
                      return(
                        <>
                        <div key={index} onClick={()=>navigate("/category/"+article.category+"/"+ele.id)} className="top_stories">
                            <div>
                              <img
                                style={{ width: "200px", height: "100px" }}
                                src={ele.image}
                                alt=""
                              />
                            </div>
                            <div className="article_info_div">
                              <div className="article_top">
                                {ele.heading}
                              </div>
                              <p>{ele.caption}</p>
                            </div>

                            
                          </div>    
                          <hr style={{ maxWidth: "90%", marginLeft: "0px" }} />   
                          </>
                      )
                     })}                  
                  </>
                )}
                return null;
              })
            }
        </div>
      </div>
    </>
  )
}

export default ArtcileDisplay;