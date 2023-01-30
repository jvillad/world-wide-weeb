'use client';
import { motion, AnimatePresence } from 'framer-motion';
export default function PageWrapper({ children }) {
   return (
      <>
         <AnimatePresence>
            <motion.div
               initial={{ opacity: 0, y: 25 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 5, y: 15 }}
               transition={{ delay: 0.25 }}
            >
               <div>{children}</div>
            </motion.div>
         </AnimatePresence>
      </>
   );
}
