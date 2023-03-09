import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Constants from '../../customUtils/Config';

const Item = () => {
    const [items, setItems] = useState([]);

    const PicApi =async () => {
        let response = await axios.get(Constants.BASE_URL + "/photos")
        setItems(response.data)
    }

    useEffect(() => {
        PicApi()
    }, [])

    return (
        <>
            {
                items.map(({url}) => {
                    return (
                        <div className="card mx-md-3 d-inline-block text-white bg-success mb-3" style={{width:"20%",marginTop:"2vh", marginLeft:"2vh"}}>
                            <img className="card-img-top" src={url} alt="Card cap" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Item;