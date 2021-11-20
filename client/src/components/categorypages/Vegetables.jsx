import React from 'react'
import axios from 'axios';
import Itemcard from "../Itemcard";
import { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart'


const getItems = async () => {
    try {
        const { data } = await axios.get("/getvegetables");
        return data
    } catch (error) {
        console.log(error)
    }
}


export default function Vegetables() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await getItems();
            console.log('fetch data;m', result)
            setItems(result)
        }
        fetchData()
    }, [])
    return (
        <>
            <CartProvider>
                <h1 className="text-center mt-3">All Items</h1>
                <section className="py-4 container ">
                    <div className="row justify-content-center row">
                        {
                            items.map((item, index) => {
                                return (
                                    <Itemcard
                                        img={item.image}
                                        title={item.itemname}
                                        price={item.price}
                                        item={item}
                                        key={index}
                                    />
                                )
                            })
                        }


                    </div>

                </section>
            </CartProvider>
        </>
    );
}
