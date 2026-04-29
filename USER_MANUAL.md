# AECS Platform User Manual
**Platform Administration, Content Integration & Operations Guide**

**Version:** 0.1 (Draft)  
**Status:** In Development (Pre-Production)  

> **Note:** This project is currently in active development. The architecture, features, and deployment strategies outlined in this manual represent the *planned* and *in-progress* final state of the application.

---

## Table of Contents
1. [Introduction & Overview](#1-introduction--overview)
2. [System Architecture](#2-system-architecture)
3. [Operational Data Flow](#3-operational-data-flow)
4. [Administrative & Content Guide](#4-administrative--content-guide)
5. [System Configuration & Settings](#5-system-configuration--settings)
6. [Deployment & Infrastructure](#6-deployment--infrastructure)
7. [Troubleshooting](#7-troubleshooting)
8. [Support & Resources](#8-support--resources)

---

## 1. Introduction & Overview
American Engineering Consultancy Services (AECS) is a high-performance corporate portal designed for global B2B lead generation and engineering capability showcasing. The platform acts as a digital brochure and strategic inquiry portal, bridging the gap between AECS's technical expertise and prospective industrial clients.

### 1.1 Key Platform Features
- **Dynamic Service & Industry Showcase:** Interactive, multi-departmental capabilities ranging from finite element analysis (FEA) to material science.
- **B2B Lead Generation Ecosystem:** Streamlined contact forms designed to capture high-value project inquiries securely.
- **Premium UX/UI:** Fluid animations (Framer Motion), interactive carousels (Swiper.js), and a modern "Dark Corporate High-Contrast" aesthetic.
- **High-Performance Rendering:** Built on React 19 and Vite 7 to ensure lightning-fast load times and SEO-friendly accessibility.

---

## 2. System Architecture
The platform is being built on a robust architecture designed to ensure scalability, rapid content delivery, and secure lead management once fully deployed.

```text
CUSTOMER FRONTEND (AWS S3 + CloudFront)
│
▼
API MIDDLEWARE (AWS API Gateway + Lambda)
│
▼ (Email Trigger)
AWS SES RELAY (No Database)
```

### 2.1 Core Components
- **Frontend (Client Layer):** Orchestrated via React 19 and React Router. Hosted on AWS S3 and distributed via CloudFront CDN.
- **Middleware (Serverless Layer):** AWS Lambda functions exposed via API Gateway handle form validations, sanitizes inputs, and routes inquiries directly via email.

---

## 3. Operational Data Flow

### 3.1 Content & Portfolio Synchronization
While the platform will operate largely as a static/dynamic hybrid showcase, portfolio items and industry images are currently centrally managed:
1. Components request service or industry metadata upon routing.
2. High-resolution imagery (cached locally or via CDN) is loaded seamlessly with Framer Motion reveals.
3. Industry details (`Industries.jsx`) sync deeply with dedicated sub-pages for accurate technical data representation.

### 3.2 Lead Generation Lifecycle
When a prospective B2B client initiates contact through the **"Get in Touch"** portal:
1. **Validation:** React Hook Form executes client-side validation to ensure clean data entry.
2. **Submission:** The data is POSTed to the backend API.
3. **Notification:** An automated email notification is dispatched directly to the AECS sales/engineering team via AWS SES. (Note: Leads are not stored in a centralized database).

---

## 4. Administrative & Content Guide

### 4.1 Content Management
Content updates currently revolve around the React source files or the headless CMS (if integrated):
- **Updating Industries/Services:** Modify the corresponding arrays or JSON files in the `/src/data/` or directly within component structures like `Industries.jsx`.
- **Image Assets:** Add new optimized imagery to the `/src/assets/` directory and map them properly in the component routes. 

> **Critical Data Sync:** Ensure that any hero images updated on the main Industry cards are also identically updated on their respective detail sub-pages to maintain visual continuity.

### 4.2 Lead Management
To review submitted client inquiries:
1. Inquiries are routed immediately to the designated sales email inboxes.
2. Filter your inbox for leads mentioning specific departments (e.g., NPD, FEA, Mechanical Design) to distribute to internal engineering teams.

---

## 5. System Configuration & Settings

### 5.1 Environment Variables
The application and middleware rely on standard environment configurations. Essential keys include:
```bash
# Frontend Variables
VITE_API_BASE_URL=https://api.aecs-portal.com
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_key

# Backend / Middleware Variables
DATABASE_URL=postgresql://user:password@host:port/aecs_db
SMTP_HOST=smtp.mailgun.org
SMTP_USER=postmaster@aecs-portal.com
SMTP_PASS=your_smtp_password
```

### 5.2 Form Configuration
To modify the required fields in the "Get in Touch" form, navigate to the contact component and update the `React Hook Form` schema to ensure proper validation thresholds (e.g., adjusting maximum character limits for project descriptions).

---

## 6. Deployment & Infrastructure

### 6.1 Hosting & CDN
The frontend application is being optimized for future deployment on the **AWS Ecosystem** (S3 for storage, CloudFront for CDN distribution).
- **Build Process:** Running `npm run build` generates a highly minified `dist` directory which is synced to an S3 bucket.
- **Edge Caching:** CloudFront automatically caches static assets globally for immediate retrieval by international clients.

### 6.2 Production CI/CD
Deployments are handled via Git integrations. Merging code into the `main` branch automatically triggers a fresh build pipeline, running ESLint hooks and creating a new production deployment.

---

## 7. Troubleshooting

| Issue | Primary Cause | Resolution |
| :--- | :--- | :--- |
| **Contact Form Fails to Send** | API or SMTP Config | Verify `VITE_API_BASE_URL` and backend SMTP variables. |
| **Images Not Loading** | Incorrect Pathing | Ensure assets are placed in `/src/assets/` and imported correctly, not referenced with absolute local paths. |
| **Routing 404s on Refresh** | Server Rewrite Rules | Ensure the hosting provider is configured to redirect all requests to `index.html` (SPA routing). |
| **Animations Stuttering** | Heavy DOM / Old Devices | Review Framer Motion variants; consider reducing animation complexity on mobile breakpoints. |

---

## 8. Support & Resources

- **Internal Technical Lead:** AECS Tech Lead / Maintainer
- **Repository:** `github.com/aecs-org/aecs-clone`
- **Frontend Framework Docs:** [React.dev](https://react.dev/) | [Vitejs.dev](https://vitejs.dev/)
- **UI Libraries:** [Tailwind CSS](https://tailwindcss.com/) | [Framer Motion](https://www.framer.com/motion/)
