
import { Category, CategoryConfig } from './types';

export const CATEGORIES: Record<Category, CategoryConfig> = {
  Car: {
    icon: 'fa-car-side',
    color: 'from-blue-500 to-indigo-600',
    questions: [
      {
        id: 'primary_use',
        text: 'What is your primary use for this vehicle?',
        options: [
          { label: 'Daily Commute', value: 'commute' },
          { label: 'Family Trips', value: 'family' },
          { label: 'Performance/Speed', value: 'speed' },
          { label: 'Off-roading/Adventure', value: 'adventure' }
        ]
      },
      {
        id: 'fuel_type',
        text: 'What is your preferred engine type?',
        options: [
          { label: 'Electric (EV)', value: 'electric' },
          { label: 'Hybrid', value: 'hybrid' },
          { label: 'Gasoline/Petrol', value: 'gas' }
        ]
      },
      {
        id: 'budget',
        text: 'What is your budget range?',
        options: [
          { label: 'Under $30k', value: 'low' },
          { label: '$30k - $60k', value: 'mid' },
          { label: '$60k - $100k', value: 'high' },
          { label: 'Luxury ($100k+)', value: 'luxury' }
        ]
      },
      {
        id: 'size',
        text: 'How many passengers do you usually carry?',
        options: [
          { label: 'Just me / 2 people', value: 'small' },
          { label: 'Standard (4-5 people)', value: 'standard' },
          { label: 'Large (7+ people)', value: 'large' }
        ]
      },
      {
        id: 'transmission',
        text: 'Preferred transmission type?',
        options: [
          { label: 'Automatic (Ease of use)', value: 'auto' },
          { label: 'Manual (Driving feel)', value: 'manual' },
          { label: 'No Preference', value: 'any' }
        ]
      },
      {
        id: 'safety',
        text: 'How important are advanced safety features (ADAS)?',
        options: [
          { label: 'Crucial (Must have everything)', value: 'max' },
          { label: 'Standard (Basic tech is fine)', value: 'standard' },
          { label: 'Secondary (Focus on price)', value: 'low' }
        ]
      }
    ]
  },
  Laptop: {
    icon: 'fa-laptop-code',
    color: 'from-purple-500 to-pink-600',
    questions: [
      {
        id: 'primary_task',
        text: 'What will you do most on this laptop?',
        options: [
          { label: 'Gaming', value: 'gaming' },
          { label: 'Professional Work / Coding', value: 'pro' },
          { label: 'Graphic Design / Video Editing', value: 'creative' },
          { label: 'Casual / School', value: 'casual' }
        ]
      },
      {
        id: 'os_preference',
        text: 'Do you have an OS preference?',
        options: [
          { label: 'macOS', value: 'macos' },
          { label: 'Windows', value: 'windows' },
          { label: 'Linux', value: 'linux' },
          { label: 'No Preference', value: 'none' }
        ]
      },
      {
        id: 'portability',
        text: 'How important is portability?',
        options: [
          { label: 'Extremely (Ultrabook)', value: 'high' },
          { label: 'Balanced (Daily Carry)', value: 'mid' },
          { label: 'Not Important (Desktop Replacement)', value: 'low' }
        ]
      },
      {
        id: 'budget',
        text: 'What is your budget?',
        options: [
          { label: 'Budget (< $800)', value: 'budget' },
          { label: 'Mid-range ($800 - $1500)', value: 'mid' },
          { label: 'Premium ($1500+)', value: 'premium' }
        ]
      },
      {
        id: 'screen_size',
        text: 'What is your ideal screen size?',
        options: [
          { label: 'Compact (13")', value: 'small' },
          { label: 'Standard (14"-15")', value: 'medium' },
          { label: 'Large (16"+)', value: 'large' }
        ]
      },
      {
        id: 'workspace',
        text: 'Where will you use it most?',
        options: [
          { label: 'On the go (Coffee shops, planes)', value: 'mobile' },
          { label: 'Desk setup (Plugged into monitor)', value: 'desk' },
          { label: 'Around the house', value: 'home' }
        ]
      }
    ]
  },
  Phone: {
    icon: 'fa-mobile-screen-button',
    color: 'from-emerald-500 to-teal-600',
    questions: [
      {
        id: 'ecosystem',
        text: 'Which ecosystem do you prefer?',
        options: [
          { label: 'iOS (Apple)', value: 'ios' },
          { label: 'Android (Google, Samsung, etc.)', value: 'android' },
          { label: 'Open to both', value: 'both' }
        ]
      },
      {
        id: 'priority',
        text: 'What is your top priority?',
        options: [
          { label: 'Camera Quality', value: 'camera' },
          { label: 'Battery Life', value: 'battery' },
          { label: 'Gaming Performance', value: 'gaming' },
          { label: 'Durability / Screen Size', value: 'screen' }
        ]
      },
      {
        id: 'size',
        text: 'Preferred device size?',
        options: [
          { label: 'Compact', value: 'compact' },
          { label: 'Large (Max/Plus models)', value: 'large' },
          { label: 'Standard', value: 'standard' }
        ]
      },
      {
        id: 'budget',
        text: 'Budget range?',
        options: [
          { label: 'Budget (< $400)', value: 'budget' },
          { label: 'Mid-range ($400 - $800)', value: 'mid' },
          { label: 'Flagship ($800+)', value: 'flagship' }
        ]
      },
      {
        id: 'storage',
        text: 'How much storage do you need?',
        options: [
          { label: 'Minimal (Cloud user)', value: 'low' },
          { label: 'Plenty (Offline music/videos)', value: 'medium' },
          { label: 'Extreme (4K video recording)', value: 'high' }
        ]
      },
      {
        id: 'refresh_rate',
        text: 'Do you care about high refresh rate screens?',
        options: [
          { label: 'Yes, must be 120Hz+', value: 'fast' },
          { label: 'No, 60Hz is fine', value: 'slow' }
        ]
      }
    ]
  },
  Smartwatch: {
    icon: 'fa-stopwatch-20',
    color: 'from-orange-500 to-red-600',
    questions: [
      {
        id: 'phone_compatibility',
        text: 'What phone do you currently use?',
        options: [
          { label: 'iPhone', value: 'iphone' },
          { label: 'Android Phone', value: 'android' }
        ]
      },
      {
        id: 'main_focus',
        text: 'What is your primary reason for a watch?',
        options: [
          { label: 'Fitness & Sports Tracking', value: 'fitness' },
          { label: 'Smart Notifications & Apps', value: 'smart' },
          { label: 'Health Monitoring (ECG, Sleep)', value: 'health' },
          { label: 'Style & Luxury', value: 'style' }
        ]
      },
      {
        id: 'battery',
        text: 'Desired battery life?',
        options: [
          { label: '1-2 Days (High Tech)', value: 'short' },
          { label: 'Weekly Charge', value: 'mid' },
          { label: 'Weeks (Rugged/Adventure)', value: 'long' }
        ]
      },
      {
        id: 'budget',
        text: 'Budget?',
        options: [
          { label: 'Entry Level (< $200)', value: 'budget' },
          { label: 'Mid-range ($200 - $500)', value: 'mid' },
          { label: 'Premium/Rugged ($500+)', value: 'premium' }
        ]
      },
      {
        id: 'connectivity',
        text: 'Do you need cellular connectivity (LTE)?',
        options: [
          { label: 'Yes, I want to leave my phone home', value: 'lte' },
          { label: 'No, Bluetooth is enough', value: 'bluetooth' }
        ]
      },
      {
        id: 'water_resistance',
        text: 'Do you plan on swimming with it?',
        options: [
          { label: 'Yes, frequently', value: 'swim' },
          { label: 'No, just occasional rain', value: 'basic' }
        ]
      }
    ]
  }
};
