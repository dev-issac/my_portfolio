import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Senior Citizen Application",
    img: "https://img.freepik.com/free-vector/grandparents-couple-avatars-characters_24877-50629.jpg?t=st=1719853493~exp=1719857093~hmac=a249bfd18597aa0ece65b1859644297d72e540d904e858d1b27727a54b4d2e0e&w=740",
    desc: "Our senior citizen application simplifies access to essential services for elderly users. It enables finding nearby government hospitals and old age homes effortlessly. Users can set medicine reminders and submit grievances conveniently. The app also provides tailored exercise guidance and quick access to emergency services via SOS functionality. Helpline access ensures immediate support for seniors in need.",
  },
  {
    id: 2,
    title: "Minmathi Application",
    img: "https://play-lh.googleusercontent.com/FYqiSRViVQ-hFPAx5aoIfur4rdRz0ROBAJgr6RF_xb7D0dansi_9mGc5iEw-8atbdysc=w480-h960-rw",
    desc: "Minmathi is a versatile platform offering seamless Single Sign-On (SSO) login for user convenience. It supports audio and video functionalities, allowing interactive learning experiences. Users can easily enroll in various courses offered on the platform, enhancing their educational journey. Additionally, Minmathi features 'Mathi Santhai', providing a marketplace for educational resources and materials. It's designed to facilitate accessible and comprehensive learning experiences for all users.",
  },
  {
    id: 3,
    title: "CMUPT Application",
    img: "https://img.freepik.com/free-vector/gardener-concept-illustration_114360-23398.jpg?t=st=1719853950~exp=1719857550~hmac=135df02ad81c56f116687dfd73af3b242a6bd061a48012d9b82c30c623cc3430&w=740",
    desc: "The CMUPT application is designed to collect essential basic details of former families for survey purposes. It streamlines the process of gathering comprehensive information, ensuring accuracy and efficiency. Users can input and update family details seamlessly through the user-friendly interface. CMUPT facilitates data collection that is crucial for surveys, aiding in research and analysis. It aims to improve survey efficiency while maintaining data integrity and security.",
  },
  {
    id: 4,
    title: "Purity Agro Application",
    img: "https://static.vecteezy.com/system/resources/previews/000/623/023/non_2x/agriculture-business-logo-template-unique-green-vector-image.jpg",
    desc: "The Purity Agro application offers dual login capabilities: supervisors can assign survey areas, while field officers complete land surveys and gather detailed information. Supervisors use their login to efficiently assign survey areas to designated field officers, ensuring systematic coverage. Field officers, using their login, perform comprehensive surveys of agricultural lands, collecting essential details crucial for agricultural management. This dual-login system enhances operational efficiency and data accuracy, supporting informed decision-making and optimizing agricultural processes within Purity Agro.",
  },
  {
    id: 5,
    title: "Thayumanavar Application",
    img: "https://img.freepik.com/free-vector/family-grandparents-parents-kids-cartoons_18591-52186.jpg?t=st=1719854497~exp=1719858097~hmac=5ac736afe64edc1cb85118acfbde3a775305665d11d309e225ebb6a017707175&w=740",
    desc: "The Thayumanavar application is dedicated to collecting detailed family information, focusing on property and household assessments to identify economically disadvantaged families. It streamlines the survey process by efficiently gathering comprehensive data crucial for identifying and supporting needy families. The application facilitates accurate data collection and analysis, aiding in targeted interventions and welfare programs. Thayumanavar is designed to ensure transparency and efficiency in assessing and assisting underprivileged families, contributing to effective social welfare initiatives.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
