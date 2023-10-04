import { useEffect, useState } from "react";
import { AiFillCaretRight, AiFillMail } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import {
  FaUserTie,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCircle,
} from "react-icons/fa";
import * as S from "./styled";
import { useDispatch } from "react-redux";
import { close } from "../../app/ModalSlice";
import HeadComponent from "../HeadComponent";
import { AnimatePresence } from "framer-motion";
import Hero from "../../public/hero.jpg";
import Image from "next/image";

const ModalComponent = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState<string>("Web");
  const qualityServices = [
    "Website Development",
    "Digital Experience",
    "Content Marketing",
    "Social Media Design",
    "Shared Web Hosting",
  ];
  const skills = ["Javascript", "React", "Html", "Css", "NodeJS"];
  const languages = ["English", "Hindi", "Tamil"];
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
    <S.ModalContainer
      id="ModalContainer"
      initial={{ y: -10, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <HeadComponent />
      <S.ModalBox id="modalbox">
        <S.Modal id="modal" layout>
          <S.LeftSide>
            <S.ImageContainer>
              <Image src={Hero} alt="hero" />
            </S.ImageContainer>
            <S.NameContainer>
              <S.Heading>
                Vignesh <span>Kumar</span>
              </S.Heading>
              <S.Description>
                <AnimatePresence exitBeforeEnter>
                  <S.DescriptionAnimation
                    key={word}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                  >
                    {word}
                  </S.DescriptionAnimation>
                </AnimatePresence>
                <span>Developer</span>
              </S.Description>
            </S.NameContainer>

            <S.AddressList>
              <S.AddressItem>
                <FaUserTie color="#eb4a4c" />
                <span>Vignesh Kumar L</span>
              </S.AddressItem>
              <S.AddressItem>
                <FaCalendarAlt color="#eb4a4c" />
                <span>21.10.1994</span>
              </S.AddressItem>
              <S.AddressItem>
                <FaMapMarkerAlt color="#eb4a4c" />{" "}
                <span>Arun Excello Narmada, Chennai</span>
              </S.AddressItem>
              <S.AddressItem>
                <FaPhoneAlt color="#eb4a4c" /> <span>+91 99529 14839</span>
              </S.AddressItem>
              <S.AddressItem>
                <AiFillMail color="#eb4a4c" />{" "}
                <span>reactivicky@gmail.com</span>
              </S.AddressItem>
            </S.AddressList>

            <S.DownloadBtn
              className="redBtn"
              whileTap={{ scale: 0.8 }}
              whileHover={{
                color: "black",
                backgroundColor: "white",
                outline: "1px solid #eb4a4c",
              }}
              onClick={() => null}
            >
              <a href="/Vignesh-fullstack.pdf" target="_blank" download>
                Download CV
              </a>
            </S.DownloadBtn>
            <S.CloseBtn
              whileHover={{ borderRadius: "8px" }}
              transition={{ damping: 1 }}
              onClick={() => dispatch(close())}
            >
              <GrFormClose />
            </S.CloseBtn>
          </S.LeftSide>

          <S.RightSide>
            <S.RightSideSection>
              <S.SectionHeading>
                About <span>Me</span>
              </S.SectionHeading>
              <div className="divider" />
              <S.DescriptionText className="descriptionText">
                My name is <span>Vignesh Kumar L</span>. I am a Full Stack
                Developer, and I&apos;m very passionate and dedicated to my
                work. With 7+ years experience as a professional a Web
                Developer, I have acquired my skills and knowledge.
              </S.DescriptionText>
            </S.RightSideSection>

            <S.RightSideSection>
              <S.SectionHeading>
                Quality <span>Services</span>
              </S.SectionHeading>
              <div className="divider" />
              <S.StyledUL>
                {qualityServices.map((service) => (
                  <S.StyledLI key={service}>
                    <AiFillCaretRight color="#eb4a4c" /> {service}
                  </S.StyledLI>
                ))}
              </S.StyledUL>
            </S.RightSideSection>

            <S.RightSideSection>
              <S.SectionHeading>
                Programming <span>Skills</span>
              </S.SectionHeading>
              <div className="divider" />
              <S.StyledUL>
                {skills.map((skill) => (
                  <S.StyledLI key={skill}>
                    <AiFillCaretRight color="#eb4a4c" /> {skill}
                  </S.StyledLI>
                ))}
              </S.StyledUL>
            </S.RightSideSection>

            <S.RightSideSection>
              <S.SectionHeading>
                Languange <span>Skills</span>
              </S.SectionHeading>
              <div className="divider" />
              <S.StyledUL>
                {languages.map((language) => (
                  <S.StyledLI key={language}>
                    <AiFillCaretRight color="#eb4a4c" /> {language}
                  </S.StyledLI>
                ))}
              </S.StyledUL>
            </S.RightSideSection>

            <S.RightSideSection>
              <S.SectionHeading>
                Working <span>Timeline</span>
              </S.SectionHeading>
              <S.ExtraMarginDivider className="divider" />
              <S.TimelineContainer>
                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2023 - Present</span>
                </S.DateContainer>
                <S.InstitutionName>
                  Exclusive Resorts (supplied by Entrans)
                </S.InstitutionName>
                <S.DegreeName>
                  Senior Software Engineer (Consultant)
                </S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2021 - 2022</span>
                </S.DateContainer>
                <S.InstitutionName>
                  Informa (supplied by Impelsys)
                </S.InstitutionName>
                <S.DegreeName>Senior Software Engineer</S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2020 - 2021</span>
                </S.DateContainer>
                <S.InstitutionName>LIDO</S.InstitutionName>
                <S.DegreeName>Senior Software Engineer</S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2020 - 2020</span>
                </S.DateContainer>
                <S.InstitutionName>Axelerant</S.InstitutionName>
                <S.DegreeName>Front End Developer</S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2019 - 2020</span>
                </S.DateContainer>
                <S.InstitutionName>
                  Mr Cooper (supplied by TCS)
                </S.InstitutionName>
                <S.DegreeName>React Developer (Consultant)</S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2016 - 2019</span>
                </S.DateContainer>
                <S.InstitutionName>Sky Global Services</S.InstitutionName>
                <S.DegreeName>React Developer</S.DegreeName>
              </S.TimelineContainer>
            </S.RightSideSection>

            <S.RightSideSection>
              <S.SectionHeading>
                Education <span>Timeline</span>
              </S.SectionHeading>
              <S.ExtraMarginDivider className="divider" />
              <S.TimelineContainer>
                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2013 - 2016</span>
                </S.DateContainer>
                <S.InstitutionName>
                  Madurai Kamaraj University
                </S.InstitutionName>
                <S.DegreeName>B.COM</S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2013 - 2016</span>
                </S.DateContainer>
                <S.InstitutionName>SIPT</S.InstitutionName>
                <S.DegreeName>Diploma</S.DegreeName>

                <S.DateContainer>
                  <FaCircle color="#eb4a4c" />
                  <span>2010 - 2012</span>
                </S.DateContainer>
                <S.InstitutionName>Kvs Matriculation School</S.InstitutionName>
                <S.DegreeName>+2</S.DegreeName>
              </S.TimelineContainer>
            </S.RightSideSection>
          </S.RightSide>
        </S.Modal>
      </S.ModalBox>
    </S.ModalContainer>
  );
};

export default ModalComponent;
