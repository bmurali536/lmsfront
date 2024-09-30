import React, { useState } from "react";
import axios from 'axios'; // Make sure to install axios and import it
import PutStudent from './PutStudent'; // Assuming PutStudent is a component in your project

function Update() {
    let [eno, setEno] = useState("");
    let [data, setData] = useState({});

    let handleSubmit = (event) => {
        event.preventDefault();
        let fetch_url = 'http://127.0.0.1:8000/api/modifyapp/' + eno + '/';
        
        axios.get(fetch_url)
            .then((resp) => {
                console.log(resp);
                setData(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="update">
            <form onSubmit={handleSubmit}>
                <label>
                    Enter employee number:
                    <input type="text" onChange={(event) => setEno(event.target.value)} />
                </label>
                <br />
                <input type="submit" value="Get Data" />
            </form>
            <PutStudent stdno={data.stdno} stdClass={data.stdClass} stdname={data.stdname} />
        </div>
    );
}

export default Update;
