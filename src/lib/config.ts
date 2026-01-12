import type { PortfolioConfig } from './types';

export const config: PortfolioConfig = {
    name: 'Asha Kotare',
    role: 'Software developer',
    about: 'I build exceptional and accessible digital experiences for the web.',
    bio: "I am a motivated undergraduate with hands-on experience in full stack development, passionate about building efficient, user-friendly applications and writing clean, scalable code.",
    contact: {
        email: 'ashakotare@gmail.com',
        github: 'https://github.com/Asha-018',
        linkedin: 'https://www.linkedin.com/in/asha-kotare-640431352/',
        phone: '+91 7411188873',
    },
    skills: [
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'Next.js',
        'Node.js',
        'Tailwind CSS',
        'java',
    ],

    experience: [
        {
            duration: '2025',
            company: 'GN JERBI FOUNDATION NIDHI DST iTBI CENTER',
            role: 'Full stack intern',
           
            description: [
               'Completed a Full Stack AI Internship where I worked on building end-to-end applications using front-end, back-end, and AI integration, gaining hands-on experience in real-world projects.'
            ],
        },
        
    ],
    projects: [
        {
            name: 'Portfolio',
            description:
                "My personal portfolio site (the one you're on) built with React, Next.js, and Tailwind CSS to showcase my work and skills.",
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
            github: 'https://github.com',
           
        }, {
            name: 'ai-teacher-main',
            description:
                'Built an interactive AI-based teaching app that answers questions, explains topics, and guides users in real time. Designed a clean UI, managed state efficiently, and ensured smooth and responsive user interactions.',
            technologies: ['React','TypeScript', 'Tailwind CSS'],
            github: 'https://github.com/Asha-018/ai-teacher-main',
        },
        {
            name: 'WeatherWonders',
            description:
                ' Welcome to WeatherWonders, where technology meets the enchantment of meteorology. Designed for both weather enthusiasts and web developers, our platform harnesses the power of HTML, CSS, and JavaScript to create an immersive and interactive weather experience',
            technologies: [
                'HTML',
                'CSS',
                'Javascript',
                
            ],
            github: 'https://github.com/Asha-018/Weather-Wonders',
        },
       
       
        {
            name: 'Tic-Tac-Toe game',
            description:
                ' This implementation of Tic Tac Toe utilizes HTML, CSS, and JavaScript to deliver a clean, responsive, and interactive user experience.',
            technologies: ['HTML','CSS', 'Javascript'],
            github: 'https://github.com/Asha-018/Tic-Tac-Toe-',
        },
    ],
};
