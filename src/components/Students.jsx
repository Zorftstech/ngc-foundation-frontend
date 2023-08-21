import React from "react";
import Image from "next/image";

import PinkGirl from "../assets/PinkGirl.png";
import PurpleStudent from "../assets/PurpleStudent.png";
import BlueStudents from "../assets/BlueStudents.png";

const Students = () => {
	return (
		<div className="beneContainer">
			<h2 className="bene">Beneficiaries</h2>
			<div className="beneImgs">
				<div className="beneImgDiv">
					<Image
						className="EachbeneImgs"
						src={PinkGirl}
						alt="picture of a beneficiary"
					/>
					<p>
						I have been owing for so many terms that it affected my studies,
						thanks to ngc foundation, they paid all my debts
					</p>
				</div>
				<div className="beneImgDiv">
					<Image
						className="EachbeneImgs"
						src={BlueStudents}
						alt="picture of beneficiaries"
					/>
					<p>
						We have both been affected by finances but a kind donor was able to
						come through for us through ngc foundation.
					</p>
				</div>
				<div className="beneImgDiv">
					<Image
						className="EachbeneImgs"
						src={PurpleStudent}
						alt="picture of a beneficiary"
					/>
					<p>
						Taking care of my school fees has been difficult for my family but i
						am greatful that an ngo like this could help us.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Students;
