import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Button, 
  Switch, 
  Divider, 
  Select, 
  SelectItem,
  Avatar
} from '@nextui-org/react';
import { 
  ArrowLeft, 
  User, 
  Lock, 
  Bell, 
  Moon, 
  Sun, 
  Globe, 
  Shield, 
  HelpCircle, 
  AlertTriangle, 
  Mail,
  LogOut
} from 'lucide-react';

const SettingsPage = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [examReminders, setExamReminders] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [theme, setTheme] = useState('system');
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');

  const handleLogout = () => {
    // Logout logic here
    console.log("User logged out");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto p-4 space-y-4"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button isIconOnly variant="light" aria-label="Back">
          <ArrowLeft size={20} />
        </Button>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      {/* Account Settings */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-4">
          <CardHeader className="flex items-center gap-2 pb-2">
            <User size={18} className="text-primary" />
            <h2 className="font-semibold">Account Settings</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <Button variant="light" fullWidth className="justify-start">
              Edit Profile
            </Button>
            <Button variant="light" fullWidth className="justify-start">
              Change Password
            </Button>
            <Button variant="light" fullWidth className="justify-start">
              Manage Linked Accounts
            </Button>
          </CardBody>
        </Card>
      </motion.div>

      {/* Notification Settings */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-4">
          <CardHeader className="flex items-center gap-2 pb-2">
            <Bell size={18} className="text-primary" />
            <h2 className="font-semibold">Notification Settings</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <Switch isSelected={emailNotifications} onValueChange={setEmailNotifications} />
            </div>
            <div className="flex justify-between items-center">
              <span>Push Notifications</span>
              <Switch isSelected={pushNotifications} onValueChange={setPushNotifications} />
            </div>
            <div className="flex justify-between items-center">
              <span>Exam Reminders</span>
              <Switch isSelected={examReminders} onValueChange={setExamReminders} />
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Appearance */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-4">
          <CardHeader className="flex items-center gap-2 pb-2">
            {theme === 'dark' ? (
              <Moon size={18} className="text-primary" />
            ) : (
              <Sun size={18} className="text-primary" />
            )}
            <h2 className="font-semibold">Appearance</h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <Select
              label="Theme"
              selectedKeys={[theme]}
              onChange={(e) => setTheme(e.target.value)}
              startContent={theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            >
              <SelectItem key="light" value="light">Light</SelectItem>
              <SelectItem key="dark" value="dark">Dark</SelectItem>
              <SelectItem key="system" value="system">System</SelectItem>
            </Select>

            <Select
              label="Font Size"
              selectedKeys={[fontSize]}
              onChange={(e) => setFontSize(e.target.value)}
            >
              <SelectItem key="small" value="small">Small</SelectItem>
              <SelectItem key="medium" value="medium">Medium</SelectItem>
              <SelectItem key="large" value="large">Large</SelectItem>
            </Select>
          </CardBody>
        </Card>
      </motion.div>

      {/* Language */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-4">
          <CardHeader className="flex items-center gap-2 pb-2">
            <Globe size={18} className="text-primary" />
            <h2 className="font-semibold">Language</h2>
          </CardHeader>
          <CardBody>
            <Select
              label="Select Language"
              selectedKeys={[language]}
              onChange={(e) => setLanguage(e.target.value)}
              startContent={<Globe size={18} />}
            >
              <SelectItem key="english" value="english">English</SelectItem>
              <SelectItem key="spanish" value="spanish">Spanish</SelectItem>
              <SelectItem key="french" value="french">French</SelectItem>
            </Select>
          </CardBody>
        </Card>
      </motion.div>

      {/* Privacy & Security */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-4">
          <CardHeader className="flex items-center gap-2 pb-2">
            <Shield size={18} className="text-primary" />
            <h2 className="font-semibold">Privacy & Security</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Two-Factor Authentication</span>
              <Switch isSelected={twoFactorAuth} onValueChange={setTwoFactorAuth} />
            </div>
            <Button variant="light" fullWidth className="justify-start">
              Data Sharing Preferences
            </Button>
            <Button variant="light" fullWidth className="justify-start">
              Clear Cache
            </Button>
          </CardBody>
        </Card>
      </motion.div>

      {/* Support */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="p-4">
          <CardHeader className="flex items-center gap-2 pb-2">
            <HelpCircle size={18} className="text-primary" />
            <h2 className="font-semibold">Support</h2>
          </CardHeader>
          <CardBody className="space-y-3">
            <Button variant="light" fullWidth className="justify-start" startContent={<HelpCircle size={18} />}>
              Help Center
            </Button>
            <Button variant="light" fullWidth className="justify-start" startContent={<AlertTriangle size={18} />}>
              Report a Problem
            </Button>
            <Button variant="light" fullWidth className="justify-start" startContent={<Mail size={18} />}>
              Contact Us
            </Button>
          </CardBody>
        </Card>
      </motion.div>

      {/* Log Out */}
      <motion.div
        initial={{ y: 10 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Card className="p-4">
          <CardBody>
            <Button 
              color="danger" 
              variant="light" 
              fullWidth 
              startContent={<LogOut size={18} />}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SettingsPage;