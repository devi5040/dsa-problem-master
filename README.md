# 🚀 DSA Pattern Master

A modern **Next.js** application for tracking your Data Structures & Algorithms (DSA) practice using a simple **spaced repetition** system. Organize solved problems, monitor revision progress, and never miss your next review session.

---

## ✨ Features

- ➕ Add new DSA problems
- 📋 View all tracked problems
- 🔁 Mark revisions as completed
- 🗑️ Delete problems
- 📅 Track next due date
- 📈 Monitor revision progress
- ⚡ Fast and responsive UI
- ☁️ Supabase-backed persistence

---

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Data Fetching:** SWR
- **Linting:** ESLint
- **Formatting:** Prettier
- **CI/CD:** GitHub Actions

---

## 🎥 Demo

See the application in action through the following screen recordings.

### ➕ Insert a Problem

https://github.com/user-attachments/assets/<insert-problem-video-id>

**What is demonstrated:**

- Adding a new DSA problem
- Selecting difficulty
- Assigning a pattern(If problem uses multiple pattern add them comma seperated)
- Setting the solved date
- Successfully adding the problem to the tracker

---

### 🔄 Update a Problem (Log Revision)

https://github.com/user-attachments/assets/<update-problem-video-id>

**What is demonstrated:**

- Logging a revision for an existing problem
- Updating the repetition count
- Automatically calculating the next revision date
- Progress indicator updates
- Marking a problem as **Mastered** after the final revision

---

### 🗑️ Delete a Problem

https://github.com/user-attachments/assets/<delete-problem-video-id>

**What is demonstrated:**

- Deleting an existing tracked problem
- Removing it from the revision tracker
- Updating the UI instantly after deletion

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm
- A Supabase project

### Clone the repository

```bash
git clone https://github.com/<your-username>/dsa-pattern-master.git
cd dsa-pattern-master
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run the development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 📂 Project Structure

```text
.
├── app/
├── components/
├── hooks/
├── lib/
├── services/
├── types/
├── public/
└── .github/
```

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build production application
npm run start     # Start production server
npm run lint      # Run ESLint
npm run format    # Format code using Prettier
npm run check     # Check formatting
```

---

## 🗄️ Database Schema

| Column     | Type    |
| ---------- | ------- |
| id         | UUID    |
| name       | TEXT    |
| pattern    | TEXT    |
| difficulty | TEXT    |
| repsDone   | INTEGER |
| solvedOn   | DATE    |

---

## 🔁 Revision Schedule

Problems follow a simple spaced repetition schedule.

| Revision | Days After Previous |
| -------- | ------------------- |
| 1        | 2 days              |
| 2        | 7 days              |
| 3        | 14 days             |
| 4        | 28 days             |

The application automatically calculates the next due date based on the current revision count.

---

## 🧪 Continuous Integration

Every push and pull request automatically runs:

- ✅ Install dependencies
- ✅ ESLint
- ✅ Prettier formatting checks
- ✅ Production build

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Commit your changes.

```bash
git commit -m "feat: add awesome feature"
```

4. Push your branch.

```bash
git push origin feature/my-feature
```

5. Open a Pull Request.

Please use the provided Issue and Pull Request templates.

---

## 📌 Roadmap

### ✅ Current Features

- [x] Add DSA problems
- [x] View tracked problems
- [x] Delete problems
- [x] Mark revisions as completed
- [x] Automatic next due date calculation
- [x] Revision progress tracking

### 🚧 Planned Features

- [ ] Edit problem details
- [ ] Search problems
- [ ] Filter by difficulty
- [ ] Filter by pattern
- [ ] Dashboard analytics
- [ ] Dark mode
- [ ] Authentication
- [ ] Import / Export data

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
