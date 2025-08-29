# 📊 Dashboard Assignment (Next.js + TailwindCSS)

This is my implementation of the company dashboard assignment.  
Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 📂 Project Structure

dashboard-nextjs/
├── app/
│ ├── api/
│ │ └── upload/
│ │ └── route.ts # File upload API route
│ ├── home/
│ │ └── page.tsx # Dashboard/Home page
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout (sidebar, structure)
│ └── page.tsx # Default landing page
│
├── components/
│ └── ui/
│ ├── Avatar.tsx # Avatar component
│ ├── Button.tsx # Button component
│ ├── Card.tsx # Card component
│ ├── Sidebar.tsx # Sidebar navigation
│ └── UploadsTable.tsx # Table for uploaded files
│
├── .gitignore
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
└── tailwind.config.js

## 🚀 Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components (`Card`, `Button`, `Sidebar`, etc.)
- **API**: Next.js Route Handler (`/api/upload`)

## 📸 Screenshots



## 🛠️ Setup Instructions

Clone the repo:
git clone https://github.com/your-username/dashboard-nextjs.git
cd dashboard-nextjs
Install dependencies:
npm install

Run development server:
npm run dev
App will be available at: http://localhost:3000
