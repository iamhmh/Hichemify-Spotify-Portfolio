import logo from "img/hichemify.svg";
import { Icon } from "Icons";
import Menu from "components/Sidebar/Menu";
import Playlists from "components/Sidebar/Playlists";
import DownloadApp from "components/Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebar = useSelector((state) => state.player.sidebar);

  return (
    <>
      <div>
        <button
          onClick={toggleSidebar}
          className={`${isVisible && "hidden"}`}
          style={{padding: "0.8rem" }}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>

      <aside
        className={`relative w-60 pt-6 flex flex-shrink-0 flex-col bg-black ${
          isVisible ? "" : "hidden-sidebar"
        }`}
      >
          <button
            onClick={toggleSidebar}
            className={`btn-hide-on-large ${!isVisible && "hidden"} z-10`}
            style={{paddingLeft: "12rem" }}
          >
            <Icon name="menuclose" size={24} />
          </button>
        <div className="flex items-center justify-between px-6">
          <a href="/" className="mb-7">
            <img src={logo} alt="" className="h-10" />
          </a>
        </div>

        <Menu />

        <nav className="px-2 mt-6">
          <ul className="flex flex-col">
            <li>
              <NavLink
                activeClassName="bg-active text-white"
                exact
                to={"/contact"}
                className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
              >
                <span>
                  <Icon name="plus" />
                </span>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="bg-active text-white"
                to={"/hobbies"}
                className="h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                  <Icon name="heartFilled" size={12} />
                </span>
                Hobbies
              </NavLink>
            </li>
          </ul>
        </nav>

        <Playlists />

        <DownloadApp />

        {sidebar && <SidebarCover />}
      </aside>
    </>
  );
}

export default Sidebar;
