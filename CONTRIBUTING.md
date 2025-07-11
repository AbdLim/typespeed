# Contributing to TypeSpeed

Thank you for your interest in contributing to TypeSpeed! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear description** of the bug
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Environment details** (browser, OS, etc.)
- **Screenshots** if applicable

### Suggesting Enhancements

We welcome feature requests! When suggesting enhancements:

- **Describe the feature** in detail
- **Explain the use case** and benefits
- **Consider implementation** complexity
- **Check existing issues** for similar requests

### Code Contributions

#### Development Setup

1. **Fork the repository**
2. **Clone your fork**: `git clone https://github.com/yourusername/typespeed.git`
3. **Create a branch**: `git checkout -b feature/your-feature-name`
4. **Install dependencies**: `npm install`
5. **Start development server**: `npm run dev`

#### Code Style Guidelines

- **TypeScript**: Use strict typing, avoid `any`
- **React**: Use functional components with hooks
- **Formatting**: Use Prettier (configured in project)
- **Naming**: Use descriptive names for variables and functions
- **Comments**: Add comments for complex logic
- **Imports**: Group imports (React, third-party, local)

#### Commit Message Format

Use conventional commits format:

```
type(scope): description

feat(typing): add new test mode
fix(stats): resolve calculation error
docs(readme): update installation instructions
style(components): improve button styling
refactor(utils): optimize word generation
test(typing): add unit tests for accuracy calculation
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

#### Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Ensure all tests pass**: `npm run lint`
4. **Test in multiple browsers** if UI changes
5. **Update CHANGELOG.md** with your changes
6. **Create a descriptive PR** with clear title and description

### Testing

#### Manual Testing Checklist

- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices
- [ ] Test keyboard navigation
- [ ] Test with different screen sizes
- [ ] Test localStorage functionality
- [ ] Test all test modes and settings

#### Automated Testing

We're working on adding automated tests. For now, please:

- Test your changes thoroughly
- Consider edge cases
- Test error scenarios

## 📋 Issue Templates

### Bug Report Template

```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Browser: [e.g. Chrome 120]
- OS: [e.g. macOS 14.0]
- TypeSpeed Version: [e.g. 1.0.0]

## Additional Context
Any other context, screenshots, etc.
```

### Feature Request Template

```markdown
## Feature Description
Brief description of the feature

## Use Case
Why is this feature needed?

## Proposed Implementation
How could this be implemented?

## Alternatives Considered
Other approaches that were considered

## Additional Context
Any other context, mockups, etc.
```

## 🏗️ Project Structure

### Key Directories

- `src/components/` - React components
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions
- `src/styles/` - CSS and styling utilities

### Code Organization

- **Components**: One component per file
- **Hooks**: Custom hooks in separate files
- **Types**: Centralized in `types/index.ts`
- **Utils**: Pure functions, no side effects

## 🎯 Areas for Contribution

### High Priority

- [ ] **Testing**: Add unit tests and integration tests
- [ ] **Accessibility**: Improve keyboard navigation and screen reader support
- [ ] **Performance**: Optimize calculations and rendering
- [ ] **Error Handling**: Better error boundaries and user feedback

### Medium Priority

- [ ] **Themes**: Add light theme option
- [ ] **Statistics**: More detailed analytics and charts
- [ ] **Word Lists**: Additional word categories (technical, programming, etc.)
- [ ] **Export**: Export results to CSV/JSON

### Low Priority

- [ ] **Multiplayer**: Real-time typing competitions
- [ ] **Custom Texts**: Allow users to input their own text
- [ ] **Sound Effects**: Typing sounds and feedback
- [ ] **Animations**: More sophisticated UI animations

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)

## 🆘 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general discussion
- **Code Review**: Ask for help in PRs

## 🙏 Recognition

Contributors will be recognized in:

- **README.md** contributors section
- **CHANGELOG.md** for significant contributions
- **GitHub contributors** page

Thank you for contributing to TypeSpeed! 🚀 