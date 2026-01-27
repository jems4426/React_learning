import React,{ Component} from "react";
import "./card.css";

class Cardcomponent extends Component {
    render() {
        return (
            <>
                <div className="user-card ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJ4e40VeMXH_HFqZNEzwWtRTzCJXgVQ_26g&s" alt="User Avatar" className="avatar" />
                    <button className="follow-button">Follow</button>
                    <p>this is a user card</p>
                </div>
            </>
        );
    }
}

export default Cardcomponent;
