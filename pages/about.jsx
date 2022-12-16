import Image from "next/image";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.preDiv}>
        <div className={styles.logoDiv}>
          <Image
            className={styles.logo}
            src="/img/66.png"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className={styles.titleDiv}>
          <h1 className={styles.title}>Our Proud History</h1>
        </div>
      </div>
      <div className={styles.infoDiv}>
        <div className={styles.historyImg}>
          <Image src="/img/ftruck.jpeg" alt="" width={500} height={500} />
        </div>
        <div className={styles.historyTextDiv}>
          <p className={styles.text}>
            Culpa pariatur anim eiusmod incididunt irure reprehenderit sunt
            cillum aliqua amet aute ullamco eiusmod commodo. Adipisicing laborum
            sit mollit laboris exercitation esse sint sit cillum non aliquip ea
            id adipisicing. Laborum ipsum sint anim anim. Culpa pariatur anim
            eiusmod incididunt irure reprehenderit sunt cillum aliqua amet aute
            ullamco eiusmod commodo. Adipisicing laborum sit mollit laboris
            exercitation esse sint sit cillum non aliquip ea id adipisicing.
            Laborum ipsum sint anim anim.
          </p>
          <p className={styles.text}>
            Culpa pariatur anim eiusmod incididunt irure reprehenderit sunt
            cillum aliqua amet aute ullamco eiusmod commodo. Adipisicing laborum
            sit mollit laboris exercitation esse sint sit cillum non aliquip ea
            id adipisicing. Laborum ipsum sint anim anim. Culpa pariatur anim
            eiusmod incididunt irure reprehenderit sunt cillum aliqua amet aute
            ullamco eiusmod commodo. Adipisicing laborum sit mollit laboris
            exercitation esse sint sit cillum non aliquip ea id adipisicing.
            Laborum ipsum sint anim anim. Adipisicing laborum sit mollit laboris
            exercitation esse sint sit cillum non aliquip ea id adipisicing.
            Laborum ipsum sint anim anim.
          </p>
        </div>
      </div>
      <div className={styles.preDiv}>
        <div className={styles.logoDiv}>
          <Image
            className={styles.logo}
            src="/img/66.png"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className={styles.titleDiv}>
          <h1 className={styles.title}>Our Welcoming Team</h1>
        </div>
      </div>
      <div className={styles.infoDiv}>
        <div className={styles.crewImgs}>
          <Image src="/img/crew1.jpg" alt="" width={270} height={360} />
          <Image src="/img/crew2.jpg" alt="" width={360} height={270} />
        </div>
        <div className={styles.historyTextDiv}>
          <p className={styles.text}>
            Culpa pariatur anim eiusmod incididunt irure reprehenderit sunt
            cillum aliqua amet aute ullamco eiusmod commodo. Adipisicing laborum
            sit mollit laboris exercitation esse sint sit cillum non aliquip ea
            id adipisicing. Laborum ipsum sint anim anim. Culpa pariatur anim
            eiusmod incididunt irure reprehenderit sunt cillum aliqua amet aute
            ullamco eiusmod commodo. Adipisicing laborum sit mollit laboris
            exercitation esse sint sit cillum non aliquip ea id adipisicing.
            Laborum ipsum sint anim anim.
          </p>
          <p className={styles.text}>
            Culpa pariatur anim eiusmod incididunt irure reprehenderit sunt
            cillum aliqua amet aute ullamco eiusmod commodo. Adipisicing laborum
            sit mollit laboris exercitation esse sint sit cillum non aliquip ea
            id adipisicing. Laborum ipsum sint anim anim. Culpa pariatur anim
            eiusmod incididunt irure reprehenderit sunt cillum aliqua amet aute
            ullamco eiusmod commodo. Adipisicing laborum sit mollit laboris
            exercitation esse sint sit cillum non aliquip ea id adipisicing.
            Laborum ipsum sint anim anim. Adipisicing laborum sit mollit laboris
            exercitation esse sint sit cillum non aliquip ea id adipisicing.
            Laborum ipsum sint anim anim.
          </p>
        </div>
      </div>
      <hr className={styles.hr}></hr>
    </div>
  );
};

export default About;
