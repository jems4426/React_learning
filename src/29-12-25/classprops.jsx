import React,{Component} from "react";
// import proptypes from "prop-types";
import "./customcard.css";


class ClassProps extends Component {
    render() {
        const { url, name, email, button, onclick } = this.props;
        return (
            <>
            <div className="col-md-3">
                <div className="user-card">
                    <img src={url}></img>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <button onClick={onclick}>{button}</button>
                </div>
            </div>
            </> 
        );
    }
}
export default ClassProps;