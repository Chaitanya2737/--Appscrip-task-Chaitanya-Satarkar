import MaxWithWrapper from "@/components/MaxWithWrapper";
import styles from './page.module.css';
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <MaxWithWrapper>
          <div>
            <h1 className={styles.title}>Discover our products</h1>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur. Amet es <br/>  posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
            </p>
          </div>
        </MaxWithWrapper>

        <section>
          <MaxWithWrapper>
          <ProductSection />  
          </MaxWithWrapper>
        </section>
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
