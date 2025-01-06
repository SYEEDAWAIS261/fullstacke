import "../../../App.css"


const NewsLetter = () =>{
    return(
        <>
        <div className="NewLetter pb-5">
            <div className="container gx-0">
                <div className="row gx-0">
                    <div className="col-md-6">
                        <div className="NewLetter_col1">
                        <h2>Join Us & Get Updates</h2>
                        <p>Sign for exclusive offers, latest news and updates</p>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="NewLetter_col2">
                    <form action="">
                    <div className="form-input d-flex">
                        <input type="email" placeholder="Please enter your  Email" className="form-control mx-3" />
                        <button type="submit" className="main_btn rounded-5">Subscribe</button>
                    </div>


                    </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
export default NewsLetter;