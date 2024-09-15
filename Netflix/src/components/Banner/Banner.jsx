import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from '../utils/axios'
import requests from "../utils/requests";
const Banner = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request?.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
			return request;
		}

		fetchData();
	}, []);
	// console.log(movie);
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }
	return (
		<>
		
			<div
				className="row banner"
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			>
				<div className="bannercontents">
					<h1 className="bannertitle">
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className="bannerbuttons">
						<button className="bannerbutton">Play</button>
						<button className="bannerbutton">My List</button>
					</div>
					<h1 className="bannerdec">
						{truncate(movie?.overview, 150)}
					</h1>
				</div>
				<div className="bannerbottom" />
			</div>
		</>
	);
};

export default Banner;