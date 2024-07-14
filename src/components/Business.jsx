import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>  
);

const Business = () =>  (
  <>
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Why Choose Acme?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Acme empowers businesses to reduce their carbon footprints with innovative software solutions. Our products provide actionable insights and proven results, making us your trusted partner in achieving sustainability goals and driving impactful change.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
    <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Be the First to Know<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Be the first to experience the cutting-edge solutions that Acme offers! By joining our waitlist, you'll gain exclusive early access to our innovative products designed to help businesses reduce their carbon footprints.Don’t miss out on the opportunity to lead your industry in environmental responsibility. Sign up now and take the first step towards a sustainable future!
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  </>
);

export default Business;
