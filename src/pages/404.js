import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
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