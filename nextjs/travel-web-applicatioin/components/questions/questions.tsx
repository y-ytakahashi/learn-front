import styles from "./questions.module.scss";
import Accordion from "@/components/questions/accordion";

const Questions = () => {
  return (
    <div className={styles.questions}>
      <div className={styles.heading}>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className={styles.container}>
        {/*  We will import a component from a different file.*/}
        <div className={styles.accordion}>
          <Accordion
            title={"How do i choose the right travel destination for me?"}
            desc={
              "Consider you interests, budget,desired experiences, and the type of\n        environment you enjoy. Research destinations that align with your\n        preferences and offer attractions or activities you find appealing."
            }
          />
          <Accordion
            title={"What are the best times to visit specific destinations?"}
            desc={
              "Research the climate, weather patterns, and peal tourist seasons of the destination you`r interested in. Opt for shoulder seasons when the weather is pleasant, and crowds are fewer, if possible. "
            }
          />
          <Accordion
            title={"How can I find budget-friendly travel options and deals?"}
            desc={
              "Look for travel deals, discounts on flights and accommodations, and consider using travel apps or websites that offer competitive prices. Begin flexible with your travel dates can also help you find better deals."
            }
          />
          <Accordion
            title={"What essential items should I pack for my adventure?"}
            desc={
              "Pack appropriate clothing, toiletries, travel documents (passport,visa,etc.), essential medications, and any specific gear needed for your adventure (e.g hiking boots, snorkeling gear)"
            }
          />
        </div>
        <div className={styles.form}>
          <div className={styles.heading}>
            <h4>Do you have any specific question?</h4>
            <p>
              Please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>
          <div className={styles.content}>
            <input type={"email"} placeholder={"Enter email Address"} />
            <textarea placeholder={"Enter your question here"} />
            <button className={styles.btn}>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
