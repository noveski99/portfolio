import React from 'react'
import { motion } from "framer-motion"
const Square = ({children,className,delay}) => {
  return (
    <motion.div 
    className={className}
 
 >
        {children}
    </motion.div>
  )
}

export default Square