import React, { useContext, useState } from "react"; // Import useState hook
import { NameArr } from "./NameContextProvider";
import { Link } from "react-router-dom";

function StudentsList() {
    const { List, favorite, setFavorite } = useContext(NameArr);
    const [buttonColors, setButtonColors] = useState({}); // Initialize button color state

    function addFavorite(favData, event) {
        event.currentTarget.disabled = true;
        setFavorite([...favorite, { id: favData.id, name: favData.name }]);
        setButtonColors(prevState => ({
            ...prevState,
            [favData.id]: "#565656" // Change button color to red (#EF4444) for the clicked button
        }));
    }

    return (
        <div>
            <div style={{ backgroundColor: "#EF4444", padding: "1.25rem", display: "flex", gap: "20px" }}>
                <h1 style={{ textDecoration: "underline", color: "white", fontSize: "1.25rem" }}> <Link to={"/"} style={{ color: "white" }}>List of Students</Link> </h1>
                <h1 style={{ textDecoration: "underline", color: "white", fontSize: "1.25rem" }}> <Link to={"/favorite"} style={{ color: "white" }}>Favorite Students</Link></h1>
            </div>
            <div>
                {List.map(function (item, index) {
                    return (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} key={item.id}>
                            <p style={{ fontSize: "1rem", margin: "0.625rem", marginTop: "1.125rem", fontWeight: "500" }}>{index + 1}.{item.name}</p>
                            <button
                                onClick={(event) => addFavorite(item, event)}
                                style={{
                                    backgroundColor: buttonColors[item.id] || "#000000", // Use buttonColors state to set background color dynamically
                                    color: "#FFFFFF",
                                    padding: "0.25rem",
                                    borderRadius: "0.375rem",
                                    marginRight: "75%"
                                }}
                            >
                                Add to Favorite
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StudentsList;
