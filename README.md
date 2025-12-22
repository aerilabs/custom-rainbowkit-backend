# Custom RainbowKit Backend

A **custom Sign-In with Ethereum (SIWE) backend** setup for use with RainbowKit and a React frontend.  
This configuration allows you to integrate Ethereum-based authentication into your applications with a flexible backend, while leveraging RainbowKit on the frontend.

```PNPM``` is used as the package manager of this repository.  

**ESLint** is included for code quality and linting, and **Prettier** is included for automatic code formatting. 

Together, they ensure your code is consistent, readable, and free of common errors.

---

## Features

- Customizable SIWE backend for Ethereum authentication
- Easy integration with RainbowKit and React
- Supports session management and secure wallet login
- TypeScript-ready and extendable for more complex use cases
- ESLint for catching code errors and enforcing best practices
- Prettier for consistent code formatting

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/custom-rainbowkit-backend.git
cd custom-rainbowkit-backend
```

2. Install dependencies
``` bash
pnpm install
```
3. Rename the ```env.example``` file to ```.env``` or ```.env*```

4. Set up the environment variables in your ```.env``` file

5. Start the backend server
``` bash
pnpm dev
```

6. Use the following scripts to maintain code quality
``` bash
# Check for linting issues
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code with Prettier
pnpm format
```
