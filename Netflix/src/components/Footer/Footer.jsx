import React from 'react'
import './footer.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram'
// import XIcon from "@mui/icons-material/X";
import YouTubeIcon from '@mui/icons-material/YouTube'
const Footer = () => {
  return (
		<>
			<div className="footer">
				<div className="footerdiv">
					<div className="footericon">
						<FacebookIcon />
						{/* <XIcon /> */}
						<InstagramIcon />
						<YouTubeIcon />
					</div>
					<div className="footerdata">
						<div>
							<ul>
								<li>Audio Description</li>
								<li>Investor Relations</li>
								<li>Legal Notice</li>
							</ul>
						</div>

						<div>
							<ul>
								<li>Help Center</li>
								<li>Jobs</li>
								<li>Cookie Preferences</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>Terms of Use</li>
								<li>Privacy</li>
								<li>Corporate Information</li>
							</ul>
						</div>
						<div>
							<ul>
								<li>Media Center</li>
								<li>Privacy</li>
								<li>Contact Us</li>
							</ul>
						</div>
					</div>
					<div className="sercode">
						<p>Service Code</p>
					</div>
					<div className="cwrite">&copy; 1997-2025 Netflix, Inc.</div>
				</div>
			</div>
		</>
	);
}

export default Footer