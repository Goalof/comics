import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vswix"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			text-align="left"
			padding="0px 0 0px 0"
			background-image="linear-gradient(0deg, #0E1317 0%, #22262E 100%)"
			lg-text-align="left"
			position="relative"
			overflow="hidden"
			sm-padding="50px 0 70px 0"
			sm-text-align="center"
			quarkly-title="Hero"
			lg-padding="60px 0 80px 0"
			md-padding="40px 0 60px 0"
			min-height="900px"
			background="rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(14, 19, 23) 0%, rgb(34, 38, 46) 100%) 0% 0% /auto repeat scroll padding-box"
		>
			<Override
				slot="SectionContent"
				text-align="center"
				color="--light"
				justify-content="space-between"
				max-width="none"
				width="100%"
			/>
			<Stack
				margin="0px 0px 0px 0px"
				position="relative"
				z-index="7"
				background="#219df3"
				gap="--cmp-stack-gap-small"
			>
				{"    "}
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="/ru">
						<Image src="https://uploads.quarkly.io/landing/logo-on-dark.svg" width="180px" height="auto" margin="0px 0px 0px 20px" />
						{" "}
					</Link>
					{"   "}
				</StackItem>
				<StackItem width="60%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="space-around" />
					<Text font="21px/18px --fontFamily-googleCaveat">
						Первое издание - 04.2021
					</Text>
					{"           "}
				</StackItem>
				{"    "}
				<StackItem width="20%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" margin="0px 20px 0px 0px" />
					{"        "}
					<Link
						href="/"
						display="flex"
						align-items="center"
						justify-content="center"
						text-decoration-line="initial"
						color="--light"
						font="11px --fontFamily-googleComicNeue"
						text-transform="uppercase"
						hover-color="--light"
						hover-text-decoration-line="underline"
					>
						<Image src="https://uploads.quarkly.io/607631c192d19d001eee63e8/images/united-states-of-america.svg?v=2021-04-14T01:45:49.199Z" width="20px" height="20px" margin="0px 8px 0px 0px" />
						<Text margin="0px 0px 0px 0px" display="inline-block" font="15px/18px --fontFamily-googleInter" letter-spacing="1px">
							English
						</Text>
					</Link>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="0px 0px 0px 0px" position="relative" z-index="7" gap="0px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" justify-content="center" />
					<Text
						className="name-com"
						transform="skew(0deg, -10deg)"
						font="500 180px/170px --fontFamily-googleCreepster"
						color="#66FFE4"
						letter-spacing="8px"
						text-shadow="3px 4px 3px #000000"
						margin="0px 0px 0px 0px"
					>
						<Span
							className="name-com"
							color="#2196F3"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Quarkl
						</Span>
						ity
					</Text>
					{"           "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" position="relative" z-index="7" gap="0px">
				{"    "}
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/607631c192d19d001eee63e8/images/4.png?v=2021-04-14T00:45:42.680Z" />
					{"   "}
				</StackItem>
				<StackItem width="50%" display="flex">
					<Override slot="StackItemContent" justify-content="flex-end" />
					{"        "}
					<Image src="https://uploads.quarkly.io/607631c192d19d001eee63e8/images/4.png?v=2021-04-14T00:45:42.680Z" />
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
			<Components.Dots
				position="absolute"
				top="0px"
				bottom="0px"
				left="0px"
				right="0px"
			/>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" quarkly-title="Footer">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60763e6025c13db548f25649"} />
		</RawHtml>
	</Theme>;
});