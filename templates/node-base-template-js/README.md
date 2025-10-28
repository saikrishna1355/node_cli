# 🧠 NODE Backend API

A system built with **Node.js**, supporting:

- JWT-based authentication
- MongoDB & MySQL support
- Jobs, queues, logging, migrations, and seeders
- Multi-environment config (dev, SIT, UAT, production)
- PM2 process manager with clustering support

---

## 🚀 Features

- 🔐 JWT Login / Authentication / Authorization
- 🗃️ Database abstraction (MySQL / MongoDB)
- 🧩 Modular service structure
- 📦 Job Queue system
- 📝 Daily log rotation with Winston
- 🧪 Environment-specific configs
- ⚙️ PM2 process management (dev/prod modes)
- 📁 Migrations and Seeders support

---

## 📁 Project Structure

```
├── src/
│   ├── app.js               # Entry point
│   ├── config/
│   ├── models/
│   ├── services/
│   ├── middlewares
│   ├── Repositories/
│   ├── routes/
│   ├── jobs/
│   ├── utils/
├── ecosystem.json
├── .env
```

---

## 🛠️ Setup

### 1. Clone & Install

<!-- ```bash
git clone https://github.com/your-name/crm-backend.git
cd crm-backend
npm install
``` -->

### 2. Copy `.env` file from `.env.local`

> You can create `.env.sit`, `.env.uat`, `.env.production` etc. for environment-specific setups.

---

## ⚙️ Running the App

### Development (with auto-watch):

```bash
pm2 start ecosystem.json --only NODE-DEV
```

---

## 📋 Available Scripts

```bash
npm run dev        # Start app in dev mode (nodemon or pm2 --watch)
npm run migrate    # Run DB migrations
npm run seed       # Seed initial data
```

---

## 📄 Logging

Logs are handled via `winston`:

- Console logs in development
- Daily rotated log files in `logs/` directory
- QUse as: Log.info("") [replace(info,warn,error)]

---
