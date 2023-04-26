import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import backgroundImage from "images/image.png"; // import the image

import Image from "next/image";

const Home = () => {
    useEffect(() => {
        console.log("Component mounted!");
    }, []);

    return (
        <div className={styles["home-background"]}>
            <Navbar />
            <h1>Welcome to the Home Page</h1>
            <p>Displaying home page</p>
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                    src={backgroundImage}
                    layout="fill"
                    objectFit="cover"
                    alt="Background"
                />
            </div>
        </div>
    );
};

export default Home;

