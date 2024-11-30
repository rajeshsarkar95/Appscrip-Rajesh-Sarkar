import React from "react"
import styles from './About.module.css' 
import Navbar from "../Navbar/page"

export default function About() {
    return (
        <>
        <Navbar/>
        <div className="aboutContainer">
            <h1 className={styles.title}>About Us</h1>
            
            <section className={styles.content}>
                <div className={styles.mission}>
                    <h2>Our Mission</h2>
                    <p>
                        We are dedicated to delivering exceptional value through innovative 
                        solutions and outstanding service to our customers.
                    </p>
                </div>

                <div className={styles.team}>
                    <h2>Our Team</h2>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <img src="/team-member-1.jpg" alt="Team Member 1" />
                            <h3>John Doe</h3>
                            <p>Founder & CEO</p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src="/team-member-2.jpg" alt="Team Member 2" />
                            <h3>Jane Smith</h3>
                            <p>Lead Developer</p>
                        </div>
                    </div>
                </div>

                <div className={styles.values}>
                    <h2>Our Values</h2>
                    <ul>
                        <li>Innovation</li>
                        <li>Integrity</li>
                        <li>Excellence</li>
                        <li>Customer Focus</li>
                    </ul>
                </div>
            </section>
        </div>
        </>
    )
}