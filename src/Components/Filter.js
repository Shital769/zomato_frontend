import React from 'react';
import '../Style/Filter.css';

class Filter extends React.Component{

    render(){
        return(
            <div>
                {/* <!--Navbar--> */}
                <nav className="navbar bg-danger" data-bs-theme="">
                    <div className="container">
                        <div className="navbar-brand text-danger circle">
                            <h2 className="logo">e!</h2>
                        </div>
                        <form className="d-flex nav-form">
                            <button type="button" className="btn btn-danger">Login</button>
                            <button type="button" className="btn btn-outline-light">Create an account</button>
                        </form>
                    </div>
                </nav>

                {/* <!--Filter Page--> */}
                <div className="container mb-5">
                    <h2 className="filter-heading mt-3">Breakfast Places in Mumbai</h2>

                    {/* <!--Filters--> */}
                    <div className="filter-box mt-2 pb-4">
                        <h5 className="filter-heading mt-2">Filters</h5>

                        <p className="filter-subheading">Select Location</p>

                        <select className="form-control selectLocation">
                            <option value="0" disabled>Select Location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>

                        <p className="filter-subheading mt-4">Cuisine</p>

                        <input type="checkbox" id="North_Indian" name="Cuisine" value="North Indian" /> <label for="North_Indian" className="filter-content"> North Indian</label> <br />
                        <input type="checkbox" id="South_Indian" name="Cuisine" value="South Indian" /> <label for="South_Indian" className="filter-content">South Indian</label> <br />
                        <input type="checkbox" id="Chinese" name="Cuisine" value="Chinese" /> <label for="Chinese" className="filter-content">Chinese</label> <br />
                        <input type="checkbox" id="Fast_Food" name="Cuisine" value="Fast Food" /> <label for="Fast_Food" className="filter-content">Fast Food</label> <br />
                        <input type="checkbox" id="Street_Food" name="Cuisine" value="Street Food" /> <label for="Street_Food" className="filter-content">Street Food</label> <br />
                        
                        <p className="filter-subheading mt-4">Cost For Two</p>

                        <input type="radio" id="500" name="costfortwo" value="Less than 500" /> <label for="500" className="filter-content">Less than `500</label> <br />
                        <input type="radio" id="1000" name="costfortwo" value="500 to 1000" /> <label for="1000" className="filter-content">` 500 to ` 1000</label> <br />
                        <input type="radio" id="1500" name="costfortwo" value="1000 to 1500" /> <label for="1500" className="filter-content">` 1000 to ` 1500</label> <br />
                        <input type="radio" id="2000" name="costfortwo" value="1500 to 2000" /> <label for="2000" className="filter-content">` 1500 to ` 2000</label> <br />
                        <input type="radio" id="2000+" name="costfortwo" value="2000+" /> <label for="2000+" className="filter-content">` 2000+</label> <br />

                        <h5 className="filter-heading mt-4">Sort</h5>

                        <input type="radio" id="ltoh" name="Sort" value="Price low to high" /> <label for="ltoh" className="filter-content">Price low to high</label> <br />
                        <input type="radio" id="htol" name="Sort" value="Price high to low" /> <label for="htol" className="filter-content">Price high to low</label> <br />

                    </div>

                    {/* <!--Filter Result--> */}
                    <div className="result-box mt-2">

                        {/* <!--Result-01--> */}
                        <div className="results">
                            <div className="d-flex">
                                <div className="lt-box">
                                    <img src="./img/1.png" className="img-fluid img-qs" />
                                </div>
                                <div className="rt-box">
                                    <h4 className="result-heading">The Big Chill Cakery</h4>
                                    <p className="result-subheading">FORT</p>
                                    <p className="result-text">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </div>
                            </div>
                            
                            <hr style= {{ color: 'grey' }} />

                            <div className="d-flex">
                                <div className="ll-box">
                                    <p className="result-text">CUISINES:</p>
                                    <p className="result-text">COST FOR TWO:</p>
                                </div>
                                <div className="rl-box">
                                    <p className="result-text-blue">Bakery</p>
                                    <p className="result-text-blue">₹700</p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Result-02--> */}
                        <div className="results">
                            <div className="d-flex">
                                <div className="lt-box">
                                    <img src="./img/1.png" className="img-fluid img-qs" />
                                </div>
                                <div className="rt-box">
                                    <h4 className="result-heading">The Bake Shop</h4>
                                    <p className="result-subheading">FORT</p>
                                    <p className="result-text">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </div>
                            </div>
                            
                            <hr style={{color: 'grey'}} />

                            <div className="d-flex">
                                <div className="ll-box">
                                    <p className="result-text">CUISINES:</p>
                                    <p className="result-text">COST FOR TWO:</p>
                                </div>
                                <div className="rl-box">
                                    <p className="result-text-blue">Bakery</p>
                                    <p className="result-text-blue">₹700</p>
                                </div>
                            </div>
                        </div>

                        {/* <!--Pagination--> */}
                        <div className="mt-5">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        <span> { "<" } </span>
                                    </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                    <span> { ">" } </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Filter;