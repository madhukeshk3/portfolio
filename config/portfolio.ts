import type { PortfolioConfig } from '../types/portfolio';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Madhukesh Kumar",
    title: "Backend Developer",
    bio: "Passionate developer with expertise in modern web technologies. I love creating beautiful and functional applications.",
    email: "madhukeshk3@gmail.com",
    phone: "+91 9386625096",
    location: "Bangalore, India",
    profileImage: "/profile.jpg",
    resumeUrl: "https://drive.google.com/file/d/your-resume-file-id/view"
  },
  social: {
    github: {
      enabled: true,
      url: "https://github.com/johndoe"
    },
    linkedin: {
      enabled: true,
      url: "https://linkedin.com/in/johndoe"
    },
    twitter: {
      enabled: false,
      url: "https://twitter.com/johndoe"
    },
    instagram: {
      enabled: false,
      url: "https://instagram.com/johndoe"
    }
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Docker"
  ],
  experience: [
    {
      company: "AWS Opensearch",
      position: "SDE-2",
      duration: "Jan 2025 - Present",
      location: "Bangalore, India",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      projects: [
        {
          title: "Customer Metrics Visualisation",
          description: [
            "Led the development of customer metrics visualization dashboard",
            "Implemented real-time data processing and visualization",
            "Improved customer insights and decision-making capabilities",
            "Reduced data analysis time by 70% for business teams"
          ],
          technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
        },
        {
          title: "Real-time Analytics Dashboard",
          description: [
            "Built a comprehensive analytics dashboard for tracking user behavior",
            "Implemented real-time data visualization with interactive charts",
            "Integrated with multiple data sources and APIs",
            "Enabled data-driven decision making for the marketing team"
          ],
          technologies: ["Next.js", "Socket.io", "Redis", "Chart.js"]
        },
        {
          title: "Mobile App API",
          description: [
            "Developed RESTful APIs for the company's mobile application",
            "Implemented authentication and authorization systems",
            "Optimized for high performance serving 100k+ users",
            "Created comprehensive API documentation and testing suite"
          ],
          technologies: ["Express.js", "MongoDB", "JWT", "Docker"]
        }
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      duration: "Jun 2020 - Dec 2021",
      location: "Remote",
      description: "Developed user interfaces for a fast-growing fintech startup, focusing on user experience and performance.",
      projects: [
        {
          title: "Customer Onboarding Flow",
          description: [
            "Created an intuitive onboarding process for new users",
            "Implemented step-by-step guided user experience",
            "Reduced user drop-off by 60% through UX improvements",
            "Added progress tracking and validation features"
          ],
          technologies: ["React", "TypeScript", "Styled Components"]
        },
        {
          title: "Payment Integration System",
          description: [
            "Integrated multiple payment gateways with unified interface",
            "Implemented secure transaction processing and validation",
            "Added support for multiple currencies and payment methods",
            "Created seamless checkout experience for users"
          ],
          technologies: ["React", "Stripe API", "PayPal SDK", "Webhook handling"]
        }
      ]
    }
  ]
};