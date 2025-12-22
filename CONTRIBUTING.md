# Contributing

Thank you for considering contributing to this repository! Your contributions help improve the project and make it more robust. Below is a guide on how to contribute effectively.

---

## How to Contribute

### By Reporting Bugs

If you find a bug, please report it using the [issue tracker](https://github.com/your-username/custom-rainbowkit-backend) on GitHub. When reporting bugs:

- Be as detailed as possible.
- Include steps to reproduce the issue.
- Provide a minimal code example if applicable.
- Specify your environment (Node.js version, OS, browser, etc.).

This helps us fix the bug faster and more reliably.

---

### By Suggesting New Features

If you have ideas for new features:

1. Create a new issue on the [issue tracker](https://github.com/your-username/custom-rainbowkit-backend).  
2. Use the feature template if provided.
3. Mention related issues or discussions.

For more casual discussions, you can join our [Discord server](https://discord.gg/your-server-link) to brainstorm ideas.

---

### By Writing Code

If you want to contribute code:

1. Fork the repository on GitHub.  
2. Create a named branch for your feature or fix (e.g., `add_siwe_endpoint`).  
3. Make your changes.  
4. Test your changes locally.  
5. Submit a Pull Request to the `main` (or `dev`) branch.

**Optional but recommended:** Open an issue first if your feature is significant. This allows discussion and avoids duplicating work.

A team member will review your PR, and either:

- Merge it
- Request changes
- Close it with explanation

---

### Code Style

To keep the codebase consistent:

- This project uses **ESLint** for linting and **Prettier** for formatting.
- Run the following commands before committing:

```bash
# Check for linting issues
pnpm lint

# Automatically fix linting issues
pnpm lint:fix

# Format all code
pnpm format
