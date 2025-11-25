# How to Run This Project

## ✅ Yes, this is **FRONTEND-ONLY** - No backend needed!

All data is stored in your browser (React state). No database, no API, no server required.

---

## 🚀 Quick Start Guide

### Step 1: Open Terminal
Open PowerShell or Command Prompt in the project folder:
```
E:\tugas prd tim b terbaru
```

### Step 2: Install Dependencies (First time only)
```bash
npm install
```

### Step 3: Start the Server
```bash
npm run dev
```

### Step 4: Open Browser
Wait for the message "Ready" then open:
**http://localhost:3000**

---

## 🛑 How to Stop the Server

**In the terminal where the server is running:**
- Press `Ctrl + C`
- Wait for it to stop
- You'll see the command prompt again

---

## 🔄 How to Restart the Server

1. **Stop the server** (Ctrl + C in the terminal)
2. **Start it again:**
   ```bash
   npm run dev
   ```

---

## ⚠️ If Port 3000 is Busy

If you get an error that port 3000 is already in use:

### Option 1: Kill the Process (Windows PowerShell)
```powershell
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill it (replace PID with the number you see)
Stop-Process -Id <PID> -Force
```

### Option 2: Use a Different Port
```bash
npm run dev -- -p 3001
```
Then open: **http://localhost:3001**

---

## 📝 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Check for errors

---

## ❓ Troubleshooting

**Can't start server?**
1. Make sure you're in the project folder
2. Make sure dependencies are installed: `npm install`
3. Check if port 3000 is free or use port 3001

**Site not loading?**
1. Wait 10-15 seconds for compilation
2. Check terminal for error messages
3. Try hard refresh: `Ctrl + Shift + R`

**Still having issues?**
Share the error message from the terminal!

