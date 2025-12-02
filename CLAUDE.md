# CLAUDE.md - AI Assistant Guide

This document provides comprehensive guidance for AI assistants working with the djjung314 profile repository.

## Repository Overview

**Repository Type**: GitHub Profile README Repository
**Purpose**: This is a special repository that displays on the GitHub profile page for user `djjung314`
**Main Branch**: TBD (to be set after initial commit)
**Current Status**: Fresh repository initialization

### What is a GitHub Profile README?

When a GitHub user creates a repository with the same name as their username (djjung314/djjung314), the README.md file from this repository is automatically displayed on their GitHub profile page. This makes it a showcase for:
- Personal introduction and bio
- Skills and technologies
- Featured projects and contributions
- Contact information and social links
- Current activities and interests

## Repository Structure

```
djjung314/
├── CLAUDE.md           # This file - AI assistant guidance
├── README.md           # Profile page content (displayed on GitHub profile)
├── assets/             # Images, badges, and media files
│   └── images/         # Profile images, banners, etc.
├── .github/            # GitHub-specific configurations
│   └── workflows/      # GitHub Actions (if needed)
└── docs/               # Additional documentation (optional)
```

## Development Workflow

### Branch Strategy

**Feature Branches**: All development work should be done on feature branches
- Branch naming convention: `claude/claude-md-<identifier>-<session-id>`
- Always develop on the designated branch provided in task context
- Never push directly to main/master without permission

### Commit Guidelines

**Commit Message Format**:
```
<type>: <subject>

<body (optional)>
```

**Types**:
- `feat`: New feature or content addition
- `update`: Updates to existing content
- `fix`: Bug fixes or corrections
- `docs`: Documentation changes
- `style`: Formatting, layout changes
- `refactor`: Code/content restructuring

**Examples**:
```bash
feat: add initial profile introduction and skills section
update: refresh project showcase with latest work
fix: correct broken link to portfolio website
docs: add CLAUDE.md with repository guidelines
```

### Git Operations Best Practices

**Pushing Changes**:
```bash
# Always push with upstream tracking
git push -u origin <branch-name>

# Branch must start with 'claude/' and end with session ID
# Retry on network failure: 2s, 4s, 8s, 16s exponential backoff
```

**Fetching Updates**:
```bash
# Fetch specific branch
git fetch origin <branch-name>

# Pull specific branch
git pull origin <branch-name>
```

**Before Committing**:
```bash
# Always check status
git status

# Review changes
git diff

# Check recent commit style
git log --oneline -10
```

## Content Guidelines

### README.md Best Practices

**Structure Recommendations**:
1. **Header/Banner**: Eye-catching introduction with name and title
2. **About Me**: Brief personal/professional introduction (2-3 paragraphs)
3. **Skills & Technologies**: Organized by category (languages, frameworks, tools)
4. **Featured Projects**: 3-5 highlighted projects with descriptions
5. **GitHub Stats**: Optional - contribution graphs, language stats
6. **Contact/Connect**: Links to social media, email, portfolio
7. **Current Focus**: What you're learning or working on

**Markdown Best Practices**:
- Use proper heading hierarchy (h1 for title, h2 for sections, etc.)
- Include alt text for all images
- Use relative links for images in assets/
- Keep line length reasonable (80-100 chars) for readability
- Use emoji sparingly and purposefully
- Ensure all external links work

**Style Guidelines**:
- Maintain consistent tone (professional, casual, or balanced)
- Use active voice
- Keep content concise and scannable
- Update regularly to reflect current status
- Proofread for grammar and spelling

### Assets Management

**Images**:
- Store in `assets/images/`
- Use descriptive filenames: `profile-banner.png`, `project-screenshot.png`
- Optimize file sizes (compress images)
- Recommended formats: PNG for graphics, JPG for photos, SVG for icons
- Reference using relative paths: `![Alt text](assets/images/filename.png)`

**Badges**:
- Use shields.io for consistent badge styling
- Common categories: languages, frameworks, tools, social links
- Keep badges relevant and up-to-date

## Technology Stack Conventions

### Markdown Features

This repository primarily uses Markdown with GitHub-flavored extensions:

- **Tables**: For structured data presentation
- **Task Lists**: For tracking goals or checklists
- **Syntax Highlighting**: For code snippets
- **HTML**: Limited use for advanced formatting (centering, sizing)
- **Emoji**: GitHub emoji shortcodes (`:wave:`, `:rocket:`, etc.)

### External Services Integration

Consider integrating:
- **GitHub Stats**: github-readme-stats
- **Contribution Graphs**: github-profile-summary-cards
- **Activity Graphs**: github-readme-activity-graph
- **Badges**: shields.io
- **Typing SVG**: readme-typing-svg

## Common Tasks for AI Assistants

### Creating Initial Profile README

1. **Gather Information**: Ask user about:
   - Professional role/title
   - Key skills and technologies
   - Notable projects to feature
   - Social links and contact preferences
   - Tone preference (professional, casual, creative)

2. **Structure Content**: Use recommended sections above

3. **Add Visuals**: Include appropriate badges, stats, or images

4. **Review & Refine**: Ensure all links work and content is accurate

### Updating Profile Content

1. **Read Existing**: Always read README.md first
2. **Understand Context**: Review what's already there
3. **Make Targeted Changes**: Update only what's requested
4. **Maintain Consistency**: Match existing style and tone
5. **Test Links**: Verify any modified links still work

### Adding New Features

1. **Research First**: Check what's popular in GitHub profiles
2. **Propose Options**: Present alternatives to user
3. **Implement Carefully**: Ensure new additions enhance, not clutter
4. **Test Rendering**: Consider how it looks on GitHub

### Troubleshooting

**Common Issues**:
- **Images not displaying**: Check path, ensure file exists, verify GitHub URL
- **Badges not loading**: Verify shields.io URL format, check encoding
- **Stats not updating**: May be cached, check API limits
- **Formatting broken**: Validate Markdown syntax, check for unclosed tags

## Code Quality & Best Practices

### Markdown Linting

- Use consistent heading styles (ATX-style `#` preferred)
- One blank line between sections
- Use fenced code blocks with language identifiers
- Properly escape special characters
- Close all HTML tags

### Accessibility

- Provide alt text for all images
- Use semantic HTML when needed
- Ensure good contrast for any custom styling
- Use descriptive link text (avoid "click here")

### Performance

- Optimize image sizes (keep under 1MB each)
- Use lazy-loading images if many present
- Minimize external API calls (they can slow page load)
- Consider caching for dynamic content

## Security Considerations

**Never Include**:
- API keys or tokens
- Personal email addresses (use contact forms instead)
- Phone numbers
- Physical addresses
- Any sensitive personal information

**Safe to Include**:
- Links to professional social media
- Public portfolio/website links
- GitHub profile link
- Professional contact form links

## Resources & References

### Helpful Tools
- [GitHub Profile README Generator](https://rahuldkjain.github.io/gh-profile-readme-generator/)
- [Shields.io Badge Generator](https://shields.io/)
- [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet)

### Inspiration
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme)
- [GitHub Profile README Examples](https://github.com/elangosundar/awesome-README-templates)

## Task Checklist for AI Assistants

When working on this repository:

- [ ] Read existing README.md before making changes
- [ ] Use TodoWrite to track multi-step tasks
- [ ] Check git status before committing
- [ ] Review git diff before committing
- [ ] Write clear, descriptive commit messages
- [ ] Push to the correct feature branch
- [ ] Verify branch name follows convention
- [ ] Test that all links work
- [ ] Ensure images display correctly
- [ ] Maintain consistent formatting
- [ ] Update this CLAUDE.md if conventions change

## Notes for Future Development

This repository is currently in its initial state. As it evolves, update this document to reflect:
- Established style conventions
- Preferred layout choices
- Any automation or CI/CD setup
- Special requirements or constraints
- Lessons learned from updates

---

**Last Updated**: 2025-12-02
**Maintained By**: AI assistants working with djjung314
**Version**: 1.0.0
