import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './Services.css';

function Services() {
  return (
<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>

<section class="section services-section" id="services">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="section-title">
                    <h2>What We Do</h2>
                    <p>From Crop Management and Soil Analysis to Livestock Health and Nutritional Consulting, We've Got You Covered.</p>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-desktop"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Crops Inspection</h5>
                        <p>Thorough Crop Inspection by Our Expert Agronomists to Maximize Your Yield Potential.</p>
                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Seek Expert Advice</h5>
                        <p>Get Expert Advice from Our Experienced Agronomists and Improve Your Agricultural Productivity.</p>
                    </div>
                </div>
            </div>
            
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-comment"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Farmers Community</h5>
                        <p>Join Our Farmers Community and Connect with Like-minded Individuals for Knowledge-sharing and Support.</p>
                    </div>
                </div>
            </div>
         
            
            <div class="col-sm-6 col-lg-4">
                <div class="feature-box-1">
                    <div class="icon">
                        <i class="fa fa-th"></i>
                    </div>
                    <div class="feature-content">
                        <h5>Order Tracking</h5>
                        <p>Track Your Order in Real-time and Stay Up-to-date with Your Agricare Deliveries</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>
		</div>
  );
}

export default Services;
