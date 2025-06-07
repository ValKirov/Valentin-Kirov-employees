# 👥 Employee Collaboration Analyzer

This is a React + Vite application that processes a CSV file to determine which pair of employees has worked together on common projects for the longest **combined** period of time.

## ✨ Features

- Upload and parse CSV files with employee-project-date data.
- Calculates overlapping work periods on the same project.
- Aggregates the total time employees have worked together across multiple projects.
- Displays the most collaborative pair of employees with total days worked together.

## 📁 CSV File Format

The application expects a CSV file with the following columns:

- `EmpID`: Employee ID
- `ProjectID`: Project ID
- `DateFrom`: Start date of participation (supports various formats)
- `DateTo`: End date (or `NULL` for ongoing projects)

(I have provided a sample .CSV file here -> **public/employees.csv**)

## 🚀 Getting Started

### 1. Clone the repository

Clone the repository

### 2. Install the project dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

## 🧩 Project Structure

src/
├── components/
│   └── ResultTable.tsx                         # Displays the top result
├── hooks/
│   ├── useParsedCsv.ts                         # CSV file parsing logic
│   └── useEmployeeCollaboration.ts             # Calculates overlapping work time
├── utils/
│   └── utils.ts                                # Date parsing helper
├── types/
│   └── globals.ts                              # Shared type definitions
├── App.tsx
└── main.tsx


## 🛠 Technologies Used

**React**

**Vite**

**TypeScript**

**Custom React Hooks**

## 📦 Build

```
npm run build
```
