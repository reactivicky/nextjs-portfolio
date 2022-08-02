import { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import {
	ModalBox,
	ModalContainer,
	Modal,
	LeftSide,
	RightSide,
	ImageContainer,
	Heading,
	Description,
	DescriptionAnimation,
	NameContainer,
	DownloadBtn,
	AddressList,
	AddressItem,
	CloseBtn,
	RightSideSection,
	SectionHeading,
	DescriptionText,
	QualityServices,
	QualityService,
} from "./styled";
import { useDispatch } from "react-redux";
import { close } from "../../app/ModalSlice";
import HeadComponent from "../HeadComponent";
import { AnimatePresence } from "framer-motion";

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
		<ModalContainer
			initial={{ y: -10, opacity: 0 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.2 }}
		>
			<HeadComponent />
			<ModalBox>
				<Modal layout>
					<LeftSide>
						<ImageContainer>
							<div />
						</ImageContainer>

						<NameContainer>
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
						</NameContainer>

						<AddressList>
							<AddressItem>
								<AiFillCaretRight color="#eb4a4c" /> Vignesh Kumar L
							</AddressItem>
							<AddressItem>21.10.1994</AddressItem>
							<AddressItem>Arun Excello Narmada, Chennai</AddressItem>
							<AddressItem>+91 99529 14839</AddressItem>
							<AddressItem>reactivicky@gmail.com</AddressItem>
						</AddressList>

						<DownloadBtn
							className="redBtn"
							whileTap={{ scale: 0.8 }}
							whileHover={{
								color: "black",
								backgroundColor: "white",
								outline: "1px solid #eb4a4c",
							}}
							onClick={() => null}
						>
							Download CV
						</DownloadBtn>
						<CloseBtn
							whileHover={{ borderRadius: "8px" }}
							transition={{ damping: 1 }}
							onClick={() => dispatch(close())}
						>
							<GrFormClose size={20} />
						</CloseBtn>
					</LeftSide>

					<RightSide>
						<RightSideSection>
							<SectionHeading>
								About <span>Me</span>
							</SectionHeading>
							<div className="divider" />
							<DescriptionText className="descriptionText">
								My name is <span>Vignesh Kumar L</span>. I am a Front End
								Developer, and I&apos;m very passionate and dedicated to my
								work. With 6+ years experience as a professional a Web
								Developer, I have acquired my skills and knowledge.
							</DescriptionText>
						</RightSideSection>
						<RightSideSection>
							<SectionHeading>
								Quality <span>Services</span>
							</SectionHeading>
							<div className="divider" />
							<QualityServices>
								{qualityServices.map((service) => (
									<QualityService key={service}>
										<AiFillCaretRight color="#eb4a4c" /> {service}
									</QualityService>
								))}
							</QualityServices>
						</RightSideSection>
						<RightSideSection>Programming Skills</RightSideSection>
						<RightSideSection>Languange Skills</RightSideSection>
						<RightSideSection>Education Timeline</RightSideSection>
						<RightSideSection>Working TImeline</RightSideSection>
						<RightSideSection>My Partners</RightSideSection>
						<RightSideSection>Clients Feedback</RightSideSection>
					</RightSide>
				</Modal>
			</ModalBox>
		</ModalContainer>
	);
};

export default ModalComponent;
