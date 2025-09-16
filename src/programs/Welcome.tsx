import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import doom from "../../assets/doom.svg";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";
// Import placeholder or use default images when available

const INTRO = `Hi, I'm Omkar Bhor, a CSE Student based in Pune, India. I am 
  currently a CSE Student at PCET's Nutan College of Engineering and Research (NCER) and I am
  passionate about Rust, Systems Programming, Operating Systems, Compilers, GPU Programming, 
  Artificial Intelligence & Machine Learning (AI/ML), Problem Solving (DSA), and Building Developer Tools.`;

const WHYSITE = `I've always loved the look and feel of old-school Windows XP. Instead of making another 
cookie-cutter modern portfolio, I wanted something that feels playful, nostalgic, and different. At the 
same time, it's a fun way to show my technical skills and personality in one place.`;

const INTERESTS = `I hit the gym regularly — lifting weights keeps me disciplined and gives me a solid 
break from screens. I'm into gaming, especially immersive AAA titles like the Resident Evil and Batman 
Arkham series. Music is a big part of my daily routine — I vibe to all kinds, but rap stays on top. 
Kanye West, Travis Scott, Damien Bala, and Sabrocki are always on my playlist. Movies? I'm a straight-up 
cinephile — I watch 3–4 films a week and love exploring everything from classics to new releases. 
Basketball is my go-to sport whenever I want some action outdoors. I've got a long travel bucket list 
and love the idea of exploring new places. I'm always eager to learn new technologies and take on 
challenging projects that push my programming skills to the next level.`;

const INTERESTS2 = `One of the defining moments of my CS degree has been building a GPT-style language 
model completely from scratch in C++. At first, it felt impossible — the math behind transformers, the 
memory management in C++, and the challenges of parallel GPU programming pushed me way out of my comfort zone. 
Through months of trial and error, I learned how to implement attention mechanisms, optimize tensor 
computations, and design CUDA kernels for efficient training. I had to wrestle with low-level details 
like memory alignment and GPU utilization, which gave me a much deeper understanding of how modern AI 
actually works under the hood. This project isn't just another assignment — it's the one that defines 
my CS degree. In a world where AI is reshaping everything, building my own GPT from scratch taught me 
persistence, systems-level thinking, and the confidence to take on problems most people shy away from.`;

const INTERESTS3 = `I'm passionate about bike riding — there's nothing like hitting the open road on a high CC bike 
and feeling that sense of freedom and adrenaline. I'm also an avid reader, devouring 30–40 books a year. 
I'm drawn to philosophical works by Nietzsche, Dostoevsky, and Albert Camus, as well as immersive, 
world-building novels by authors like J.R.R. Tolkien and George R.R. Martin. Reading fuels both my 
curiosity and imagination, giving me new perspectives on life and creativity.
`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Welcome To Omkar Bhor&apos;s Personal Website
          </h3>
          <p className={styles.subtitle}>
            Learn more about me by clicking any of the icons below to get
            started!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"About Me"}
                tooltip="Who am I?"
                onClick={handleSwitchView}
              />
              <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/urngmi",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/BhorOmkar/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              />
              <WelcomeIcon
                img={pdf}
                text={"My Resume"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              />
            </div>
            <div className={styles.rightpanel}>
              <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              />
              <WelcomeIcon
                img={doom}
                text={"Play DOOM"}
                tooltip="Classic FPS Game"
                onClick={() => handleRunApp(3)}
              />
              <WelcomeIcon
                img={outlook}
                text={"Send Me An Email"}
                tooltip="Reach out to me!"
                onClick={() => handleRunApp(1)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>About Me</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            <div className={styles.text_col} style={{width: '100%'}}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>
                Why a personal website like this?
              </h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>
                What are your interests?
              </h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
