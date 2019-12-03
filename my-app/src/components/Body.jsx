
import React from 'react';

const Body = () => {

    const style = {
        
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        margin: "60px"
    }

    return (
        <div>
            <h1>World of the Butterflies</h1>
            <div className="row py-3">

                <div style={style} className="col-lg-3 col-sm-6 py-3">
                    <div className="card card-outline-danger h-100">
                        <div className="card-img-top">
                            <img  src="https://static.daktilo.com/sites/71/uploads/2018/07/12/mavi-kelebek.jpeg" className="grayscale img-fluid mx-auto d-block" alt="card image 1"></img>
                        </div>
                        <div className="card-block d-flex flex-column">
                            <p className="text-justify">Ovi lipsim diro? Duis pha codeply.</p>
                            <a href="" data-target="#profileModal" data-toggle="modal" data-caption="Tammy" data-image="//placehold.it/600x300" className="btn btn-outline-warning btn-lg btn-block text-truncate mt-auto">View Profile</a>
                        </div>
                    </div>
                </div>
                <div style={style} className="col-lg-3 col-sm-6 py-3">
                    <div className="card card-outline-danger h-100">
                        <div className="card-img-top">
                            <img src="https://res.cloudinary.com/bekirhoca-com/image/upload/c_crop,h_445,w_728,x_0,y_20/v1529188037/kelebek_yocyvy.jpg" className="grayscale img-fluid mx-auto d-block" alt="card image 1"></img>
                        </div>
                        <div className="card-block d-flex flex-column">
                            <p className="text-justify">Ovi lipsim diro? Wi, wi, garius azdipiscing elit. Duis pha codeply.</p>
                            <a href="" data-target="#profileModal" data-toggle="modal" data-caption="Tammy" data-image="//placehold.it/600x300" className="btn btn-outline-warning btn-lg btn-block text-truncate mt-auto">View Profile</a>
                        </div>
                    </div>
                </div>
                <div style={style} className="col-lg-3 col-sm-6 py-3">
                    <div className="card card-outline-danger h-100">
                        <div className="card-img-top">
                            <img src="http://4.bp.blogspot.com/-VvbHXJY7bL8/U9wdSXxsvNI/AAAAAAAAAJg/C8EecpaUaEI/s1600/avucumuzdaki-kelebek.jpg" className="grayscale img-fluid mx-auto d-block" alt="card image 1"></img>
                        </div>
                        <div className="card-block d-flex flex-column">
                            <p className="text-justify">Ovi lipsim diro? Wi, wi, garius azdipiscing elit. Duis pha codeply.</p>
                            <a href="" data-target="#profileModal" data-toggle="modal" data-caption="Tammy" data-image="//placehold.it/600x300" className="btn btn-outline-warning btn-lg btn-block text-truncate mt-auto">View Profile</a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Body;