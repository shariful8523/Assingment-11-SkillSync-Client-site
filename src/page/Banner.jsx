import React from 'react';
import image from '../assets/image/young-asian-female-elementary-teacher-600nw-1739611664.webp';

const Banner = () => {
    return (
        <div className="hero bg-base-200 mb-10 ">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Welcome to SkillSync</h1>
                    <p className="py-6">
                    Find the perfect tutor for your learning journey. Anytime, Anywhere.

                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
