# Suhail Rajput | Software Engineer Portfolio 🚀

A professional, high-performance portfolio website built with **React** and **Styled Components**. This project showcases my journey as a Computer Science and Engineering student, featuring my work on backend systems like **QueryNexus** and system-level tools like the **System Resource Monitor**.

## 🛠️ Tech Stack

- **Frontend:** React.js (v18+), Styled Components, BaseUI
- **Routing:** React Router v5 (Configured for GitHub Pages)
- **Deployment:** GitHub Pages
- **Automation:** CI/CD via GitHub Actions

## 🧠 Key Technical Implementations

- **Automated CI/CD Pipeline:** Integrated GitHub Actions to bypass local environment constraints and ensure seamless, cloud-based builds on every push to the master branch.
- **SPA Routing Persistence:** Implemented a custom 404-redirect and receiver script logic in `index.html` and `404.html` to handle Single Page Application (SPA) routing on GitHub Pages sub-directories.
- **OpenSSL Legacy Support:** Configured build environments to support legacy OpenSSL providers, ensuring compatibility with modern Node.js versions.
- **Optimized Asset Delivery:** Direct integration of professional documents (Resume) within the public directory for reliable, cross-platform access.

## 🚀 Deployment Workflow

This project utilizes a fully automated deployment strategy. You no longer need to run manual build or deploy scripts locally.

1. Commit your changes to the `main` or `master` branch.
2. The GitHub Actions workflow triggers automatically.
3. The production bundle is generated in a Linux environment and force-pushed to the `gh-pages` branch.

## 📂 Project Structure

- `/public`: Contains static assets, `index.html`, the custom `404.html` routing fix, and `resume.pdf`.
- `/src`: Contains the React architecture, including `containers/`, `components/`, and `portfolio.js` for data management.
- `/.github/workflows/deploy.yml`: The CI/CD engine powering the automated deployments.

## 👤 Contact & Links

- **Portfolio URL:** [https://Suhail-8800.github.io/suhail_rajput_portfolio/](https://Suhail-8800.github.io/suhail_rajput_portfolio/)
- **GitHub:** [@Suhail-8800](https://github.com/Suhail-8800)
- **Project Highlight:** Check out [QueryNexus](https://github.com/Suhail-8800), my backend platform project.
