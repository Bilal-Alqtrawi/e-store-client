import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";

function Hero({ fadeInUp, staggerContainer }) {
  return (
    <section className="hero relative mb-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-20 text-center text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="mb-4 text-5xl font-bold tracking-tight"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Welcome to E-Store
        </motion.h1>
        <motion.p
          className="mx-auto mb-6 max-w-xl text-lg"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover top-quality products at unbeatable prices. Fast delivery,
          secure checkout, and 24/7 support.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            component={Link}
            to="/products"
            color="white"
            sx={{
              textTransform: "none",
              borderColor: "white",
              color: "white",
              fontWeight: 500,
            }}
            variant="outlined"
            startIcon={<ShoppingCartIcon className="size-4" />}
            className="hover:bg-purple-800 hover:border-purple-800"
          >
            Shop Now
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
