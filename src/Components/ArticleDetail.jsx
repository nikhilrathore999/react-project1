import React,{useContext} from 'react'
import { useParams } from 'react-router'
import { ArticleData } from '../ArticleContext'

const ArticleDetail = () => {
    
    const [artData] = useContext(ArticleData);
    const {catag,catagId}=useParams();

    return (
      artData.map((article)=>{
        if(article.category===catag){
        return(
          <>
              {
                article.data_obj.map((ele,index)=>{
                  
                  if(String(ele.id)===catagId){
                  return(
                    <div key={index} className='clkd_article_info'>
                      <div className='clicked_article'>
                        <h1 style={{marginBottom:"40px"}}>{ele.heading}</h1>
                        <img style={{width:"500px",height:"250px"}} src={ele.image} alt="" />
                        <div className='para1'>{ele.data}</div>
                        <div className='para1'></div>  
                      </div>
                      <h2 style={{marginLeft:"10%"}}>Related articles</h2>
                      <div className='related_articles'>
                          <div style={{marginLeft:"200px"}} className='rel_article_list'>
                            <img style={{width:"250px",height:"150px"}} src={article.data_obj[2].image} alt="" />
                            <p style={{fontSize:"20px"}}>{article.data_obj[2].caption}</p>
                          </div>

                          <div className='rel_article_list'>
                            <img style={{width:"250px",height:"150px"}} src={article.data_obj[1].image} alt="" />
                            <p style={{fontSize:"20px"}}>{article.data_obj[1].caption}</p></div>

                          <div className='rel_article_list'>
                            <img style={{width:"250px",height:"150px"}} src={article.data_obj[4].image} alt="" />
                            <p style={{fontSize:"20px"}}>{article.data_obj[4].caption}</p>
                          </div>
                      </div>
                    </div>
                  )
                }
                return null;
                })
              }
          </>
        )
      }
      return null;
      })
    )
}

export default ArticleDetail