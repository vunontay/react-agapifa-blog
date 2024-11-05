import { Icon } from "@iconify/react/dist/iconify.js";
import "./header.css";
import { Textfield } from "../../ui/input/textfield/textfield";

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                {/* ICON */}
                <div className="header-icon">
                    <img src="../icon.png" alt="Logo" />
                    <h1>AGAPIFA</h1>
                </div>
                {/* MENU */}
                <nav className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-item">trang chủ</li>
                        <li className="header-menu-item">danh mục</li>
                        <li className="header-menu-item">
                            blog <Icon icon={"icon-park-outline:down"} />
                        </li>
                    </ul>
                </nav>
                {/* SEARCH */}
                <div className="header-search">
                    <Textfield
                        placeholder="Search..."
                        icon={<Icon icon="lucide:search" />}
                    />
                </div>
                <div className="header-social">
                    {/* SOCIAL */}
                    <ul className="header-social-icons">
                        <li>
                            <Icon icon="cib:facebook" />
                        </li>
                        <li>
                            <Icon icon="cib:github" />
                        </li>
                        <li>
                            <Icon icon="cib:instagram" />
                        </li>
                        <li>
                            <Icon icon="cib:twitter" />
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";
export { Header };
