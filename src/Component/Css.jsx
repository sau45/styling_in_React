import React from 'react'

function Css() {
  return (
   <>
   <div class="card" style={{background: "linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%)", 
		    padding: "12px 0", 
            border:"10px solid black",
		    width: "300px", 
		    borderRadius: "30px",
		    color: "white",
		    fontWeight: "bold",
		    fontFamily: "Segoe UI, sans-serif"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
   </>
  )
}

export default Css