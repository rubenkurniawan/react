import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }
  render() {
    return (
<div>
    <footer className="footer">
		<div className="row-fluid">
			<div className="span2">
				<h5>Your Account</h5>
				<a href="#">YOUR ACCOUNT</a><br/>
				<a href="#">PERSONAL INFORMATION</a><br/>
				<a href="#">ADDRESSES</a><br/>
				<a href="#">DISCOUNT</a><br/>
				<a href="#">ORDER HISTORY</a><br/>
			</div>
			<div className="span2">
				<h5>Iinformation</h5>
				<Link to="/Contact">CONTACT</Link><br/>
				<a href="#">SITEMAP</a><br/>
				<a href="#">LEGAL NOTICE</a><br/>
				<a href="#">TERMS AND CONDITIONS</a><br/>
				<Link to="/About">ABOUT US</Link><br/>
			</div>
			<div className="span2">
				<h5>Our Offer</h5>
				<a href="#">NEW PRODUCTS</a> <br/>
				<a href="#">TOP SELLERS</a><br/>
				<a href="#">SPECIALS</a><br/>
				<a href="#">MANUFACTURERS</a><br/>
				<a href="#">SUPPLIERS</a> <br/>
			</div>
			<div className="span6">
				<h5>The standard chunk of Lorem</h5>
			The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
			those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et 
			Malorum" by Cicero are also reproduced in their exact original form, 
			accompanied by English versions from the 1914 translation by H. Rackham.
			</div>
		</div>
	</footer>
</div>
    );
  }
}

export default NavBar;