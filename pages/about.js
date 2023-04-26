import { useEffect } from "react";
import Navbar from "@/components/Navbar";

const About = () => {

    useEffect(() => {
        console.log("Component mounted!");
    }, []);

    return(
        <>
            <Navbar />
            <h1>About Page</h1>
            <p>
                Ricky Stoll
            </p>
            <p>
                About page for orderservice frontend
            </p>
        </>
    );
}

export default About;
