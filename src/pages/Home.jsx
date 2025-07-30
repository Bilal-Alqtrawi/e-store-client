import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../components/Hero";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}

      <Hero fadeInUp={fadeInUp} staggerContainer={staggerContainer} />

      {/* Why Shop With Us */}
      <motion.section
        className="why-shop bg-gray-100 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="mb-6 text-3xl font-semibold text-gray-800"
          variants={fadeInUp}
        >
          Why Shop With Us?
        </motion.h2>
        <motion.ul
          className="mx-auto max-w-xl space-y-4 text-lg text-gray-700"
          variants={fadeInUp}
        >
          <li>🛍️ Wide range of products from trusted brands</li>
          <li>🚚 Fast & secure shipping</li>
          <li>💳 Safe & easy payments via Stripe</li>
          <li>📞 Friendly customer support</li>
        </motion.ul>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="featured-products bg-white px-6 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2
          className="mb-6 text-3xl font-semibold text-gray-800"
          variants={fadeInUp}
        >
          Featured Products
        </motion.h2>
        <motion.p
          className="mx-auto mb-8 max-w-xl text-gray-600"
          variants={fadeInUp}
        >
          Explore some of our best-selling and highly-rated items.
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", fontWeight: 500 }}
          >
            View All Products
          </Button>
        </motion.div>
      </motion.section>
    </div>
  );
}
