import React from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Progress } from '@nextui-org/progress';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const QuizSummaryCard = ({ title, score, total, timeTaken, onRetry }) => {
  const percentage = Math.round((score / total) * 100);
  const isSuccess = percentage >= 70;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Card className="w-full max-w-md p-6 mx-auto shadow-xl">
        <CardHeader className="flex flex-col items-center">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 0.6 }}
          >
            {isSuccess ? (
              <CheckCircle className="w-16 h-16 text-green-500 mb-2" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500 mb-2" />
            )}
          </motion.div>
          <h3 className="text-2xl font-bold text-center">{title}</h3>
        </CardHeader>
        
        <CardBody className="flex flex-col items-center gap-4">
          <Progress
            size="lg"
            value={percentage}
            color={isSuccess ? 'success' : 'danger'}
            classNames={{
              indicator: isSuccess ? 'bg-green-500' : 'bg-red-500'
            }}
          />
          
          <div className="text-center">
            <p className="text-4xl font-bold mb-1">
              <span className={isSuccess ? 'text-green-600' : 'text-red-600'}>
                {score}
              </span>
              <span className="text-gray-400">/{total}</span>
            </p>
            <p className={`text-lg font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {percentage}% Correct
            </p>
            {timeTaken && (
              <p className="text-gray-500 mt-2">
                Time taken: {timeTaken} seconds
              </p>
            )}
          </div>
        </CardBody>
        
        <CardFooter className="justify-center">
          <Button
            onClick={onRetry}
            color={isSuccess ? 'success' : 'danger'}
            variant="shadow"
            size="lg"
            className="font-bold"
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default QuizSummaryCard;