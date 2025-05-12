import { useState } from "react";

export default function XName() {

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [fullname, setfullname] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        if (firstname.trim() && lastname.trim()) {
            setfullname(`${firstname} ${lastname}`);
        } else {
            alert("Both fields are required");
        }
    };


    return (
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={onSubmit}>
                <div>
                    First Name:{" "}
                    <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Last Name:{" "}
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {fullname && (
                <h2>Full Name: {fullname}</h2>
            )}
        </div>
    );
}
