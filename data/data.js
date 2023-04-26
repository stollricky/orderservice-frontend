import orders from "@/pages/orders";

export const findAllOrders = () => {
    return fetch('http://localhost:9001/orders')
        .then(response => response.json());
};
