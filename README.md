# Employee Dashboard

A responsive, modern employee directory dashboard built to manage and view team members efficiently. It supports multiple views (Grid/List/Hierarchy), filtering/search, and incorporates a highly polished UI with floating sidebar navigation, responsive layout adaptations, and interactive components.

## 🚀 Tech Stack Used

- **Frontend Framework:** React 18+
- **Build Tool:** Vite (for fast, optimized bundling)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (utility-first CSS framework for rapid, responsive UI development)
- **Icons:** `lucide-react` (clean, lightweight icon library)

## 🛠️ Setup Instructions

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sandipmaurya2611/frontend-practical-assignment.git
   cd frontend-practical-assignment/dashboard
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to the local URL provided by Vite (typically `http://localhost:5173`).

## 💡 Assumptions Made

During the development of this assignment, the following assumptions and design decisions were made:

1. **Data Source:** No external backend API was provided, so `mockEmployees` data is hardcoded to simulate the application state. It contains basic attributes like ID, Name, Role, Image URL, Department Icon, and Status Colors.
2. **Functionality of UI Elements:** Visual elements like "Export", "Filter", "Add (+)", and the "Hierarchy" view are interactive placeholder buttons implemented to match the design specifications, but do not contain business logic for complex sub-menus or exporting files.
3. **Pagination:** The pagination footer is built structurally to match the design requirements (with rows-per-page dropdowns and previous/next toggles) but currently acts as a cosmetic layout element since the full mock dataset is rendered directly.
4. **Layout & Styling:**
   - Designed mobile-first utilizing standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
   - The desktop layout utilizes a uniquely styled "floating sidebar" design that snaps into an off-canvas drawer mode on smaller viewports.
   - Profile images use placeholder links (e.g., Unsplash and Pravatar) to emulate varied employee avatars.
5. **Sidebar Icons:** Where exact SVGs were not explicitly provided, the closest matching high-quality icons from the `lucide-react` set were utilized to maintain the premium feel.
