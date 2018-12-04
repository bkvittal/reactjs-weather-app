import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <p>Form Component</p>
                <form onSubmit={this.props.getWeather}>
                    <input name="city" placeholder="eg. New York"></input>
                    <input name="country" placeholder="eg. US"></input>
                    <button>Search</button>
                </form>
            </div>
        );
    }
};

export default Form;