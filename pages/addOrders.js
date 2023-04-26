import { useState } from "react";
import Navbar from "@/components/Navbar";
import React from 'react';

const AddOrders = () => {
    const [customerId, setCustomerId] = useState("");
    const [total, setTotal] = useState("");
    const [shippingAddress, setShippingAddress] = useState({
        city: "",
        state: "",
        postalCode: "",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:9001/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ customerId, total, shippingAddress }),
            });
            const data = await response.json();
            console.log("Order added:", data);
        } catch (error) {
            console.error("Error adding order:", error);
        }
    };

    const handleShippingAddressChange = (event) => {
        const { name, value } = event.target;
        setShippingAddress((prevShippingAddress) => ({
            ...prevShippingAddress,
            [name]: value,
        }));
    };

    return (
        <>
            <Navbar />
            <h1>Add Orders</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Customer ID:
                    <input
                        type="text"
                        name="customerId"
                        value={customerId}
                        onChange={(event) => setCustomerId(event.target.value)}
                        required // new
                    />
                </label>
                <br />
                <label>
                    Total:
                    <input
                        type="number"
                        name="total"
                        value={total}
                        onChange={(event) => setTotal(event.target.value)}
                        required // new
                    />
                </label>
                <br />
                <label>
                    Shipping Address:
                    <br />
                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={shippingAddress.city}
                            onChange={handleShippingAddressChange}
                            required // new
                        />
                    </label>
                    <br />
                    <label>
                        State:
                        <input
                            type="text"
                            name="state"
                            value={shippingAddress.state}
                            onChange={handleShippingAddressChange}
                            required // new
                        />
                    </label>
                    <br />
                    <label>
                        Postal Code:
                        <input
                            type="text"
                            name="postalCode"
                            value={shippingAddress.postalCode}
                            onChange={handleShippingAddressChange}
                            required // new
                        />
                    </label>
                </label>
                <br />
                <button type="submit">Add Order</button>
            </form>
        </>
    );
};

export default AddOrders;

