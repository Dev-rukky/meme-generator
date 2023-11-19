import { useState } from "react";
import MemeData from "./MemeData";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    });

    const [allMemeImages, setAllMemeImages] = useState(MemeData.data.memes);

    const getRandomMemeImage = () => {
        const memesArray = allMemeImages;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
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
            <img src={meme.randomImage} alt="memes" className="meme-image" />
        </div>
    );
};

export default Meme;
