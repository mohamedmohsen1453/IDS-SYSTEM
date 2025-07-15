# 🛡️ Adminis Security Platform

## 📖 Overview
**Adminis Security Platform** is an advanced cybersecurity system powered by artificial intelligence to detect threats in real-time. It provides an interactive dashboard for monitoring and analyzing security incidents with rapid response capabilities.

---

## 🎯 Key Features

- 🤖 **AI-powered Threat Detection** - Accuracy up to 97.8%
- ⚡ **Real-time Monitoring** - Updates every 3 seconds
- 🌍 **Global Threat Map** - Geographical tracking of attacks
- 📊 **Advanced Analytics** - Detailed statistics and reports
- 🚨 **Smart Alert System** - Prioritized by severity
- 🔒 **Automatic IP Blocking** - Instant threat response
- 📱 **Responsive UI** - Works on all devices

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **Next.js 14** – Modern React framework
- 🎨 **Tailwind CSS** – Utility-first responsive design
- 🧩 **shadcn/ui** – Elegant prebuilt UI components
- 📊 **Recharts** – Interactive charts and graphs
- 🔗 **TypeScript** – Type-safe and structured code

### Backend
- 🐍 **Flask** – Lightweight Python web framework
- 🤖 **Scikit-learn** – Machine learning models
- 🗄️ **SQLite** / **PostgreSQL** – Flexible database storage
- 🔄 **Flask-CORS** – Cross-origin request support
- 📡 **RESTful API** – Clean and scalable endpoints

---

## 🚀 Installation & Setup

### 1️⃣ Prerequisites
- Node.js v18+
- Python 3.10+
- SQLite or PostgreSQL
- pnpm / npm / yarn
- TShark (optional, for PCAP analysis)

### 2️⃣ Frontend Setup

```bash
cd adminis-dashboard
npm install --legacy-peer-deps
npm run dev
___________________________________________-
Visit the app at: http://localhost:3000
_________________________________________
3️⃣ Backend Setup
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
_________________________________________________
API will be available at: http://localhost:5000
__________________________________________________
___________________📁 Project Structure____________-
adminis-security-platform/
├── 📁 frontend/                    # تطبيق Next.js
│   ├── 📁 app/                     # صفحات التطبيق
│   │   ├── 📁 components/          # مكونات React
│   │   │   ├── threat-metrics.tsx
│   │   │   ├── real-time-monitor.tsx
│   │   │   ├── security-chart.tsx
│   │   │   ├── incidents-table.tsx
│   │   │   ├── alerts-panel.tsx
│   │   │   ├── system-health.tsx
│   │   │   ├── user-management.tsx
│   │   │   ├── threat-map.tsx
│   │   │   └── performance-metrics.tsx
│   │   ├── globals.css             # أنماط عامة
│   │   ├── layout.tsx              # تخطيط عام
│   │   └── page.tsx                # الصفحة الرئيسية
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── connection-test.tsx
│   │   │   └── real-time-dashboard.tsx
│   │   └── 📁 lib/
│   │       └── api.ts              # واجهات API
│   ├── package.json
│   └── tailwind.config.js
├── 📁 backend/                     # خادم Flask
│   ├── app.py                      # التطبيق الرئيسي
│   ├── 📁 models/                  # نماذج الذكاء الاصطناعي
│   ├── 📁 routes/                  # مسارات API
│   ├── 📁 utils/                   # أدوات مساعدة
│   ├── requirements.txt            # تبعيات Python
│   └── config.py                   # إعدادات النظام
├── 📁 docs/                        # الوثائق
├── 📁 tests/                       # الاختبارات
├── README.md                       # هذا الملف
└── LICENSE                         # الترخيص
________________________________________________________-








