import React from "react";

const GeneralInfo = () => {
    return (
        <div>
            <h3>GeneralInfo.....</h3>
            <form>
                <label>First name...</label>
                <input type="text"></input>
                <label>Family name...</label>
                <input type="text"></input>
                <label>E-mail...</label>
                <input type="email"></input>
                <label>Phone...</label>
                <input type="number"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default GeneralInfo;
