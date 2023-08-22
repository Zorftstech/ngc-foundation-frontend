import React from "react";
import Image from "next/image";
import Styles from "../components/styles.css";

import WomenImage from "../assets/WomenImage.png";

const Beneficiaries = () => {
	return (
		<div className="container">
			<div className="sec-container">
				<div>
					<h2>
						See how we are making <br />a difference in our <br />
						community.
					</h2>
					<p>
						we have been making tremendeous difference in our <br /> community
						and around our country
					</p>
					<a href="">Learn more</a>
				</div>
				<div>
					<Image src={WomenImage} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Beneficiaries;
