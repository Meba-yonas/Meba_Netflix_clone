import React from 'react'
import "./header.css"
import Netflix from "../../assets/netflixlogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




function Header() {
  return (
    <>
    <div className="header">
      <div className="headerdiv">
        <div className="left">
          <ul>
            <li>
              <img src={Netflix} width="100" />
            </li>
            <li>Home</li>
						<li>TvShows</li>
						<li>Movies</li>
						<li>Latest</li>
						<li>Mylist</li>
						<li>Browse by Language</li>
          </ul>
        </div>
        <div className="right">
        <ul>
						<li>
							<SearchIcon />
						</li>
						<li>
							<NotificationsNoneIcon />
						</li>
						<li>
							<AccountBoxIcon />
						</li>
						<li>
							<ArrowDropDownIcon />
						</li>
					</ul>
        </div>
      </div>
    </div>

    
    </>
  )
}


export default Header