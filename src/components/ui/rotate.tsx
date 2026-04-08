import * as motion from 'motion/react-client'
type RotateProps =React.ComponentProps<"div"> 

function Rotate({...props}:Readonly<RotateProps>) {
  return (
        <motion.div
          className="flex flex-col items-center justify-center w-64 gap-8 p-4 border rounded shadow-md bg-white dark:bg-gray-800"
          whileHover={{ scale: 1.05, rotate: 10 }}
          transition={{ duration: 0.1 }}
        ></motion.div>
  )
}

export default Rotate