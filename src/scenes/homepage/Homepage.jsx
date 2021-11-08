import developer from "../../Assests/developer.png"
export default function Homepage(){
    return(
        <header className=" py-5 vh-100">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6">
                        <h1>Hi , I'am Mohanad Alaa</h1>
                        <p>A Front-end Developer</p>
                    </div>
                    <div className="col-md-6">
                        <figure>
                            <img src={developer} alt="develoepr.png" className="img-fluid" width="90%" />
                        </figure>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}