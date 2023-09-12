import Image from "next/image";
import styles from "./page.module.scss";
import Navbar from "@/components/navbar/navbar";
import Home from "@/components/home/home";
import Middle from "@/components/middle/middle";
import Destinations from "@/components/destinations/destinations";
import Portfolio from "@/components/portfolio/portfolio";
import Reviews from "@/components/reviews/reviews";
import Questions from "@/components/questions/questions";
import Subscribe from "@/components/subscribe/subscribe";
import Footer from "@/components/footer/footer";

export default function App() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      {/*<Portfolio />*/}
      {/*<Reviews />*/}
      {/*<Questions />*/}
      {/*<Subscribe />*/}
      {/*<Footer />*/}
    </main>
  );
}
