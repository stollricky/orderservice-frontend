import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Orders = ({ orders }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:9001/orders", {
                mode: "cors",
            });
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRefresh = async () => {
        await fetchOrders();
    };

    return (
        <>
            <Navbar />
            <h1>Orders</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <>
                    <button onClick={handleRefresh}>Refresh</button>
                    {orders && orders.length > 0 ? (
                        <ul>
                            {orders.map((order) => (
                                <li key={order.id}>
                                    <Link href={`/orders/${order.id}`} passHref={true} legacyBehavior={true}>
                                        <a>Order {order.id}</a>
                                    </Link>
                                    <div>
                                        <p>Customer ID: {order.customerId}</p>
                                        <p>Total: {order.total}</p>
                                        <p>Shipping Address: {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
                                        <p>Order Placed: {order.orderPlaced}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No orders found.</p>
                    )}
                </>
            )}
        </>
    );
};

export async function getServerSideProps() {
    try {
        const response = await fetch("http://localhost:9001/orders", {
            mode: "cors",
        });
        const orders = await response.json();
        return { props: { orders } };
    } catch (error) {
        console.error(error);
        return { props: { orders: [] } };
    }
}

export default Orders;
