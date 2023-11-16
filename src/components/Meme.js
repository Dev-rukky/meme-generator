import MemeData from "./MemeData"

function Meme() {
    return (
        <div className="meme-form">
            <div className="form">
                <div className="input-field-con">
                    <input type="text"></input>
                    <input type="text"></input>
                </div>
                <div className="btn-con">
                    <button>Get a new meme image🖼️</button>
                </div>
            </div>
        </div>
    )
}

export default Meme