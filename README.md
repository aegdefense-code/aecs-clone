# American Engineering Consultancy Services (AECS)

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF.svg)](https://vitejs.dev/)

A premium, high-performance engineering portal built for **American Engineering Consultancy Services**. This platform showcases global engineering expertise, ISO-certified testing methodologies, and innovative manufacturing solutions across diverse industries.

- [PROJECT_MANUAL](PROJECT_MANUAL.md) - **Recommended for Developers:** Technical architecture, design tokens, and system roadmap.

---

## 🗺️ Project Sitemap

The application is structured into clearly defined hubs for engineering disciplines, materials science, industrial sectors, and technology solutions.

### 🏠 Core Hubs
- **[Home](/)**: Hero showcase, "Why Choose" differentiators, featured portfolio, and leadership vision.
- **[About Us](/about)**: Corporate mission, ISO 9001:2015 recognition, and academic/research alliances.
- **[Services Overview](/services)**: A multi-disciplinary drill-down of all 9 engineering capabilities.
- **[Industries Overview](/industries)**: Portfolio of specialized applications across 6 major sectors.
- **[Projects](/projects)**: Real-world engineering case studies, simulations, and deployed industrial systems.
- **[Products](/products)**: Proprietary testing rigs, certified safety cages, and defense mobility products.
- **[Technical Resources](/resources)**: Knowledge hub, white papers, technical articles, and video demonstrations.
- **[AI & Generative Engineering](/ai)**: Generative engineering, predictive maintenance, and IoT solutions.
- **[Contact & Project Inquiries](/contact)**: Strategic engineering inquiry portal with drawing upload capabilities.

### ⚙️ Engineering Disciplines (`/services/*`)
- **[Product Manufacturing](/services/product-manufacturing)**: End-to-end mass production strategies.
- **[NPD (New Product Development)](/services/npd)**: Accelerated 7-step innovation cycles.
- **[FEA (Finite Element Analysis)](/services/fea)**: Advanced stress simulation, hyperelastic modeling, and validation.
- **[CFD & Thermal Analysis](/services/cfd-thermal)**: Aerodynamic modeling, conjugate heat transfer, and thermal management.
- **[Digital Twin Engineering](/services/digital-twin)**: Real-time sensor telemetry, physics simulation, and virtual commissioning.
- **[Mechanical Design](/services/design)**: CAD/CAM modeling, tolerance stacks, and design optimization.
- **[Rapid Prototyping](/services/prototyping)**: Additive manufacturing, 3D printing, and precision CNC machining.
- **[Testing & Certification](/services/testing)**: Global ASTM/ISO/DIN compliance for rubber, plastics, and composites.
- **[Tyre Testing](/services/tyre-testing)**: Specialized industrial testing machinery and dynamic force rigs.

### 🏭 Industrial Sectors (`/industries/*`)
- **[Automotive & Tires](/industries/automotive)**: Dynamic vehicle testing, chassis stiffness, and tire engineering.
- **[Defense & Mobility](/industries/defense-mobility)**: Ballistic-grade composite run-flats and military-spec components.
- **[Marine Engineering](/industries/marine)**: Offshore pneumatic fenders, vessel structural mechanics, and corrosion resistance.
- **[Medical Devices](/industries/medical)**: Biocompatible polymers, ISO 13485 compliance, and surgical mechanics.
- **[Consumer & Sports](/industries/consumer-sports)**: Impact-damping elastomeric structures and athletic equipment.
- **[Industrial Equipment](/industries/industrial-equipment)**: Heavy industrial machinery, safety enclosures, and pressure vessels.

### 🧪 Materials Science (`/materials/*`)
- **[Materials Overview](/materials)**: Engineering properties of advanced polymers and alloys.
- **[Rubber & Elastomers](/materials/rubber)**: High-performance elastomers and hyperelastic characterization.
- **[Plastics & Polymers](/materials/plastic)**: Advanced thermoplastic engineering and mold flow simulation.
- **[Composites](/materials/composite)**: Structural fiber-reinforced polymers and laminate failure analysis.

### ⚖️ Legal & Compliance
- **Merchant Policies**: `/policies/merchant`
- **Legal Notice**: `/policies/legal`
- **Privacy Policy**: `/policies/privacy`
- **Terms of Use**: `/policies/terms`
- **XML Sitemap**: `/sitemap.xml`

---

## 🛠️ Technical Stack

A modern, type-safe, and animation-focused stack designed for high performance and premium aesthetics.

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React 19** | Modern UI component architecture with Concurrent mode. |
| **Build Tool** | **Vite 7** | Optimized development and lightning-fast production builds. |
| **Styling** | **Tailwind CSS 4** | Utility-first styling with advanced configuration and PostCSS. |
| **Animations** | **Framer Motion** | Premium height transitions, scroll-triggered reveals, and micro-interactions. |
| **UX/UI** | **Swiper.js** | Interactive product carousels and industry showcases. |
| **Iconography** | **Lucide React** | Consistent, high-fidelity SVG icon system. |
| **Forms** | **React Hook Form** | Performant, validation-driven customer inquiries. |
| **Cloud Hosting**| **AWS Ecosystem** | S3 (Frontend), CloudFront (CDN), Lambda (API). |

### Development Plugins & Toolchain

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Vite Plugin** | `@vitejs/plugin-react` | Standard React HMR and Fast Refresh support. |
| **CSS Plugin** | `@tailwindcss/postcss` | Bridge for Tailwind 4 within the PostCSS pipeline. |
| **Autoprefixer** | `autoprefixer` | Automated vendor prefixing for cross-browser CSS support. |
| **ESLint Hooks** | `eslint-plugin-react-hooks` | Enforces React Hooks rules during development. |
| **ESLint Refresh** | `eslint-plugin-react-refresh` | Validates components for safe Hot Module Replacement. |

---

## 📖 User Manual & Operational Guide

### 1. Unified Navigation
- **Desktop Mega-Menus**: Hover over **Services** or **Industries** to reveal deep-link category menus.
- **Mobile Dropdowns**: On small screens, use the "Hamburger" icon. Sections are collapsible to prioritize navigation speed.
- **Smart Navbar**: The navbar transitions from transparent to solid white as you scroll down for maximum visibility.

### 2. Industry-Specific Details
Each industry tile (e.g., Automotive, Marine) features a **"Read More"** CTA. Clicking this takes you to a specialized sub-page containing:
- **Hero Visualization**: High-resolution specialized imagery.
- **Sector Expertise**: Breakdown of localized engineering challenges and AECS solutions.
- **Key Deliverables**: Specific outcomes for that industrial sector.

### 3. Contact & Strategic Inquiries
The **"Get in Touch"** section utilizes a streamlined form.
- **Validation**: Fields are real-time validated to ensure high-quality data collection.
- **Accessibility**: The form is keyboard-navigable and uses ARIA roles for screen readers.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher)

### Installation
```bash
git clone <repository-url>
cd aecs-clone
npm install
```

### Development
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build
Create an optimized production bundle in the `dist` folder:
```bash
npm run build
```

---

## 📂 Project Structure Walkthrough

- `/src/pages/`: Contains all main route components.
- `/src/components/`: Reusable UI elements (Navbar, Footer, Hero, Tiles).
- `/src/assets/`: Centralized hub for images (Services, Industries, Portfolio).
- `/src/App.jsx`: Main routing logic and application entry orchestration.

> [!IMPORTANT]
> **Data Synchronization**
> Industry imagery is synchronized between `Industries.jsx` and the individual landing pages. When updating an image, ensure you update both the tile data and the detail page hero.