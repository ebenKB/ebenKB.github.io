import React from 'react'
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import { ReactComponent as Overlap } from "../../assets/images/overlap.svg";
import { ReactComponent as Video } from "../../assets/images/video-camera.svg";
import { ReactComponent as Event } from "../../assets/images/calendar.svg";
import { ReactComponent as Send } from "../../assets/images/send.svg";

const Navigation = () => {

  const isActiveLink = (match, loc, current) => {
    console.log("This is the active link", match, loc);
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
              <Home className={styles.navIcon} />
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
              <Overlap className={styles.navIcon} />
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
              <Video className={styles.navIcon} />
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
              <Event className={styles.navIcon} />
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
              <Send className={styles.navIcon} />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
