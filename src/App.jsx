import "./App.css";
import "../src/page/detail-page/index.css";
import { Button } from "./components/ui/button/button";
import { Header } from "./components/shared/header/header";
import "../../agapifa-blog/src/page/detail-page/index.css";
import tagsData from "./data/tagList.json";
import categoriesData from "./data/categories.json";
import { useEffect, useState } from "react";

function App() {
    const [tags, setTags] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Load categories data from categories.json
        setCategories(categoriesData.data.record);
    }, []);

    useEffect(() => {
        // Load tags data from tagsData and set it into state
        setTags(tagsData.data.record);
    }, []);

    return (
        <>
            <Header />
            <div className="detail-page">
                <h1 className="detail-page__title">
                    Form validator in Flutter with EzValidator
                </h1>
                <p className="detail-page__meta">
                    Admin - ngày 03 tháng 11 năm 2024
                </p>

                <div className="detail-page__image-container">
                    <img
                        className="detail-page__image"
                        src="./image 1.png"
                        alt="Post Thumbnail"
                    />
                </div>

                <div className="detail-page__description">
                    <p>
                        When I am working on Flutter with form. For ensuring
                        data integrity, and handling user input errors. I want
                        to show an error message below each TextField, Dropdown,
                        Switch, ... if the user does not input or wrong input.
                        The EzValidator helps me to resolve this issue.
                    </p>
                    <p>
                        In this article, we will explore how to validate user
                        inputs in Flutter with the EzValidator package.
                    </p>
                    <div className="detail-page__contents">
                        <span className="detail-page__contents-title">
                            Contents
                        </span>
                        <ol className="detail-page__contents-list">
                            <li className="detail-page__contents-item">
                                Prerequisites
                            </li>
                            <li className="detail-page__contents-item">
                                Implementation
                            </li>
                            <li className="detail-page__contents-item">Demo</li>
                        </ol>
                    </div>
                    <p className="detail-page__section-title">
                        Prerequisites <br />
                        Ensure the VSCode and Flutter are installed on your
                        local. If not installed yet, you should follow up with
                        the steps below.
                    </p>
                    <ul className="detail-page__steps-list">
                        <li className="detail-page__steps-item">
                            Download and install VSCode <a href="#">here</a>
                        </li>
                        <li className="detail-page__steps-item">
                            Download and install Flutter <a href="#">here</a>
                        </li>
                        <li className="detail-page__steps-item">
                            Set up the VSCode editor to complete, deploy, and
                            debug the app <a href="#">here</a>
                        </li>
                    </ul>
                </div>

                <div className="detail-page__tags">
                    <div className="detail-page__tags-type">
                        <h2 className="detail-page__tags-header">THỂ LOẠI</h2>
                        {/* Render categories dynamically */}
                        <div className="detail-page__categories">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className="detail-page__tags-button-default"
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Render tags dynamically */}
                    <div className="detail-page__tags-card">
                        <h2 className="detail-page__tags-header">THẺ</h2>
                        <div className="detail-page__tags-buttons">
                            {tags.map((post) => (
                                <Button
                                    key={post.id} // Ensure each button has a unique key
                                    className="detail-page__tags-button"
                                    variant="outline"
                                >
                                    {post.title}{" "}
                                    {/* Display post title dynamically */}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
