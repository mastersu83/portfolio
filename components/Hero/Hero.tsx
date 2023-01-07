import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section>
      <div className="subContainer">
        <div className={styles.hero__inner}>
          <h1 className={styles.hero__title}>Web development</h1>
          <p className={styles.hero__description}>
            Вы работаете над чем-то великим? <br /> Я с удовольствием помогу вам
            в этом! <br /> Напишите мне письмо и мы начнем проект <br /> прямо
            сейчас!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
