import React from 'react'

function Bluff() {
    return (
        <div className='relative min-h-screen bg-black' >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full shadow-lg rounded-xl"
            >
                <source
                    src="https://v1.pinimg.com/videos/mc/720p/c4/d9/f7/c4d9f72b2bc8efb0a262c502a07e8cc7.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <p className='text-white absolute bottom-1/4 w-full text-center z-10 font-bold tex-2xl'>Yeh Product Nahi ha !</p>
        </div>
    )
}

export default Bluff