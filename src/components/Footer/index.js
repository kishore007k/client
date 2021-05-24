import React, { useState } from "react";

import TwitterIcon from "../../assets/icons/TwitterIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import LinkedInIcon from "../../assets/icons/LinkedInIcon";
import {
	BottomDiv,
	FooterWrapper,
	Header,
	InnerLinkContainer,
	InnerLinks,
	TopDiv,
	DivContainer,
	SocialLinks,
} from "./styles";
import { ContactInput, SendBtn } from "../../utils/FormStyle";

const Footer = () => {
	const [email, setEmail] = useState("");

	return (
		<FooterWrapper>
			<DivContainer>
				<TopDiv>
					<Header>Help</Header>
					<InnerLinkContainer>
						<InnerLinks>Frequently asked questions</InnerLinks>
						<InnerLinks>My Account</InnerLinks>
						<InnerLinks>Corporate Gifting</InnerLinks>
						<InnerLinks>Contact Us</InnerLinks>
					</InnerLinkContainer>
				</TopDiv>
				<TopDiv>
					<Header>Shop</Header>
					<InnerLinkContainer>
						<InnerLinks>Asus</InnerLinks>
						<InnerLinks>Acer</InnerLinks>
						<InnerLinks>Dell</InnerLinks>
						<InnerLinks>Apple</InnerLinks>
					</InnerLinkContainer>
				</TopDiv>
				<TopDiv>
					<Header>Support</Header>
					<InnerLinkContainer>
						<InnerLinks>Help&Center</InnerLinks>
						<InnerLinks>Privacy Policy</InnerLinks>
					</InnerLinkContainer>
				</TopDiv>
				<div>
					<ContactInput
						type="email"
						value={email}
						placeholder="Buy me a coffee!"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<SendBtn>Send</SendBtn>
				</div>
			</DivContainer>
			<DivContainer>
				<BottomDiv>
					<p>© 2021 Kishore. All Rights Reserved.</p>
				</BottomDiv>
				<BottomDiv>
					<SocialLinks>
						<TwitterIcon />
					</SocialLinks>
					<SocialLinks>
						<InstagramIcon />
					</SocialLinks>
					<SocialLinks>
						<FacebookIcon />
					</SocialLinks>
					<SocialLinks>
						<LinkedInIcon />
					</SocialLinks>
				</BottomDiv>
				<BottomDiv>
					<p>Terms & Privacy</p>
				</BottomDiv>
			</DivContainer>
		</FooterWrapper>
	);
};

export default Footer;
