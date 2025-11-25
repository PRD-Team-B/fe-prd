# Troubleshooting Guide

## Can't Start Server After Stopping

If you can't start the server after stopping it, the port might still be in use. Here's how to fix it:

### Method 1: Kill Process Using Port 3000 (Windows PowerShell)

```powershell
# Find the process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with the actual process ID from above)
Stop-Process -Id <PID> -Force
```

### Method 2: Use a Different Port

```bash
# Run on a different port (e.g., 3001)
npm run dev -- -p 3001
```

Then open: http://localhost:3001

### Method 3: Quick Fix Script

Create a file `kill-port.ps1` and run it:

```powershell
# kill-port.ps1
$port = 3000
$process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($process) {
    Stop-Process -Id $process.OwningProcess -Force
    Write-Host "Killed process on port $port"
} else {
    Write-Host "No process found on port $port"
}
```

Run it with: `powershell -ExecutionPolicy Bypass -File kill-port.ps1`

## Other Common Issues

### Port Already in Use
- Solution: Use a different port or kill the existing process

### Dependencies Not Installed
```bash
npm install
```

### Cache Issues
```bash
# Clear Next.js cache
rm -rf .next
# Then restart
npm run dev
```

### TypeScript Errors
```bash
# Check for errors
npm run lint
```

