# Portfolio Website

A customizable Next.js portfolio website that can be easily personalized by editing a single configuration file.

## Features

- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-friendly layout
- 🖼️ Profile image display
- 📄 Resume download link (Google Drive integration)
- 🔗 Social media links with enable/disable functionality
- 💼 Expandable experience section with company projects
- 🛠️ Skills section
- 📧 Contact information display
- ⚡ Built with Next.js 15 and Tailwind CSS

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Customize your portfolio:**
   Edit the `config/portfolio.ts` file with your information

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Edit the `personal` section in `config/portfolio.ts`:

```typescript
personal: {
  name: "Your Name",
  title: "Your Job Title",
  bio: "Your bio description",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, State",
  profileImage: "/profile.jpg",
  resumeUrl: "https://drive.google.com/file/d/your-resume-file-id/view"
}
```

**Profile Image:** Place your profile image in the `public` folder and update the `profileImage` path.

**Resume Link:** 
1. Upload your resume to Google Drive
2. Right-click and select "Get link"
3. Make sure it's set to "Anyone with the link can view"
4. Copy the link and paste it in the `resumeUrl` field

### Social Media Links
Enable/disable social platforms by setting `enabled` to `true` or `false`:

```typescript
social: {
  github: {
    enabled: true,
    url: "https://github.com/yourusername"
  },
  linkedin: {
    enabled: true,
    url: "https://linkedin.com/in/yourusername"
  },
  twitter: {
    enabled: false,
    url: "https://twitter.com/yourusername"
  },
  instagram: {
    enabled: false,
    url: "https://instagram.com/yourusername"
  }
}
```

### Skills
Add or remove skills from the array:

```typescript
skills: [
  "React",
  "Next.js",
  "TypeScript",
  "Your Skills Here"
]
```

### Experience
Add your work experience with expandable project details:

```typescript
experience: [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Jan 2022 - Present",
    location: "City, State",
    description: "Brief description of your role and responsibilities.",
    projects: [
      {
        title: "Project Name",
        description: "Project description and impact",
        technologies: ["Tech1", "Tech2", "Tech3"]
      }
    ]
  }
]
```

Each experience entry is expandable, showing detailed project information when clicked.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js applications.

## Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

This project is open source and available under the [MIT License](LICENSE).