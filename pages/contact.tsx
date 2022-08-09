import { AiFillMail } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "../styles/Contact.styled";
import { useState } from "react";

const schema = yup
	.object({
		name: yup.string().required("This field is required"),
		email: yup
			.string()
			.email("Please include valid email")
			.required("This field is required"),
		message: yup
			.string()
			.required("This field is required")
			.max(100, "Maximum number of characters is 100"),
	})
	.required();

const ContactPage = () => {
	const [showSubmittedMessage, setShowSubmittedMessage] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		criteriaMode: "all",
	});

	const onSubmit = (data: any) => {
		console.log(data);
		reset();
		setShowSubmittedMessage(true);
	};

	return (
		<S.Container
			className="container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<S.Heading>
				Get in <span>Touch</span>
			</S.Heading>
			<S.Divider className="divider" />

			<S.Details>
				<S.DetailsContainer>
					<S.DetailsAddress>
						<FaMapMarkerAlt color="#eb4a4c" />{" "}
						<span>Arun Excello Narmada, Chennai</span>
					</S.DetailsAddress>
					<S.DetailsAddress>
						<FaPhoneAlt color="#eb4a4c" /> <span>+91 99529 14839</span>
					</S.DetailsAddress>
					<S.DetailsAddress>
						<AiFillMail color="#eb4a4c" /> <span>reactivicky@gmail.com</span>
					</S.DetailsAddress>
				</S.DetailsContainer>
				<S.FormContainer onSubmit={handleSubmit(onSubmit)}>
					<S.InputContainer>
						<input placeholder="Name" {...register("name")} />
						{errors.name && <span>{(errors as any).name.message}</span>}
					</S.InputContainer>
					<S.InputContainer>
						<input placeholder="Email" {...register("email")} />
						{errors.email && <span>{(errors as any).email.message}</span>}
					</S.InputContainer>
					<S.InputContainer>
						<textarea placeholder="Message" {...register("message")} />
						{errors.message && <span>{(errors as any).message.message}</span>}
					</S.InputContainer>
					<S.SubmitBtn
						whileTap={{ scale: 0.8 }}
						whileHover={{
							color: "black",
							backgroundColor: "white",
							outline: "1px solid #eb4a4c",
						}}
						type="submit"
						className="redBtn"
					>
						Submit Message
					</S.SubmitBtn>
					
				</S.FormContainer>
				{showSubmittedMessage && <p>Your message has been submitted</p>}
			</S.Details>
		</S.Container>
	);
};

export default ContactPage;
