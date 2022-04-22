import React from 'react'
import './card.css'



const Card = (props) => {
  let path = props.responce;
  console.log(path)

  return (
          <>
                <div className="main">
                    {
                      path.map((ele , index)=>{


                        return  <div className="card">
                           <img src={ele.Poster} alt="" />
              <div>
                <span>Name :</span><h1>{ele.Title}</h1>
              </div>
             
              <div>
                <span>Release:</span><h1>{ele.Year}</h1>
              </div>
                        </div>
                        


                      })
                    }
                
                </div>
              
          </>
          )
}

      export default Card;