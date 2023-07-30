import React from "react";
// import card 
const Card = ( {movieData}) => {
   return (
    <>
    <div className="container">
        {movieData.map((curElem) => {
            return(
              <>
                <div className="card">
                    <img src={curElem.img} alt="" />
                    <h3>{curElem.title}</h3>
            </div>
              </>

            );
          })}
 </div>
    </>
  );
}

export default Card;
