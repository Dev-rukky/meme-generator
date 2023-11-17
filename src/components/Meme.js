import { useState } from "react";
import MemeData from "./MemeData";

const Meme = () => {
    const [memeImage, setMemeImage] = useState("");

    const getRandomMemeImage = () => {
        const memeArray = MemeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        setMemeImage(memeArray[randomNumber].url);
    };

    return (
        <div className="meme-form">
            <div className="form">
                <div className="input-field-con">
                    <input type="text" placeholder="Enter something"></input>
                    <input type="text" placeholder="Enter something else"></input>
                </div>
                <div className="btn-con">
                    <button onClick={getRandomMemeImage}>Get a new meme image 🖼️</button>
                </div>
            </div>
            {memeImage && <img src={memeImage} alt="memes" className="meme-image" />}
        </div>
    );
};

export default Meme;
