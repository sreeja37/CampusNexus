import React from "react";
import "./index.scss";
import ModalComponent from "../Modal";

export default function PostStatus(){
    return <div className="post-status-main">
        <div className="post-status">
            <button className="open-post-modal">Ask or Share</button>
        </div>
    </div>
}