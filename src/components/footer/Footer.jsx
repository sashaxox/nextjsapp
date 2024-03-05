import styles from "@/components/footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>nextjsapp</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur minus aliquam odit facere nostrum similique sint recusandae nihil quam nulla exercitationem esse corporis beatae quibusdam animi illum, dolore pariatur!
      </div>
    </div>
  );
};

export default Footer;