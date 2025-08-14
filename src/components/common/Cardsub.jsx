import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



const Cardsub = ({
    icon,
    title,
    level,
    examId
}) => {

    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate(`/courses/${title}`);
    };
  return (
    <motion.div
    
      onClick={handleClick}
      className={`flex flex-col shadow-lg bg-white`}
      whileHover={{ y: -8, scale: 1.02 }}     
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>

            <div className='w-full object-cover h-48 rounded-t-sm'>
        {icon}
            </div>

    </motion.div>
    
  )
}

export default Cardsub;