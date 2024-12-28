import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { html } from "@codemirror/lang-html";
import styled from 'styled-components';
import { css } from "@codemirror/lang-css";
import { oneDark } from "@codemirror/theme-one-dark";
import { dracula } from "@uiw/codemirror-theme-dracula";
import "./../Css/Create.css";

const Create = () => {
    const [htmlCode, setHtmlCode] = useState('<button>check it</button>');
    const [cssCode, setCssCode] = useState('button { padding: 1vw; }');
    const [activeTab, setActiveTab] = useState("html");

    const Container = styled.div`${css}`;

    const customTheme = EditorView.theme({
        "&" : {
            backgroundColor : "#212121",
        }
    });

    const navigateTo = useNavigate();

    const handleHtmlChange = (value) => {
        setHtmlCode(value);
    };

    const handleCssChange = (value) => {
        setCssCode(value);
    };

    return (
        <div className="create-code-body">
            <div onClick={() => navigateTo("..")} className="create-code-back-button">
                <MdKeyboardBackspace style={{ fontSize: "2vw" }} />
                Go Back
            </div>
            <div className="create-code-container">
                <div className="create-code-output">
                    <Container dangerouslySetInnerHTML={{ __html: htmlCode }}/>
                </div>

                <div className="create-code-input">
                    <div className="create-code-navbar">
                        <button
                            onClick={() => setActiveTab("html")}
                            className={
                                activeTab === "html"
                                    ? "create-code-active-button"
                                    : "create-code-inactive-button"
                            }
                        >
                            <img style={{ height: "20px" }} src="./src/assets/images/html.png"/>HTML
                        </button>
                        <button
                            onClick={() => setActiveTab("css")}
                            className={
                                activeTab === "css"
                                    ? "create-code-active-button"
                                    : "create-code-inactive-button"
                            }
                        >
                            <img style={{ height: "20px" }} src="./src/assets/images/css.png" />CSS
                        </button>
                    </div>
                    <div className="create-code-input-body">
                        {activeTab === "html" && (
                            <CodeMirror className="textarea"
                                value={htmlCode}
                                extensions={[html()]}
                                theme={oneDark}
                                onChange={(value) => handleHtmlChange(value)}
                            />
                        )}
                        {activeTab === "css" && (
                            <CodeMirror className="textarea"
                                value={cssCode}
                                extensions={[css()]}
                                theme={oneDark}
                                onChange={(value) => handleCssChange(value)}
                            />
                        )}
                    </div>
                    <div className="create-code-input-bottom">
                        <button className="create-code-submit-button">Submit for review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
