

## 1) GOALS & CORE LOGIC
- **Primary Purpose**: High-impact corporate presence and B2B lead generation for **American Engineering Consultancy Services (AECS)**.
- **Key Functionality**: 
  - Interactive multi-departmental service showcasing (Civil, Mechanical, Electrical).
  - Advanced Industry integration (Marine, Medical, Automotive).
  - Material Science showcase (Rubber, Plastic, Composites).
  - Dynamic contact ecosystem for client inquiries.
- **Target Audience**: Global B2B industrial clients, engineering firms, and manufacturing partners.

---

## 2) GLOBAL UI/UX (SaaS Premium Aesthetic)
- **Theme**: **Dark Corporate High-Contrast**.
  - **Primary**: `#BC1E2D` (Brand Crimson).
  - **Background**: Slate-950 / Black.
  - **Accent**: Emerald/Blue for technical success indicators.
- **Key UI Elements**: 
  - **Radius**: `2.5rem` ultra-rounded corners on feature cards and sections.
  - **Typography**: Inter (Modern sans-serif) with high-weight headlines.
  - **Animations**: `framer-motion` for staggered reveals and smooth layout transitions.
  - **Icons**: Lucide React (Clean, stroke-based technical icons).
- **Navigation**: 
  - **Desktop**: Floating "Glassmorphism" navbar with multi-level mega-menus.
  - **Mobile**: Minimalist overlay trigger with ergonomic list items.

---

## 3) FULL SITE MAP (Information Architecture)

### 🏠 Public Routes
- `/` - Visual Hero Landing + Leadership Vision.
- `/services` - Master Services Hub.
  - `/services/product-manufacturing`
  - `/services/npd` (New Product Development)
  - `/services/fea` (Finite Element Analysis)
  - `/services/design`
  - `/services/prototyping`
  - `/services/testing`
  - `/services/tyre-testing`
- `/industries` - Industry Solutions Gallery.
  - `/industries/automotive`
  - `/industries/marine`
  - `/industries/medical`
  - `/industries/consumer-sports`
- `/materials` - Engineering Materials Portfolio.
  - `/materials/rubber`   
  -`/materials/plastic`
  - `/materials/composite`.
- `/resources` - Generative AI in Engineering.
- `/about` - Corporate Mission & Experience.
- `/contact` - Central Inbound Lead Form.

### ⚖️ Legal / Compliance Routes
- `/policies/legal`
- `/policies/privacy`
- `/policies/terms`
- `/policies/merchant`.

---

## 4) TECH STACK & MODULE MAPPING

### Core Infrastructure
| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | **React** | `19.2` | Modern UI orchestration with concurrent rendering. |
| **Build Tool** | **Vite** | `7.3` | Ultra-fast development server & optimized production builds. |
| **Routing** | **React Router** | `7.13` | Multi-page SPA navigation and route management. |
| **Cloud Hosting**| **AWS** | `--` | S3 for static assets, CloudFront for CDN, Lambda for APIs. |

### UI & Styling Engine
| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **CSS Framework**| **Tailwind CSS** | `4.2` | Utility-first styling with advanced design tokens. |
| **Post-Processor**| **PostCSS** | `8.5` | Modern CSS transformation and prefixing. |
| **Animations** | **Framer Motion**| `12.3` | Fluid layout transitions and scroll-driven motion. |
| **Iconography** | **Lucide React** | `0.577` | High-fidelity technical vector icons. |
| **Carousels** | **Swiper.js** | `12.1` | High-performance interactive product galleries. |

### Logic & Performance
| Category | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Form Engine** | **React Hook Form**| `7.71` | Validated lead generation and contact logic. |
| **Linting** | **ESLint** | `9.x` | Code quality and standard enforcement. |
| **Asset Mgmt** | **Vite Internal** | -- | Image optimization and dynamic asset resolution. |

### Development Plugins & Toolchain
| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Vite Plugin** | `@vitejs/plugin-react` | Standard React HMR and Fast Refresh support. |
| **CSS Plugin** | `@tailwindcss/postcss` | Bridge for Tailwind 4 within the PostCSS pipeline. |
| **Autoprefixer** | `autoprefixer` | Automated vendor prefixing for cross-browser CSS support. |
| **ESLint Hooks** | `eslint-plugin-react-hooks` | Enforces React Hooks rules during development. |
| **ESLint Refresh**| `eslint-plugin-react-refresh`| Validates components for safe Hot Module Replacement. |

---

## 5) EXECUTION ROADMAP

### PHASE 1: Initialization & Design Tokens
- [x] Configure Tailwind 4 for Brand Crimson (`#BC1E2D`) and `2.5rem` radius.
- [x] Implement glassmorphism Navigation architecture.

### PHASE 2: Core Engineering
- [x] Build multi-level mobile navigation menu.
- [x] Integrate high-impact "Leadership Vision" cinematic banner.
- [x] Develop industry-specific landing page templates.

### PHASE 3: Content & Polish
- [/] Populate technical specs for all service departments.
- [ ] Implement advanced scroll-driven animations for "Engineering Efficiency".
- [ ] Cross-device UI/UX audit.

---

> [!NOTE]
> This manual serves as the "Source of Truth" for the AECS technical architecture. Any structural changes to routes or styling tokens must be reflected here first.
