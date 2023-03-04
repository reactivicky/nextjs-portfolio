import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Container,
  Description,
  DescriptionAnimation,
  GetInTouchBtn,
  Heading,
} from "../styles/Home.styled";
import { HeadComponent } from "../components";

const Home: NextPage = () => {
  const router = useRouter();
  const [word, setWord] = useState<string>("Web");

  useEffect(() => {
    const timer = setInterval(() => {
      setWord((prevState) => {
        if (prevState === "Web") {
          return "React";
        }
        return "Web";
      });
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        bounceDamping: 1,
      }}
    >
      <HeadComponent />
      <Heading>
        Vignesh <span>Kumar</span>
      </Heading>
      <Description>
        <AnimatePresence exitBeforeEnter>
          <DescriptionAnimation
            key={word}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
          >
            {word}
          </DescriptionAnimation>
        </AnimatePresence>
        <span>Developer</span>
      </Description>
      <GetInTouchBtn
        className="redBtn"
        whileTap={{ scale: 0.8 }}
        whileHover={{
          color: "black",
          backgroundColor: "white",
          outline: "1px solid #eb4a4c",
        }}
        onClick={() => router.push("/contact")}
      >
        Get in Touch
      </GetInTouchBtn>
    </Container>
  );
};

export default Home;
