### A full-stack project comprising a backend service for managing orders and a frontend application for displaying large datasets efficiently using a virtual scrolling table.

---
 ## Backend for the project
This is the backend service for the Orders Project, responsible for handling data storage, APIs, and business logic.

## Features
- Cursor-based pagination for large datasets.
- Sorting by any field.
- Comprehensive API error handling and request logging.
- Data validation for incoming requests.
- Efficient database indexing for fast querying.

## Technologies Used
- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing order data.
- **Mongoose**: ODM for MongoDB.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ikbal-hussain/jgs-tex-fab

2. Install dependencies:
   ```bash
   cd jgs-tex-fab
   npm install
3. Run the server:
   ```bash
   npm run dev
   

# Frontend for the project

## Overview
This project implements a **virtual scrolling table** with infinite scrolling using `react-query` and `react-intersection-observer`. The table efficiently handles large datasets by rendering only visible rows, ensuring smooth scrolling performance and minimal memory usage.

---

## Features
1. **Virtual Scrolling**:
   - Renders only visible rows to improve performance.
   - Supports efficient data fetching with infinite scrolling.

2. **Data Fetching**:
   - Uses `react-query`'s `useInfiniteQuery` for paginated API calls.
   - Implements proper cache management to reduce redundant requests.

3. **Table Functionality**:
   - Column sorting (client-side for loaded data).
   - Loading and error states handling.
   - Responsive design for all screen sizes.


---

## Technologies Used
- **React**: Component-based UI framework.
- **react-query**: Data fetching and caching library.
- **react-intersection-observer**: Detects when elements are in the viewport.
- **CSS**: Styling for responsive and user-friendly UI.

---
## Project Images
![Virtual Scrolling Table Screenshot](https://github.com/ikbal-hussain/jgs-tex-fab/blob/main/frontend/assets/Virtual%20Scrolling%20table%20screenshot.png?raw=true)

---
## Folder Structure
```plaintext
root/
├── frontend/   # Frontend application
│   ├── components/
│   ├── hooks/
│   ├── App.jsx
│   ├── App.css
│   └── main.js
└── README.md   # Project documentation
```
