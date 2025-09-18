# 🌍 World Climate Lab

[![Netlify Status](https://api.netlify.com/api/v1/badges/world-climate-lab/deploy-status)](https://app.netlify.com/sites/world-climate-lab/deploys)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-world--climate--lab.netlify.app-brightgreen)](https://world-climate-lab.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Khush279/world-climate-lab)

## 🚀 **Live Demo**
**🔗 [https://world-climate-lab.netlify.app/](https://world-climate-lab.netlify.app/)**

Interactive climate simulation and data analysis platform providing real-time insights into global climate patterns, temperature trends, and environmental data.

---

## ✨ **Features**

### 🌡️ **Global Climate Dashboard**
- **Real-time Climate Metrics**: Live display of global temperature, CO₂ levels, sea level rise, and Arctic ice coverage
- **Interactive Temperature Charts**: Historical temperature anomaly visualization with Chart.js
- **Regional Climate Focus**: Switch between Global, North America, Europe, Asia, Africa, South America, Oceania, and Arctic regions

### 🔬 **Climate Simulation Engine**
- **CO₂ Emission Modeling**: Adjustable emission rate controls (200-800 ppm range)
- **Time-based Projections**: Simulate climate scenarios over 10-100 year periods
- **Scenario Analysis**: Multiple climate pathway simulations
- **Real-time Results**: Interactive simulation with dynamic feedback

### 📊 **Data Analysis Tools**
- **CO₂ Concentration Trends**: Historical and projected atmospheric CO₂ levels
- **Sea Level Rise Visualization**: Comprehensive sea level change analysis
- **Interactive Charts**: Responsive data visualizations with Chart.js integration
- **Regional Comparisons**: Side-by-side regional climate data analysis

### 🎨 **User Experience**
- **Responsive Design**: Mobile-first design with Bootstrap 5
- **Theme Toggle**: Light/dark mode support
- **AI Copilot Integration**: Intelligent assistance for climate data interpretation
- **System Status**: Live system monitoring with uptime indicators

---

## 🛠️ **Technology Stack**

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Framework** | Bootstrap 5.3.0 |
| **Charts** | Chart.js 4.4.0 |
| **Icons** | Bootstrap Icons |
| **Hosting** | Netlify (Auto-deploy from GitHub) |
| **Version Control** | Git & GitHub |

---

## 🚀 **Quick Start**

### **Method 1: View Live Demo**
```bash
# Simply visit the live application
https://world-climate-lab.netlify.app/
```

### **Method 2: Local Development**
```bash
# Clone the repository
git clone https://github.com/Khush279/world-climate-lab.git

# Navigate to project directory
cd world-climate-lab

# Open in browser (no build process required)
open index.html
# or use a local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### **Method 3: Deploy Your Own**
1. **Fork this repository**
2. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select your forked repository
   - Deploy settings: Build command: (leave empty), Publish directory: `/`
   - Click "Deploy site"

---

## 📂 **Project Structure**

```
world-climate-lab/
├── index.html              # Main application file
├── README.md               # Project documentation
├── .gitignore             # Git ignore rules
├── netlify.toml           # Netlify deployment config
├── package.json           # Project metadata
├── LICENSE                # MIT License
└── CONTRIBUTING.md        # Contribution guidelines
```

---

## 🌐 **Deployment Guide**

### **Netlify Deployment (Recommended)**
✅ **Current Deployment**: [https://world-climate-lab.netlify.app/](https://world-climate-lab.netlify.app/)

```bash
# Automatic deployment configured
# Every push to main branch triggers new deployment
# Custom domain: world-climate-lab.netlify.app
# HTTPS enabled with SSL certificate
```

### **Alternative Deployment Options**

#### **Vercel**
```bash
npm i -g vercel
vercel --prod
```

#### **GitHub Pages**
```bash
# Enable GitHub Pages in repository settings
# Source: Deploy from a branch
# Branch: main / (root)
```

#### **Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

---

## 🔧 **Configuration**

### **Environment Variables**
No environment variables required - the application runs entirely in the browser with static data simulation.

### **API Integration (Future Enhancement)**
```javascript
// Ready for real climate data API integration
const CLIMATE_API_CONFIG = {
  baseURL: 'https://api.openweathermap.org/data/2.5',
  // Add your API keys here when integrating real data  
};
```

---

## 🤝 **Contributing**

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Fork the repository
# Create feature branch
git checkout -b feature/amazing-feature

# Commit changes
git commit -m 'Add amazing feature'

# Push to branch
git push origin feature/amazing-feature

# Open Pull Request
```

---

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 **Links**

- **🌍 Live Demo**: [https://world-climate-lab.netlify.app/](https://world-climate-lab.netlify.app/)
- **📱 GitHub Repository**: [https://github.com/Khush279/world-climate-lab](https://github.com/Khush279/world-climate-lab)
- **📊 Netlify Dashboard**: [https://app.netlify.com/sites/world-climate-lab](https://app.netlify.com/sites/world-climate-lab)

---

## 📞 **Support**

- **Issues**: [GitHub Issues](https://github.com/Khush279/world-climate-lab/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Khush279/world-climate-lab/discussions)

---

**Built with ❤️ for climate awareness and environmental education**

*Last updated: September 2025*
