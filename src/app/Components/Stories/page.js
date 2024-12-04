"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./storise.css"
import Navbar from "../Navbar/page";

function Stories() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = ["all", "technology", "lifestyle", "travel", "food"];
    const storiesList = [
        {
            id: 1,
            title: "The Future of AI Technology",
            category: "technology",
            date: "March 15, 2024",
            image: "/story1.jpg",
            excerpt: "Exploring the latest developments in artificial intelligence and its impact on our daily lives.",
            author: "John Doe",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Exploring Hidden Beaches",
            category: "travel",
            date: "March 12, 2024",
            image: "/story2.jpg", 
            excerpt: "Discovering secluded paradises around the world that are yet to be explored by tourists.",
            author: "Jane Smith",
            readTime: "4 min read"
        },
        {
            id: 3,
            title: "Healthy Living Guide",
            category: "lifestyle",
            date: "March 10, 2024",
            image: "/story3.jpg", 
            excerpt: "Tips and tricks for maintaining a balanced lifestyle in today's fast-paced world.",
            author: "Mike Johnson",
            readTime: "6 min read"
        },
    ];

    const filteredStories = selectedCategory === "all"
        ? storiesList
        : storiesList.filter(story => story.category === selectedCategory);

    return (
        <>
        <Navbar/>
        <div className="stories-container">
            <h1>Our Stories</h1>
            <div className="category-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="stories-grid">
                {filteredStories.map((story) => (
                    <div key={story.id} className="story-card">
                        <div className="story-image">
                            <Image
                                src={story.image}
                                alt={story.title}
                                width={400}
                                height={250}
                                layout="responsive"
                            />
                        </div>
                        <div className="story-content">
                            <span className="story-category">{story.category}</span>
                            <h2>{story.title}</h2>
                            <p className="story-excerpt">{story.excerpt}</p>
                            <div className="story-meta">
                                <span className="author">{story.author}</span>
                                <span className="divider">•</span>
                                <span className="date">{story.date}</span>
                                <span className="divider">•</span>
                                <span className="read-time">{story.readTime}</span>
                            </div>
                            <button className="read-more">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Stories;