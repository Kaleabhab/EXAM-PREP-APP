import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  User, 
  Bell, 
  Moon, 
  Sun, 
  Monitor,
  Globe, 
  Shield, 
  HelpCircle, 
  AlertTriangle, 
  Mail,
  LogOut,
  Edit3,
  Key,
  Link2,
  HardDrive,
  Trash2,
  Palette,
  Text,
  Smartphone,
  Clock
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Switch from '../components/common/Switch';
import Select from '../components/common/Select';

const SettingsPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme, setSystemTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [examReminders, setExamReminders] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleThemeChange = (value) => {
    if (value === 'system') {
      setSystemTheme();
    } else {
      setTheme(value);
    }
  };

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor }
  ];

  const fontSizeOptions = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' }
  ];

  const languageOptions = [
    { value: 'english', label: 'English' },
    { value: 'spanish', label: 'Spanish' },
    { value: 'french', label: 'French' },
    { value: 'german', label: 'German' }
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-blue-100/50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Settings
        </h1>
      </div>

      {/* Account Settings */}
      <Card 
        title="Account Settings" 
        icon={User}
        gradientFrom="from-indigo-50" 
        gradientTo="to-purple-50"
      >
        <div className="space-y-2">
          <Button 
            onClick={() => navigate('/profile')} 
            icon={Edit3}
            variant="primary"
          >
            Edit Profile
          </Button>

          <Button icon={Key} variant="secondary">
            Change Password
          </Button>

          <Button icon={Link2} variant="success">
            Manage Linked Accounts
          </Button>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card 
        title="Notification Preferences" 
        icon={Bell}
        gradientFrom="from-blue-50" 
        gradientTo="to-cyan-50"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>Email Notifications</span>
            </div>
            <Switch 
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              color="blue"
            />
          </div>

          <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Smartphone size={18} className="text-cyan-500" />
              <span>Push Notifications</span>
            </div>
            <Switch 
              checked={pushNotifications}
              onChange={() => setPushNotifications(!pushNotifications)}
              color="cyan"
            />
          </div>

          <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-purple-500" />
              <span>Exam Reminders</span>
            </div>
            <Switch 
              checked={examReminders}
              onChange={() => setExamReminders(!examReminders)}
              color="purple"
            />
          </div>
        </div>
      </Card>

      {/* Appearance */}
      <Card 
        title="Appearance" 
        icon={theme === 'dark' ? Moon : Sun}
        gradientFrom="from-violet-50" 
        gradientTo="to-fuchsia-50"
      >
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Theme</label>
            <Select
              value={theme}
              onChange={handleThemeChange}
              options={themeOptions}
              ariaLabel="Theme selection"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Font Size</label>
            <Select
              value={fontSize}
              onChange={(value) => setFontSize(value)}
              options={fontSizeOptions}

              icon={Text}
              color="violet"
              ariaLabel="Font size selection"
            />
          </div>
        </div>
      </Card>

      {/* Language */}
      <Card 
        title="Language & Region" 
        icon={Globe}
        gradientFrom="from-teal-50" 
        gradientTo="to-emerald-50"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Select Language</label>
          <Select
            value={language}
            onChange={(value) => setLanguage(value)}
            options={languageOptions}
            icon={Globe}
            color="teal"
          />
        </div>
      </Card>

      {/* Privacy & Security */}
      <Card 
        title="Privacy & Security" 
        icon={Shield}
        gradientFrom="from-amber-50" 
        gradientTo="to-orange-50"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-amber-500" />
              <span>Two-Factor Authentication</span>
            </div>
            <Switch 
              checked={twoFactorAuth}
              onChange={() => setTwoFactorAuth(!twoFactorAuth)}
              color="amber"
            />
          </div>

          <Button icon={HardDrive} variant="warning">
            Data Sharing Preferences
          </Button>

          <Button icon={Trash2} variant="danger">
            Clear Cache
          </Button>
        </div>
      </Card>

      {/* Support */}
      <Card 
        title="Support" 
        icon={HelpCircle}
        gradientFrom="from-green-50" 
        gradientTo="to-lime-50"
      >
        <div className="space-y-2">
          <Button icon={HelpCircle} variant="success">
            Help Center
          </Button>

          <Button icon={AlertTriangle} variant="info">
            Report a Problem
          </Button>

          <Button icon={Mail} variant="success">
            Contact Us
          </Button>
        </div>
      </Card>

      {/* Log Out */}
      <Card 
        gradientFrom="from-red-50" 
        gradientTo="to-pink-50"
      >
        <Button 
          onClick={handleLogout}
          icon={LogOut}
          variant="danger"
          className="w-full"
        >
          Log Out
        </Button>
      </Card>
    </div>
  );
};

export default SettingsPage;