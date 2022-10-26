import React, { useState } from 'react'
import '../Newsletter/Newsletter.css'
function Newsletter() {
    const [email, setemail] = useState("")
    const [require, setrequire] = useState(false)
    // const [loading, setloading] = useState(false);
  
    // useEffect(() => {
    //   setloading(true);
    //   setTimeout(() => {
    //     setloading(false);
    //   }, 1500);
    // }, []);
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (email === "") {
        setrequire("please put in your email")
        setTimeout(() => {
          setrequire(true)
        }, 2500)
      }
      else {
        alert('sucess')
      }
    }
    return (
        <>
            {/* MAIN  */}
            <main class="main">
            {/* <!--======== NEWSLETTER =======--> */}
            <section class="newsletter section container">
                <div class="newsletter__bg grid">
                    <div>
                        <h2 class="newsletter__title">Subscribe Our <br/> Newsletter</h2>
                        <p class="newsletter__description">
                            Don't miss out on your discounts. Subscribe to our email 
                            newsletter to get the best offers, discounts, coupons, 
                            gifts and much more.
                        </p>
                    </div>

                    <form onSubmit={handleFormSubmit} class="newsletter__subscribe">
                        <input type="email" placeholder="Enter your email" class="newsletter__input" onChange={(e) => setemail(e.target.value)} value={email}/>
                        <div className="required">{require}</div>
                        <button class="button">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </section>
            </main>
        </>
    )
}

export default Newsletter