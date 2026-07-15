# 🤖 AI CRM HCP

An AI-powered Customer Relationship Management (CRM) application for Healthcare Professionals (HCPs). This application helps pharmaceutical sales representatives manage doctor interactions using AI to log meetings, summarize conversations, search interaction history, and recommend follow-up actions.

---

## 🚀 Features

- 🤖 AI-powered chat assistant
- 📝 Log doctor interactions
- 🔍 Search doctor interaction history
- 📋 Summarize previous meetings
- 💡 AI-generated follow-up recommendations
- 📊 Dashboard with interaction statistics
- 📜 View complete interaction history
- 🎨 Modern React + Material UI interface

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Material UI
- Axios
- React Router

### Backend
- FastAPI
- LangChain
- LangGraph
- Groq LLM
- SQLAlchemy

### Database
- PostgreSQL

---

## 📂 Project Structure

```
AI-CRM-HCP/
│
├── backend/
│   ├── agent/
│   ├── services/
│   ├── app.py
│   ├── database.py
│   ├── models.py
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── ...
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/chandini1996s/AI-CRM-HCP.git
cd AI-CRM-HCP
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger API:

```
http://127.0.0.1:8000/docs
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
DATABASE_URL=your_postgresql_database_url
GROQ_API_KEY=your_groq_api_key
```

---
## 📸 Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

---

### AI Chat

![AI Chat](screenshots/chat.png)

---

### History

![History](screenshots/history.png)

---

### Search

![Search](screenshots/search.png)

---

## 🔄 Workflow

1. User enters a query in the React frontend.
2. Axios sends the request to FastAPI.
3. FastAPI invokes the LangGraph agent.
4. LangGraph selects the appropriate tool.
5. SQLAlchemy retrieves or updates PostgreSQL data.
6. Groq LLM generates an intelligent response.
7. Response is displayed in the frontend.

---

## 🎯 AI Capabilities

- Interaction Logging
- Interaction Search
- Meeting Summarization
- Follow-up Recommendation
- Conversational AI Assistant

---

## 📌 Future Improvements

- User Authentication
- Role-based Access
- Dashboard Charts
- Export Reports (PDF/Excel)
- Email Notifications
- Voice-enabled AI Assistant

---

## 👩‍💻 Developed By

**Sai Chandini**

MCA Graduate | AI & Full Stack Developer

GitHub:
https://github.com/chandini1996s

---

## 📄 License

This project is developed for educational and learning purposes.