# Kidz Zone - Premium Kids Store

![Kidz Zone Banner](./public/assets/hero.png)

**Kidz Zone** is a premium e-commerce application designed for modern parents who want the best for their children. It features a curated collection of high-quality clothing, toys, and accessories, presented in a professional, trustworthy, and visually engaging digital environment.

## 🚀 Key Features

*   **Professional Design System**: Built with a custom "Professional/Trustworthy" aesthetic using `Outfit` typography, a refined color palette (Royal Blue, Soft Gold), and clean whitespace.
*   **Dual-Tier Navigation**: A sophisticated header with a utility top bar (contact info, tracking) and a sticky main navigation menu.
*   **Interactive UI**:
    *   **Animated Banner**: Staggered text reveals and smooth image entrances using `Framer Motion`.
    *   **Premium Product Cards**: Clean, borderless cards with slide-up "Quick Add" actions.
    *   **Responsive Layouts**: Optimized for mobile, tablet, and desktop viewing.
*   **Authentication**: Secure user login and registration with professional form designs (NextAuth.js).
*   **Shopping Cart**: Fully functional cart with real-time item count indicators.
*   **System Pages**: polished `Loading`, `404 Not Found`, and `Error` states for a seamless user experience.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Database**: MongoDB (via Mongoose)
*   **Authentication**: NextAuth.js
*   **Icons**: React Icons (FontAwesome)

## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kid-zone.git
    cd kid-zone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    # Database
    MONGODB_URI=your_mongodb_connection_string

    # NextAuth
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your_nextauth_secret_key

    # Google Auth (Optional)
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Navigate to [https://kid-zone-one.vercel.app](https://kid-zone-one.vercel.app) to view the application.

## 📂 Project Structure

```bash
src/
├── actions/         # Server actions (data fetching, mutations)
├── app/             # Next.js App Router pages & layouts
│   ├── (auth)/      # Authentication pages (login, register)
│   ├── blog/        # Blog feature
│   ├── cart/        # Shopping cart page
│   ├── products/    # Product listing and details
│   ├── globals.css  # Global styles & Tailwind directives
│   └── layout.jsx   # Root layout
├── components/      # Reusable UI components
│   ├── auth/        # Login/Register forms
│   ├── cards/       # Product and Item cards
│   ├── home/        # Homepage sections (Banner, Features, Newsletter)
│   └── layouts/     # Navbar, Footer, Logo
├── lib/             # Utility functions
└── provider/        # Context providers (Cart, Auth)
```

## 🎨 Design Philosophy

The design evolution moved from a "Playful/Creative" concept to a **"Professional E-commerce"** standard. The current iteration focuses on:
*   **Trust**: Through clean lines, authoritative typography, and transparent info (contact details).
*   **Clarity**: High contrast text and distraction-free layouts.
*   **Delight**: Subtle, high-quality animations that feel expensive, not gimmicky.

---

*Verified & Maintained by the Kidz Zone Dev Team.*
