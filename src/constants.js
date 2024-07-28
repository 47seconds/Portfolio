export const MY_SUMMARY = `I'm a Full Stack MERN Developer who loves working with both frontend and backend technologies. I take pride in writing clean, maintainable code that scales well. I'm enthusiastic about developing applications that bring my ideas to life and exploring new tech. Always eager to learn and grow, I'm constantly on the lookout for opportunities to pick up new skills and experiences.`;

export const EXPERIENCES = [
    {
        year: '2023-PRESENT',
        position: 'Sub-Lead Events Team',
        company: 'E-Cell @ IIIT Sonepat',
        description: `Duties involve planning and managing events. Discussing upcoming opportunities and planning events accordingly.`,
    },
]

export const PROJECTS = [
    {
        title: "Gacha",
        image: "https://project-gacha.onrender.com",
        deploymentUrl: "",
        description: `A platform for streaming short videos using the Gacha API. It enhances the user experience in streaming with video.js.`,
        extendedDescription: [`HLS Streaming: Adaptive streaming and fast video render.`, `Secure Authentication: User authentication with JWT and session management with cookies.`],
        technologies: ["HTML", "SCSS", "Tailwind","JavaScript", "React.js", "Redux", "Video.js", "Git"]
    },
    {
        title: "Gacha API",
        image: "",
        deploymentUrl: "https://github.com/47seconds/Gacha-api",
        description: `Gacha is a backend API that uses FFmpeg modules to convert and serve HLS streams with user authentication using JWT and session preservation with cookies.`,
        extended_description: [`Video Upload and Streaming: Short videos uploaded are processed to HLS format and stored in Cloudinary.`, `Authentication: User authentication is done with JWT, and sessions are preserved using cookies. Credentials are stored in MongoDB.`],
        technologies: ["JavaScript", "Node.js", "Express.js", "FFmpeg", "JWT", "MongoDB", "Cloudinary", "Git"]
    }
]

export const CONTACTS = {
    address: "Gwalior, M.P., India",
    email: "vaibhavlakshkar.12345@gmail.com",
    phone: "+91-62653-38665",
}

export const SKILLS = ["JavaScript", "HTML", "CSS", "SASS/SCSS", "Tailwind", "React.js", "Express.js", "Node.js", "MongoDB", "Cloudinary", "Redux", "Git", "C", "C++", "Python", "Bash"]