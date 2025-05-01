# JobTrack - Job Application Tracking System

A modern web application for tracking job applications, managing resumes, and preparing for interviews.

## Features

- 🔍 Smart Job Tracking
- 📝 Resume Builder with AI suggestions
- 🎯 Interview Preparation Tools
- 📊 Analytics Dashboard
- 🔐 Secure Authentication (Email/Password, Google, GitHub)
- 💼 Job Application Management
- 📈 Progress Tracking

## Tech Stack

- Frontend: React, TypeScript, Vite
- Styling: Tailwind CSS
- Animations: Framer Motion
- Backend: Netlify Functions
- Database: MongoDB
- Authentication: Netlify Identity
- Deployment: Netlify

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Netlify account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jobtrack.git
cd jobtrack
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=jobtrack
```

4. Start the development server:
```bash
npm run dev
```

### Deployment

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy to Netlify:
```bash
netlify deploy --prod
```

## Environment Variables

Required environment variables for Netlify:

- `MONGODB_URI`: Your MongoDB connection string
- `MONGODB_DB`: Your MongoDB database name
- `NETLIFY_IDENTITY_URL`: Your Netlify Identity URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Netlify](https://www.netlify.com/) for hosting and serverless functions
- [MongoDB](https://www.mongodb.com/) for the database
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
