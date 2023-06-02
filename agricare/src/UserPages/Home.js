import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../UserPages/Navbar';
import Section from '../UserPages/Section';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Style.css';

function Home() {
  return (

	<>
	<div> <h1 className="caption2">Welcome to AgriCare</h1>
<div/>



<footer class="footer-distributed">

			<div class="footer-left">

				<h3><span> Agri Care  </span></h3>

				
				<p class="footer-company-name">Agri Care © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Kohe Noor</span> Faisalabad, Pakistan</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+923161433233</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@agricare.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Agricare is a company dedicated to providing high-quality agricultural products and services to farmers around the world. Our mission is to help farmers grow healthy crops and increase their yields through the use of innovative technologies and sustainable practices.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    </div>
	
	</>
  );
}

export default Home;





















































/*import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../UserPages/Navbar';
import Section from '../UserPages/Section';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Style.css';

function Home() {
  return (
    <div>
      <h1 className="caption2">Welcome to AgriCare</h1>

   
      <div className="section-box">
        <Section
          title="Welcome"
          subtitle="Welcome to AgriCare, your one-stop destination for all your agricultural needs. We are dedicated to providing the best quality products and services to help you achieve maximum yield and profitability in your farming endeavors."
          image="https://eige.europa.eu/sites/default/files/styles/eige_original_optimised/public/images/agriculture.jpg?itok=YXbQPCXw"
        />
        <Section
          title="Our Services"
          subtitle="We offer a wide range of services to our clients, including soil testing, crop consulting, seed and fertilizer sales, and more. Our team of experts is always available to help you achieve your farming goals."
          image="https://t3.ftcdn.net/jpg/03/53/90/26/360_F_353902612_50KBBFgYmLYYtDkEC4xedtng4ZaqasKV.jpg"
        />
      </div>
      <div className="section-box">
        <Section
          title="About Us"
          subtitle="Agricare is a company dedicated to providing high-quality agricultural products and services to farmers around the world. Our mission is to help farmers grow healthy crops and increase their yields through the use of innovative technologies and sustainable practices."
          image="https://png.pngtree.com/thumb_back/fh260/back_pic/03/52/11/86579339b4ca51c.jpg"
        />
        <Section
          title="Contact Us"
          subtitle="If you have any questions or would like to learn more about our products and services, please feel free to contact us. We look forward to hearing from you!"
          image="https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-agricultural-science-and-technology-data-science-background-image_784023.jpg"
        />
      </div>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3><span> Agri Care  </span></h3>

				
				<p class="footer-company-name">Agri Care © 2023</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Kohe Noor</span> Faisalabad, Pakistan</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+923161433233</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@agricare.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Agricare is a company dedicated to providing high-quality agricultural products and services to farmers around the world. Our mission is to help farmers grow healthy crops and increase their yields through the use of innovative technologies and sustainable practices.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
    </div>
  );
}

export default Home;*/
