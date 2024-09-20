
# Angular 18 Boilerplate

This repository is a boilerplate for Angular 18 projects, set up with standalone components and without using zone.js (zoneless). The goal is to provide a solid and modern base for starting new Angular projects with the following integrated technologies:

## Technologies and Libraries Installed
- **Angular 18**: Main framework for web application development.
- **Standalone Components**: Allows creating independent components without the need for modules.
- **Zoneless**: Removal of zone.js to improve performance and give more control over change detection.
- **PrimeNG**: Rich UI component library for Angular.
- **Tailwind CSS**: Utility-first CSS framework for quick and responsive styling.

## Purpose of the Repository
The purpose of this repository is to speed up the start of new Angular projects by providing an initial setup that already includes the most commonly used tools and libraries in modern applications. Additionally, we aim to standardize contributions through a predefined Pull Request template, ensuring consistency and quality in collaborative development.

## How to Start

### Prerequisites
- Node.js (recommended LTS version)
- npm (Node.js package manager)
- Angular CLI (installed globally)

### Installation
Clone the repository:
```bash
git clone https://github.com/yourusername/angular18-boilerplate.git
```

Navigate to the project directory:
```bash
cd angular18-boilerplate
```

Install the dependencies:
```bash
npm install
```

### Running the Application
Start the development server:
```bash
ng serve
```

Access `http://localhost:4200/` in your browser to see the running application.

## Project Structure
- `src/`: Application source code.
- `app/`: Main components and services.
- `assets/`: Static files such as images and fonts.
- `environments/`: Environment configurations.
- `.github/`: Templates for Pull Requests and GitHub Actions Workflows.
- `tailwind.config.js`: Tailwind CSS configuration.
- `package.json`: Project dependencies and scripts.

## How to Contribute
Thank you for your interest in contributing to this project! Please read the `CONTRIBUTING.md` file for details on our code of conduct and the process for submitting Pull Requests.

## Pull Request Template
To standardize contributions, we use a predefined Pull Request template. Make sure to follow the template when submitting your contributions.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

We hope this boilerplate is useful for your projects and accelerates the development process!
