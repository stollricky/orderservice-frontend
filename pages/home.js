import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const Home = () => {

    useEffect(() => {
        console.log("Component mounted!");
    }, []);

    return(
        <>
            <Navbar />
            <h1>Home Page</h1>
            Displaying home page
        </>
    );
}

export default Home;
