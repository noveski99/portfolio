import React from 'react'
import { motion} from "framer-motion"
const Paragraph = ({children,className}) => {
  return (
    <motion.div 
    className={className}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: "linear"}}
    >
    {children}
    </motion.div>
  )
}

export default Paragraph