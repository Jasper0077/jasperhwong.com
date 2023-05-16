import { motion } from "framer-motion";
import { staggerContainer } from "utils/motion";

const WithAnimation =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props) => {
    if (!Component) return null;
    return (
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component {...(props as P)} />
      </motion.div>
    );
  };

export default WithAnimation;
