import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, Card, CardHeader, CardBody, CardFooter, Progress, Button, Badge, ScrollShadow } from '@nextui-org/react';
import { Settings, Edit, Award, Book, Clock, LogOut } from 'lucide-react';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: "Alex Johnson",
    username: "@alexj",
    bio: "Full-stack developer | Exam enthusiast",
    level: 12,
    xp: 2450,
    streak: 18,
    completedExams: 27,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  };

  const achievements = [
    { id: 1, name: "Fast Learner", icon: "🏅" },
    { id: 2, name: "Perfect Score", icon: "⭐" },
    { id: 3, name: "Week Streak", icon: "🔥" },
    { id: 4, name: "Top 10%", icon: "🏆" },
    { id: 5, name: "Early Bird", icon: "🌅" }
  ];

  const recentActivity = [
    { id: 1, exam: "JavaScript Advanced", score: 92, date: "2 hours ago" },
    { id: 2, exam: "React Patterns", score: 88, date: "1 day ago" },
    { id: 3, exam: "CSS Mastery", score: 95, date: "3 days ago" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-4 space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <Button isIconOnly variant="light" aria-label="Back">
          ←
        </Button>
        <h1 className="text-xl font-bold">My Profile</h1>
        <Button isIconOnly variant="light" aria-label="Settings">
          <Settings size={20} />
        </Button>
      </div>

      {/* Profile Section */}
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <Badge
            content={<Edit size={16} />}
            placement="bottom-right"
            color="primary"
            shape="circle"
          >
            <Avatar
              isBordered
              color="primary"
              src={user.avatar}
              className="w-20 h-20 text-large"
            />
          </Badge>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.username}</p>
            <p className="text-sm mt-1">{user.bio}</p>
          </div>
        </div>
      </Card>

      {/* Stats Section */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6">
          <CardHeader>
            <h3 className="font-semibold flex items-center gap-2">
              <Book size={18} /> Learning Progress
            </h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Level</p>
                <p className="text-2xl font-bold">Level {user.level}</p>
                <Progress
                  size="sm"
                  value={(user.xp % 1000) / 10}
                  className="mt-2"
                  color="primary"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">XP</p>
                <p className="text-2xl font-bold">{user.xp}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Streak</p>
                <p className="text-2xl font-bold">{user.streak} days</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Exams</p>
                <p className="text-2xl font-bold">{user.completedExams}</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-6">
          <CardHeader>
            <h3 className="font-semibold flex items-center gap-2">
              <Award size={18} /> Achievements
            </h3>
          </CardHeader>
          <CardBody>
            <ScrollShadow orientation="horizontal" className="flex gap-4 pb-4">
              {achievements.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center min-w-[80px]"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <p className="text-xs mt-1 text-center">{item.name}</p>
                </motion.div>
              ))}
            </ScrollShadow>
          </CardBody>
        </Card>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <CardHeader>
            <h3 className="font-semibold flex items-center gap-2">
              <Clock size={18} /> Recent Activity
            </h3>
          </CardHeader>
          <CardBody className="space-y-3">
            {recentActivity.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.01 }}
                className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{item.exam}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
                <Badge color={item.score > 85 ? "success" : "warning"} variant="flat">
                  {item.score}%
                </Badge>
              </motion.div>
            ))}
          </CardBody>
        </Card>
      </motion.div>

      {/* Settings */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6">
          <CardHeader>
            <h3 className="font-semibold">Settings</h3>
          </CardHeader>
          <CardBody className="space-y-2">
            <Button variant="light" fullWidth startContent={<Edit size={16} />}>
              Edit Profile
            </Button>
            <Button variant="light" fullWidth startContent={<Settings size={16} />}>
              Account Settings
            </Button>
            <Button variant="light" fullWidth startContent={<LogOut size={16} />} color="danger">
              Log Out
            </Button>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;