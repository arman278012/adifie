import "./getintouch.css"

const GetinTouch = () => {
    return (
        <div className=" mb-10 mt-10">
            <section className="contact w-[70vw] py-5 sm:mt-1 mx-auto" id="contact">
                <div className="container">
                    <div className="heading text-center">
                        <h2><span className="text-[#dc2626]">Get in </span> 
                             Touch</h2>
                        <p className="text-[18px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            <br />incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row flex sm:flex-row flex-col gap-5">

                        <div className="content ">
                            <img className="sm:h-[50vh] rounded-2xl bg-cover bg-no-repeat" src="./ads2.jpg" alt="img" />
                        </div>

                        <div className="col-md-7 w-auto sm:mt-0 mt-10">

                            <form>
                                <div className="row flex sm:flex-row flex-col">

                                    <div className="col-sm-6">
                                        <input type="text" className="form-control sm:w-72 sm:h-auto w-full h-[30px]" placeholder="Name" />
                                    </div>

                                    <div className="col-sm-6">
                                        <input type="email" className="form-control sm:w-72 w-full sm:ml-7 sm:h-auto h-[30px]" placeholder="Email" />
                                    </div>

                                </div>

                                <div className="col-sm-12">
                                    <input type="text" className="form-control sm:w-full w-full sm:h-auto h-[30px]" placeholder="Subject" />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control sm:w-full w-full sm:h-auto h-auto" rows="5" id="comment" placeholder="Message"></textarea>
                                </div>
                                <button className="sm:w-[120px] w-full sm:w-auto  bg-[#dc2626] hover:bg-[#fc0505] p-2 rounded-md text-white" type="submit">Send Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetinTouch