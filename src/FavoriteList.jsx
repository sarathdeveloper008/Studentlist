import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NameArr } from "./NameContextProvider";

function FavoriteList() {
    var { favorite, setFavorite } = useContext(NameArr);

    function addRemove(removeid) {
        var temp = favorite.filter(function (item) {
            return item.id !== removeid;
        });
        setFavorite(temp);
    }

    return (
        <div>
            <div style={{ backgroundColor: '#EF4444', padding: '1.25rem', display: 'flex',gap:'20px',alignItems: 'center' }}>
                <h1 style={{ textDecoration: 'underline', color: 'white', fontSize: '1.25rem' }}>
                    <Link to={"/"} style={{ color: 'white' }}>List of Students</Link>
                </h1>
                <h1 style={{ textDecoration: 'underline', color: 'white', fontSize: '1.25rem' }}>
                    <Link to={"/favorites"} style={{ color: 'white' }}>Favorite Students</Link>
                </h1>
            </div>
            <div>
                {favorite.map(function (item, index) {
                    return (
                        <div style={{ display: 'flex',gap:'10%', alignItems: 'center' }} key={item.id}>
                            <p style={{ fontSize: '1rem', margin: '0.625rem', marginTop: '1.125rem', fontWeight: '500' }}>{index + 1}.{item.name}</p>
                            <button onClick={() => addRemove(item.id)} style={{ backgroundColor: '#FF0000', color: '#FFFFFF', padding: '0.25rem', borderRadius: '0.375rem' }}>Remove</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FavoriteList;
