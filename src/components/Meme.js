import { useState, useEffect } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    });

    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
            .then(data => setAllMemeImages(data.data.memes) )
    }, [])

    const getRandomMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="meme-form">
            <div className="form">
                <div className="input-field-con">
                    <input 
                        type="text"
                        placeholder="Enter something" 
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter something else"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="btn-con">
                    <button onClick={getRandomMemeImage}>Get a new meme image 🖼️</button>
                </div>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    );
};

export default Meme;
