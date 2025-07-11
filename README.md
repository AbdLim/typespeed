# TypeSpeed

A modern, feature-rich typing speed test application built with React, TypeScript, and Tailwind CSS. Measure your typing speed, track your progress, and improve your keyboard skills.

![TypeSpeed Demo](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- **Real-time Typing Test**: Measure your WPM (Words Per Minute) and accuracy in real-time
- **Multiple Test Modes**: Word count (25, 50, 100, 200 words) or time limit (30s, 1m, 2m, 5m)
- **Comprehensive Statistics**: Track your progress with detailed analytics and charts
- **Customizable Settings**: Adjust test parameters to match your preferences
- **Persistent Data**: All your results and settings are saved locally
- **Modern UI**: Clean, responsive design with dark theme
- **Keyboard-First**: Optimized for keyboard navigation and typing

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/AbdLim/typespeed.git
cd typespeed
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Usage

1. **Start a Test**: Navigate to the "Test" tab and begin typing to start the test automatically
2. **View Statistics**: Check the "Stats" tab to see your typing history and progress
3. **Customize Settings**: Use the "Settings" tab to adjust test parameters
4. **Track Progress**: Monitor your WPM, accuracy, and error count in real-time

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **State Management**: React hooks with localStorage persistence
- **Code Quality**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── TypingTest.tsx  # Main typing test component
│   ├── Stats.tsx       # Statistics display
│   └── Settings.tsx    # Settings configuration
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   ├── wordGenerator.ts
│   └── testCalculations.ts
└── App.tsx            # Main application component
```

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Follow the existing code style and formatting
- Use TypeScript for all new code
- Write meaningful commit messages
- Add comments for complex logic
- Ensure all tests pass

### Areas for Contribution

- **New Features**: Additional test modes, themes, or statistics
- **Bug Fixes**: Report and fix issues
- **Documentation**: Improve README, add code comments
- **Performance**: Optimize calculations or rendering
- **Accessibility**: Improve keyboard navigation and screen reader support
- **Testing**: Add unit tests and integration tests

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide](https://lucide.dev/) for the beautiful icons

## 📊 Project Status

![GitHub stars](https://img.shields.io/github/stars/AbdLim/typespeed)
![GitHub forks](https://img.shields.io/github/forks/AbdLim/typespeed)
![GitHub issues](https://img.shields.io/github/issues/AbdLim/typespeed)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AbdLim/typespeed)

---