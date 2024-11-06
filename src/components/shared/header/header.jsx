import { Icon } from "@iconify/react/dist/iconify.js";
import "./header.css";
import { Textfield } from "../../ui/input/textfield/textfield";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                {/* ICON */}
                <div className="header__icon">
                    <img
                        src="../icon.png"
                        alt="Logo"
                        className="header__icon-logo"
                    />
                    <h1 className="header__icon-title">AGAPIFA</h1>
                </div>
                {/* MENU */}
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-item">trang chủ</li>
                        <li className="header__menu-item">danh mục</li>
                        <li className="header__menu-item">
                            blog{" "}
                            <Icon
                                icon={"icon-park-outline:down"}
                                className="header__menu-icon"
                            />
                        </li>
                    </ul>
                </nav>
                {/* SEARCH */}
                <div className="header__search">
                    <Textfield
                        placeholder="Search..."
                        icon={
                            <Icon
                                icon="lucide:search"
                                className="header__search-icon"
                            />
                        }
                    />
                </div>
                <div className="header__social">
                    {/* SOCIAL */}
                    <ul className="header__social-list">
                        <li className="header__social-item">
                            <Icon
                                icon="cib:facebook"
                                className="header__social-icon"
                            />
                        </li>
                        <li className="header__social-item">
                            <Icon
                                icon="cib:github"
                                className="header__social-icon"
                            />
                        </li>
                        <li className="header__social-item">
                            <Icon
                                icon="cib:instagram"
                                className="header__social-icon"
                            />
                        </li>
                        <li className="header__social-item">
                            <Icon
                                icon="cib:twitter"
                                className="header__social-icon"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";
export { Header };
