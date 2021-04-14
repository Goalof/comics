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
			min-height="100vh"
			background="url(https://uploads.quarkly.io/607631c192d19d001eee63e8/images/5.png?v=2021-04-14T22:28:20.851Z) 0% 0%/cover no-repeat,rgba(0, 0, 0, 0) linear-gradient(0deg, rgb(14, 19, 23) 0%, rgb(34, 38, 46) 100%) 0% 0% /auto repeat scroll padding-box"
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
					<Image src="https://uploads.quarkly.io/607631c192d19d001eee63e8/images/4.png?v=2021-04-14T00:45:42.680Z" filter="drop-shadow(0 0 3px rgba(100,0,0,0.5))" />
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
			<style place={"endOfHead"} rawKey={"60763e6025c13db548f25649"}>
				{"#container {\n  position: fixed;\n  touch-action: none;\n}"}
			</style>
			<script async={false} defer={false} place={"endOfBody"} rawKey={"60776b9bfa6f9ca88e868eb6"}>
				{"let container;\nlet camera, scene, renderer;\nlet uniforms;\n\nlet loader=new THREE.TextureLoader();\nlet texture;\nloader.setCrossOrigin(\"anonymous\");\nloader.load(\n  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',\n  function do_something_with_texture(tex) {\n    texture = tex;\n    texture.wrapS = THREE.RepeatWrapping;\n    texture.wrapT = THREE.RepeatWrapping;\n    texture.minFilter = THREE.LinearFilter;\n    init();\n    animate();\n  }\n);\n\nfunction init() {\n  container = document.getElementById( 'container' );\n\n  camera = new THREE.Camera();\n  camera.position.z = 1;\n\n  scene = new THREE.Scene();\n\n  var geometry = new THREE.PlaneBufferGeometry( 2, 2 );\n\n  uniforms = {\n    u_time: { type: \"f\", value: 1.0 },\n    u_resolution: { type: \"v2\", value: new THREE.Vector2() },\n    u_noise: { type: \"t\", value: texture },\n    u_mouse: { type: \"v2\", value: new THREE.Vector2() }\n  };\n\n  var material = new THREE.ShaderMaterial( {\n    uniforms: uniforms,\n    vertexShader: document.getElementById( 'vertexShader' ).textContent,\n    fragmentShader: document.getElementById( 'fragmentShader' ).textContent\n  } );\n  material.extensions.derivatives = true;\n\n  var mesh = new THREE.Mesh( geometry, material );\n  scene.add( mesh );\n\n  renderer = new THREE.WebGLRenderer();\n  renderer.setPixelRatio( window.devicePixelRatio );\n\n  container.appendChild( renderer.domElement );\n\n  onWindowResize();\n  window.addEventListener( 'resize', onWindowResize, false );\n\n  document.addEventListener('pointermove', (e)=> {\n    let ratio = window.innerHeight / window.innerWidth;\n    uniforms.u_mouse.value.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;\n    uniforms.u_mouse.value.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;\n    \n    e.preventDefault();\n  });\n}\n\nfunction onWindowResize( event ) {\n  renderer.setSize( window.innerWidth, window.innerHeight );\n  uniforms.u_resolution.value.x = renderer.domElement.width;\n  uniforms.u_resolution.value.y = renderer.domElement.height;\n}\n\nfunction animate(delta) {\n  requestAnimationFrame( animate );\n  render(delta);\n}\n\n\n\n\n\n\nlet capturer = new CCapture( { \n  verbose: true, \n  framerate: 60,\n  // motionBlurFrames: 4,\n  quality: 90,\n  format: 'webm',\n  workersPath: 'js/'\n } );\nlet capturing = false;\n\nisCapturing = function(val) {\n  if(val === false && window.capturing === true) {\n    capturer.stop();\n    capturer.save();\n  } else if(val === true && window.capturing === false) {\n    capturer.start();\n  }\n  capturing = val;\n}\ntoggleCapture = function() {\n  isCapturing(!capturing);\n}\n\nwindow.addEventListener('keyup', function(e) { if(e.keyCode == 68) toggleCapture(); });\n\nlet then = 0;\nfunction render(delta) {\n  \n  uniforms.u_time.value = -10000 + delta * 0.0005;\n  renderer.render( scene, camera );\n  \n  if(capturing) {\n    capturer.capture( renderer.domElement );\n  }\n}"}
			</script>
		</RawHtml>
	</Theme>;
});