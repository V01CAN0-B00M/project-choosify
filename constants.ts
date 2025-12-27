
import { Category, CategoryConfig } from './types';

export const CATEGORIES: Record<Category, CategoryConfig> = {
  Car: {
    icon: 'fa-car-side',
    color: 'from-blue-600 to-indigo-700',
    questions: [
      {
        id: 'primary_use',
        text: 'What is your primary use for this vehicle?',
        options: [
          { label: 'Daily Commute', value: 'commute' },
          { label: 'Family & Grocery Trips', value: 'family' },
          { label: 'Performance & Joyriding', value: 'speed' },
          { label: 'Heavy Duty / Towing', value: 'utility' }
        ]
      },
      {
        id: 'energy_source',
        text: 'What kind of fuel or energy do you prefer?',
        options: [
          { label: 'Fully Electric (EV)', value: 'electric' },
          { label: 'Plug-in Hybrid', value: 'phev' },
          { label: 'Traditional Gasoline', value: 'gas' },
          { label: 'Diesel Power', value: 'diesel' }
        ]
      },
      {
        id: 'budget_limit',
        text: 'What is your total budget range?',
        options: [
          { label: 'Entry Level (Under $35k)', value: 'entry' },
          { label: 'Mid-Range ($35k - $70k)', value: 'mid' },
          { label: 'Premium ($70k - $120k)', value: 'premium' },
          { label: 'Luxury / Supercar ($120k+)', value: 'luxury' }
        ]
      },
      {
        id: 'terrain',
        text: 'What kind of terrain do you drive on most?',
        options: [
          { label: 'Smooth City Streets', value: 'city' },
          { label: 'Highways & Interstates', value: 'highway' },
          { label: 'Unpaved Trails / Off-road', value: 'offroad' },
          { label: 'Mixed / All-terrain', value: 'mixed' }
        ]
      },
      {
        id: 'tech_level',
        text: 'How much in-car technology do you need?',
        options: [
          { label: 'Minimal (Focus on driving)', value: 'minimal' },
          { label: 'Standard (CarPlay/Android Auto)', value: 'standard' },
          { label: 'Advanced (Self-driving assists)', value: 'advanced' },
          { label: 'Futuristic (Large screens everywhere)', value: 'max' }
        ]
      },
      {
        id: 'cargo_needs',
        text: 'How much storage/cargo space is required?',
        options: [
          { label: 'Small (Just a backpack)', value: 'small' },
          { label: 'Medium (Groceries/Gym bag)', value: 'medium' },
          { label: 'Large (Luggage/Strollers)', value: 'large' },
          { label: 'Huge (Moving gear/Furniture)', value: 'huge' }
        ]
      }
    ]
  },
  Laptop: {
    icon: 'fa-laptop-code',
    color: 'from-purple-600 to-fuchsia-700',
    questions: [
      {
        id: 'main_workflow',
        text: 'What is the most intensive thing you will do?',
        options: [
          { label: 'Heavy Gaming', value: 'gaming' },
          { label: 'Video Editing / 3D Rendering', value: 'creative' },
          { label: 'Software Development', value: 'coding' },
          { label: 'Web Browsing / Office Work', value: 'casual' }
        ]
      },
      {
        id: 'portability_needs',
        text: 'How often will you move the laptop?',
        options: [
          { label: 'Every day (Needs to be light)', value: 'high' },
          { label: 'Few times a week', value: 'medium' },
          { label: 'Rarely (Stays on desk)', value: 'low' }
        ]
      },
      {
        id: 'os_environment',
        text: 'Which operating system do you prefer?',
        options: [
          { label: 'macOS (Apple)', value: 'macos' },
          { label: 'Windows 11', value: 'windows' },
          { label: 'ChromeOS', value: 'chrome' },
          { label: 'Linux Distros', value: 'linux' }
        ]
      },
      {
        id: 'screen_quality',
        text: 'How important is the display quality?',
        options: [
          { label: 'OLED/Pro Display (Color accuracy)', value: 'perfect' },
          { label: 'High Refresh Rate (Smooth gaming)', value: 'fast' },
          { label: 'Standard Matte (Reading/Text)', value: 'standard' }
        ]
      },
      {
        id: 'battery_priority',
        text: 'How much battery life do you need?',
        options: [
          { label: 'Full Workday (10+ hours)', value: 'all-day' },
          { label: 'Moderate (5-8 hours)', value: 'mixed' },
          { label: 'Doesn\'t matter (Always plugged in)', value: 'low' }
        ]
      },
      {
        id: 'budget_laptop',
        text: 'What is your price range?',
        options: [
          { label: 'Budget (< $700)', value: 'budget' },
          { label: 'Mid-range ($700 - $1400)', value: 'mid' },
          { label: 'High-end ($1400 - $2500)', value: 'high' },
          { label: 'No Limit ($2500+)', value: 'infinite' }
        ]
      }
    ]
  },
  Phone: {
    icon: 'fa-mobile-screen-button',
    color: 'from-emerald-600 to-teal-700',
    questions: [
      {
        id: 'os_loyalty',
        text: 'Which phone ecosystem are you in?',
        options: [
          { label: 'iOS (iPhone)', value: 'ios' },
          { label: 'Android (Samsung, Pixel, etc.)', value: 'android' },
          { label: 'No preference / Willing to switch', value: 'any' }
        ]
      },
      {
        id: 'camera_use',
        text: 'How important is the camera to you?',
        options: [
          { label: 'Professional Photography', value: 'pro' },
          { label: 'Social Media / Quick Snaps', value: 'social' },
          { label: 'Documenting Life (Family/Video)', value: 'family' },
          { label: 'Basic (Just utility)', value: 'basic' }
        ]
      },
      {
        id: 'size_phone',
        text: 'How big should the screen be?',
        options: [
          { label: 'Compact (Easy one-hand use)', value: 'small' },
          { label: 'Standard (Balanced)', value: 'medium' },
          { label: 'Max / Ultra (Huge display)', value: 'large' },
          { label: 'Foldable (Tablet hybrid)', value: 'foldable' }
        ]
      },
      {
        id: 'charging_habit',
        text: 'What is your charging style?',
        options: [
          { label: 'Overnight (Standard battery)', value: 'overnight' },
          { label: 'Quick bursts (Ultra-fast charging)', value: 'fast' },
          { label: 'Wireless only', value: 'wireless' }
        ]
      },
      {
        id: 'gaming_phone',
        text: 'Do you play high-end mobile games?',
        options: [
          { label: 'Yes, competitive mobile gaming', value: 'heavy' },
          { label: 'Casual (Puzzle/Indie games)', value: 'light' },
          { label: 'Not at all', value: 'none' }
        ]
      },
      {
        id: 'phone_durability',
        text: 'How rough are you with your devices?',
        options: [
          { label: 'Very careful (Design over durability)', value: 'gentle' },
          { label: 'Accident-prone (Need water/drop resistance)', value: 'rugged' },
          { label: 'Average (Standard protection)', value: 'normal' }
        ]
      }
    ]
  },
  Smartwatch: {
    icon: 'fa-stopwatch-20',
    color: 'from-orange-600 to-red-700',
    questions: [
      {
        id: 'companion_device',
        text: 'What phone will this watch connect to?',
        options: [
          { label: 'iPhone', value: 'iphone' },
          { label: 'Android Phone', value: 'android' }
        ]
      },
      {
        id: 'watch_priority',
        text: 'What is your main goal for the watch?',
        options: [
          { label: 'Fitness & Gym Tracking', value: 'fitness' },
          { label: 'Outdoor Adventure / Hiking', value: 'adventure' },
          { label: 'Heart & Health Monitoring', value: 'health' },
          { label: 'Fashion & Style', value: 'fashion' }
        ]
      },
      {
        id: 'battery_watch',
        text: 'Desired battery life?',
        options: [
          { label: 'Daily Charge (High functionality)', value: 'daily' },
          { label: 'Multi-day (Balanced)', value: 'multi' },
          { label: 'Weeks (Always-on utility)', value: 'long' }
        ]
      },
      {
        id: 'smart_features',
        text: 'Do you need apps and LTE calling?',
        options: [
          { label: 'Yes, full standalone capability', value: 'max' },
          { label: 'Just notifications is fine', value: 'basic' },
          { label: 'No, just fitness data', value: 'minimal' }
        ]
      },
      {
        id: 'watch_material',
        text: 'Preferred case material?',
        options: [
          { label: 'Aluminum (Lightweight/Cheap)', value: 'aluminum' },
          { label: 'Stainless Steel (Premium look)', value: 'steel' },
          { label: 'Titanium (Rugged/Ultra-light)', value: 'titanium' }
        ]
      },
      {
        id: 'watch_budget',
        text: 'How much are you willing to spend?',
        options: [
          { label: 'Budget (< $200)', value: 'budget' },
          { label: 'Standard ($200 - $500)', value: 'standard' },
          { label: 'Luxury ($500+)', value: 'luxury' }
        ]
      }
    ]
  }
};
