# 🏠 Home Services Booking System (MERN)

A simple on-demand home services booking system that demonstrates the **core booking lifecycle**, provider assignment, admin intervention, and observability using the MERN stack.

This project is intentionally scoped to show **real-world product behavior** rather than a full production application.

---

## ✨ Features Implemented

### 1. Booking Lifecycle
- Customers can create a service booking
- Each booking moves through defined statuses:
  - `PENDING`
  - `ASSIGNED`
  - `COMPLETED`
  - `CANCELLED_BY_CUSTOMER`

---

### 2. Provider Assignment (Automatic)
- Providers are stored in the backend
- When a booking is created, the system automatically assigns an available provider
- If no provider is available, the booking remains `PENDING`

This satisfies the requirement:  
**“Assign a provider (automatic assignment OR provider accepts)”**

---

### 3. Status Updates
- Bookings can be:
  - Cancelled by the customer
  - Marked as completed (simulated via UI)
- Each status change is recorded in booking history

---

### 4. Admin / Ops Intervention
- Admin panel allows manual status updates
- Useful for handling cases like:
  - Provider no-show
  - Manual resolution
  - System correction

---

### 5. Observability
- Every booking maintains a **history log**
- History shows:
  - Status changes
  - Timestamp of each change
- State and history persist after page refresh

---

## 🖥️ Screens

- **Create Booking** – Customer creates a service request  
- **Bookings List** – View all bookings, status, history, and actions  
- **Admin Panel** – Manually override booking states  

(UI is intentionally simple as per assignment instructions.)

---

## 🧠 Design Decisions

### Why Automatic Provider Assignment?
- Simpler than building a full provider authentication flow
- Explicitly allowed by the assignment
- Demonstrates backend decision-making logic

---

### Why No Authentication / Roles?
- Not required by the assignment
- Focus kept on booking lifecycle
- Avoids unnecessary complexity

---

### Why History Is Stored Inside Booking?
- Easy observability
- Simple audit trail
- No need for separate event tables for this scope

---

### Why Completion Is Triggered from UI?
- Represents service completion
- In a real system, this would be done by the provider
- Here it is simulated to demonstrate lifecycle transitions

---

## ⚖️ Trade-Offs & Assumptions

### Trade-Offs
- No provider dashboard
- No authentication
- No payments
- Minimal UI styling

### Assumptions
- One provider handles one booking at a time
- Provider availability is a boolean flag
- Admin can override states if needed

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm

---

### 1. Clone the Repository
```bash
git clone https://github.com/Jaydev-Mod/Home-Services-App.git
cd HomeServicesApp
```

---

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/home_services
```

Start backend:
```bash
npm run dev
```

---

### 3. Seed a Provider (Required for Assignment)

Insert this document into the `providers` collection:

```json
{
  "name": "Ramesh",
  "skills": ["AC Repair", "Sofa Cleaning"],
  "isAvailable": true
}
```

---

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

Open:
```
http://localhost:5173
```

---

## 🧪 How to Verify Requirements

1. Create booking → status `PENDING`
2. Provider exists → status `ASSIGNED`
3. Cancel booking → status `CANCELLED_BY_CUSTOMER`
4. Complete booking → status `COMPLETED`
5. Refresh page → data persists
6. Admin override → reflected correctly
7. History → shows all state changes

---

## 📌 Assignment Coverage Checklist

✔ Create booking  
✔ Assign provider (automatic)  
✔ Partner workflow (simulated)  
✔ Booking lifecycle updates  
✔ Failure handling  
✔ Manual admin intervention  
✔ Observability  
✔ Simple UI (2–3 screens)  

---

## 📝 Final Notes

This project focuses on **clarity, correctness, and scope discipline**.  
It demonstrates how a booking system can be modeled and managed without unnecessary complexity.
