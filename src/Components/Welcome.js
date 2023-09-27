import React from 'react';
import '../Style/Home.css';

class Welcome extends React.Component{

    render(){
        const { locationData } = this.props

        return(
            <div>
                
                {/* <!--Banner Part (upper)--> */}

                <div className="bg-cover bg-image d-flex">
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col text-end">
                                <button type="button" className="btn btn-outline-light">Login</button>
                                <button type="button" className="btn btn-outline-light">Create an account</button>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col d-flex justify-content-center">
                                <div className="text-danger circle">
                                    <h2 className="logo">e!</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col d-flex justify-content-center">
                                <h3 className="text-light line">Find the best restaurants, cafés, and bars</h3>
                            </div>
                        </div>
                        <div className="row mt-3 d-flex justify-content-center">
                            <div className="col selectbar">
                                <select className="form-control input1 py-2">
                                    { locationData.map((item) => {
                                        return(
                                            <option value={ item.location_id }>{ item.name }</option>
                                        )
                                    })}
                                    
                                </select>
                            </div>
                            <div className="col input-group searchbar">
                                <i className="input-group-text bi bi-search input2"></i>
                                <input type="text" className="form-control input2 py-2" placeholder="Search for restaurants" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Welcome;