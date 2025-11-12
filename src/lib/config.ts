import type { PortfolioConfig } from './types';

export const config: PortfolioConfig = {
    name: 'Asha Kotare',
    role: 'full-stack-developer',
    about: ' a full stack developer passionate about creating clean, user-friendly web applications.',
    bio: "With over a decade of experience, I've transformed complex problems into elegant, user-friendly solutions. My passion lies in crafting pixel-perfect UIs and writing clean, scalable code. When I'm not coding, I enjoy exploring new hiking trails and photography.",
    contact: {
        email: 'ashakotare@gmail.com',
        github: 'https://github.com/Asha-018',
        linkedin: 'linkedin.com/in/asha-kotare-640431352',
        // twitter: 'https://twitter.com',
        phone: '+91 7411188873',
    },
    skills: [
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'Next.js',
        'Node.js',
        'Tailwind CSS',
        'mongodb',
        'Figma',
        // 'Storybook',
        // 'Testing (Jest, RTL)',
        // 'CI/CD',
    ],
    experience: [
        {
            duration: '2025 — Present',
            company: 'GN JERBI FOUNDATION NIDHI DST iTBI CENTER',
            role: 'full-stack-Ai-intern',
          
            description: [
                'During my Full Stack AI internship, I gained hands-on experience in developing both frontend and backend applications using technologies like React.js, Node.js, Express.js, and MongoDB. As part of the program, I developed a Task Manager App that allows users to create, update, and manage tasks efficiently, and a Personal Portfolio Website to showcase my projects and skills. This internship helped me strengthen my understanding of API development, database management, and AI-integrated web solutions, while improving my problem-solving, teamwork, and deployment skills in a real-world development environment.',
            ],
        },
       
    ],
    projects: [
        {
            name: 'Portfolio ',
            description:
                "My personal portfolio site (the one you're on) built with React, Next.js, and Tailwind CSS to showcase my work and skills.",
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
            github: 'https://github.com/Asha-018/modern-portfolio-master',
            link: '',
        },
        {
            name: 'E-Commerce Platform',
            description:
                'A full-stack e-commerce application with features like product search, cart functionality, and Stripe integration for payments.',
            technologies: [
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'Stripe API',
            ],
            github: 'https://github.com',
        },
        {
            name: 'Task Management App',
            description:
                'A Kanban-style task management tool with drag-and-drop functionality, user authentication, and real-time collaboration.',
            technologies: [
                'React',
                'Firebase',
                'React DnD',
                'Styled Components',
            ],
            github: 'https://github.com',
            link: 'https://example.com',
        },
        
    ],
};
