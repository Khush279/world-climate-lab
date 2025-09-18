/**
 * ===================================
 * 🌍 WORLD CLIMATE LAB - MAIN JS
 * Enhanced Interactive Climate Platform
 * ===================================
 */

// ===== GLOBAL CONFIGURATION =====
const CONFIG = {
    // API Configuration
    api: {
        baseUrl: 'https://api.openweathermap.org/data/2.5',
        // Using free APIs and mock data for demonstration
        endpoints: {
            weather: '/weather',
            forecast: '/forecast'
        }
    },
    
    // Chart Configuration
    charts: {
        colors: {
            primary: '#0056b3',
            secondary: '#28a745',
            warning: '#ff6b35',
            danger: '#dc3545',
            gradient: ['#0056b3', '#28a745', '#ff6b35', '#dc3545']
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
        }
    },
    
    // Simulation Parameters
    simulation: {
        timeRange: {
            min: 2000,
            max: 2100,
          default: 2024
