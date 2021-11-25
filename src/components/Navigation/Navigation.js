import React from 'react'
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
// import { ReactComponent as Home } from "../../assets/images/home.png";
// import { ReactComponent as Overlap } from "../../assets/images/overlap.svg";
// import { ReactComponent as Video } from "../../assets/images/video.png";
// import { ReactComponent as Event } from "../../assets/images/ticket.png";

import Home from "../../assets/images/home.png";
import Video from "../../assets/images/video.png";
import Event from "../../assets/images/ticket.png";
import Article from "../../assets/images/article.png";

// import { ReactComponent as Article } from "../../assets/images/article.png";
// import { ReactComponent as List } from "../../assets/images/list.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
// import Location from "../../assets/images/place.png"

const Navigation = () => {

  const isActiveLink = (match, loc, current) => {
    if (!match) {
      return false;
    }
    const { pathname} = loc;
    return pathname.split("/")[1] === current
  };

  return (
    <nav className={`${styles.wrapper}`}>
      <div className={`${styles.navContent} flex`}>
        <div className="flex-1 text-center">
          <NavLink 
            to="/"
            activeClassName={styles.active}
            isActive={(match, loc) => isActiveLink(match, loc, "")}
          >
            <div className={styles.navItem}>
              {/* <Home className={styles.navIcon} /> */}
              <img src={Home} alt="" className={styles.navIcon} />
            </div>
          </NavLink>
        </div>
        <div className="flex-1 text-center">
          <NavLink 
            to="/articles"
            activeClassName={styles.active}
            isActive={(match, loc) => isActiveLink(match, loc, "articles")}
          >
            <div className={styles.navItem}>
              {/* <Article className={styles.navIcon} /> */}
              <img src={Article} alt="" className={styles.navIcon} />
            </div>
          </NavLink>
        </div>
        <div className="flex-1 text-center">
          <NavLink
            to="/videos"
            activeClassName={styles.active}
            isActive={(match, loc) => isActiveLink(match, loc, "videos")}
          >
            <div className={styles.navItem}>
              {/* <Video className={styles.navIcon} /> */}
              <img src={Video} alt="" className={styles.navIcon} />
            </div>
          </NavLink>
        </div>
        <div className="flex-1 text-center">
          <NavLink 
            to="/events"
            activeClassName={styles.active}
            isActive={(match, loc) => isActiveLink(match, loc, "events")}
          >
            <div className={styles.navItem}>
              {/* <Event className={styles.navIcon} /> */}
              <img src={Event} alt="" className={styles.navIcon} />
            </div>
          </NavLink>
        </div>
        <div className="flex-1 text-center">
          <NavLink 
            to="/places"
            activeClassName={styles.active}
            isActive={(match, loc) => isActiveLink(match, loc, "places")}
          >
            <div className={styles.navItem}>
              <Location className={styles.navIcon} />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
