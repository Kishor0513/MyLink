# Kishor Chaudhary - Portfolio Website

A modern, interactive portfolio website showcasing my work as a Senior Full Stack Engineer. Built with cutting-edge web technologies and featuring stunning 3D visuals.

🌐 **Live Site**: [kishorchaudhary.com.np](https://www.kishorchaudhary.com.np)

## 🚀 Features

- **3D Hero Section**: Interactive 3D environment powered by React Three Fiber
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **QR Code Integration**: Easy sharing and connectivity
- **Contact Form**: Direct email integration for seamless communication

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: 
  - Three.js
  - React Three Fiber (@react-three/fiber)
  - React Three Drei (@react-three/drei)
  - React Three Postprocessing
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **QR Code**: qrcode.react

## 📦 Installation & Setup

### Prerequisites
- Node.js (`^20.19.0` or `>=22.12.0`)
- npm `11.6.2` (declared in `packageManager`)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kishor0513/My-Portfolio.git
cd My-Portfolio
```

2. Install dependencies:
```bash
npm ci
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

### Dependency Maintenance

Use the pinned npm version from `packageManager` before touching dependencies:
```bash
corepack enable
corepack prepare npm@11.6.2 --activate
```

Keep lockfile-only refreshes separate from dependency bumps:
```bash
npm run lockfile:refresh
npm run deps:bump
```

Run `npm run lockfile:refresh` when `package.json` already has the intended dependency changes and the lockfile only needs to be regenerated. Use `npm run deps:bump` for an intentional dependency update, and review the resulting `package.json` and `package-lock.json` changes together.

## 📂 Project Structure

```
├── public/              # Static assets
│   └── assets/         # Images and media files
├── src/
│   ├── components/     # React components
│   │   ├── canvas/    # 3D canvas components
│   │   └── ui/        # UI components
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── index.html         # HTML template
└── vite.config.js     # Vite configuration
```

## 🎨 Design Philosophy

This portfolio combines modern web technologies with artistic 3D design to create an immersive user experience. The color scheme features purple and blue gradients, representing creativity and professionalism.

## 📧 Contact

- **Website**: [kishorchaudhary.com.np](https://www.kishorchaudhary.com.np)
- **Email**: kishorc2000@gmail.com
- **GitHub**: [@Kishor0513](https://github.com/Kishor0513)

## 📄 License

This project is open source and available for personal and educational use.

---

Built with ❤️ by Kishor Chaudhary
