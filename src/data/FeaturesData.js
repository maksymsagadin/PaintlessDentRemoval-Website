import React from 'react'
import { GiCarWheel, GiClawHammer, GiGooSpurt } from 'react-icons/gi'
const iconStyle = (Icon) => <Icon size="3rem" color="white" />;

export const featuresData = {
	title: 'Our Services',
	text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	content: [
		{
			name: 'Paintless Dent Repair',
			description: 'From Dinged to Nicest with a few pushes',
			icon: iconStyle(GiClawHammer),
		},
		{
			name: 'Fender Shaving',
			description: 'Immaculately sliced fenders for fitment',
			icon: iconStyle(GiCarWheel),
		},
		{
			name: 'Detailing',
			description: 'We can provide a show car finish',
			icon: iconStyle(GiGooSpurt),
		},
	],
}