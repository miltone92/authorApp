import React, { useState, useContext, useEffect } from "react";
import axios from "axios";


export const GetBooks = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/book/")
            .then(response => {
                setData(response.data);
            })

    }, [])


    return { data };
}

