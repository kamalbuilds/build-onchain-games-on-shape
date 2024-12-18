
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Navigation } from "./Navigation";

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link href={"/"}>
            <div className={styles.navbarLogo}>
                <h1>Shape Game Suite</h1>
            </div>
            </Link>
            <div className={styles.navbarLinks}>
                <Link href={"/minter"}>
                    <p>Minter</p>
                </Link>
                <Link href={"/shape-marketplace"}>
                    <p>Explore</p>
                </Link>
                <Link href={"/marketplace"}>
                    <p>ShapeGame Marketplace</p>
                </Link>
                <Link href={"/character"}>
                    <p>Character Buildor</p>
                </Link>
                <Link href={"https://build-onchain-games-on-shape.vercel.app/"} target="_blank">
                    <p>3D Onchain Game Creator</p>
                </Link>
            </div>
            <Navigation /> 
        </div>
    )
};