import React from 'react'
import { motion} from "framer-motion"
const Title = ({children,className}) => {
 
  return (
        <motion.div 
    className={className}
    initial={{ y: -65, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.75
}}>
    {children}
    </motion.div>
    

  )
}

export default Title;