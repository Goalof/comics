import React from 'react';
import atomize from "@quarkly/atomize";
import Particles from 'react-particles-js';

const Dots = props => <Particles params={{
	"particles": {
		"width": "100",
		"height": "100",
		"color": {
			"value": "#fff"
		},
		"number": {
			"value": 100,
			"density": {
				"enable": false
			}
		},
		"size": {
			"value": 4,
			"random": true,
			"anim": {
				"speed": 2,
				"size_min": 0.1
			}
		},
		"line_linked": {
			"enable": false
		},
		"move": {
			"random": true,
			"speed": 1,
			"direction": "top",
			"out_mode": "out"
		}
	},
	"interactivity": {
		"events": {
			"onhover": {
				"enable": true,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			}
		},
		"modes": {
			"bubble": {
				"distance": 600,
				"duration": 2,
				"size": 2,
				"opacity": 0.3
			},
			"repulse": {
				"distance": 800,
				"duration": 9
			}
		}
	}
}} {...props} />;

export default atomize(Dots)({
	name: "Dots",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Dots — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});