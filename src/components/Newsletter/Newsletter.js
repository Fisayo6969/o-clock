import React, { useRef} from 'react'
// import '../Newsletter/Newsletter.css'
import Swal from "sweetalert2";
function Newsletter() {
    const emailRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const formValue = emailRef.current.value;

        if (
            formValue.trim().length > 0 && formValue.includes("@") && formValue.includes(".") && formValue.includes("com")
        )
        {
            Swal.fire({
                title: "Successful!",
                text: "Your email has been added to our list.",
                icon: "success",
            });
            event.target.reset();
        } else {
            Swal.fire({
                title: "OOPS!",
                text: "Please input a valid email address.",
                icon: "error",
            });
        }
    };

    return (
        <>
            {/* MAIN  */}
            <main className="main">
                {/* <!--======== NEWSLETTER =======--> */}
                <section className="newsletter section ">
                    <div className="newsletter__bg grid">
                        <div>
                            <h2 className="newsletter__title">Subscribe To Our <br /> Newsletter</h2>
                            <p className="newsletter__description">
                                Don't miss out on your discounts. Subscribe to our email
                                newsletter to get the best offers, discounts, coupons,
                                gifts and much more.
                            </p>
                        </div>

                        <form className="newsletter__subscribe" onSubmit={onSubmitHandler}>
                            <input type="email" placeholder="Enter your email" className="newsletter__input" ref={emailRef} />
                            <button className="button" >SUBSCRIBE</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Newsletter