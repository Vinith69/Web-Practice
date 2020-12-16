import React from "react";
import Nav from "./../Nav";
import Footer from "./../Footer";

function Contacts() {
	return (
		<>
			<Nav color="add" />
			<div className="contactUsPage">
				<section className="donation">
					<h1>Support Us By Donating</h1>
					<div>
						<p>
							We the non-profit organization named ‘Samskrti
							Vishwa Pratistana (Reg.)’ which literally translate
							to ‘Cultural World Establishment’ focused on social
							and cultural activities from last one year. In the
							time of pandemic also we are continuing our activity
							through our social media platform.
						</p>
						<p>
							If you’re able, we’d love it if you could make a
							donation to help us achieve our mission.
						</p>
					</div>
					<div>
						<h4>Bank Details</h4>
						Name: <b>Samskruti Vishwa Pratistana</b>
						<br />
						Account No:<b> 8032000100052501 </b>
						<br />
						IFSC Code: <b>KARB0000803</b>
						<br />
						Branch:<b> Kunjibettu</b>
					</div>
				</section>
				<section className="contactUsPageSection">
					<h1>Contact Us</h1>
					<div>
						<strong>Chayanat</strong> <br />
						Budnaru Road
						<br />
						kunjibettu, Udupi – 576102
						<br />
						<br />
						+91 9845240309, +91 8073958961
						<br />
						<br />
						samskruthi.vishwa@gmail.com
						<p></p>
					</div>
				</section>
			</div>
			<Footer color="normal" />
		</>
	);
}

export default Contacts;
