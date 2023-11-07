import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'notOSU! Doc',
			social: {
				github: 'https://github.com/Tunnelbliick/notosu',
				discord: 'https://discord.gg/GBY9BWsr5k'
			},
			sidebar: [
				{
					label: 'Initial Setup',
					items: [
						{ label: 'Getting Started', link: '/start/start/' },
						{ label: 'Storybew Setup', link: '/start/storybrew/' },
						{ label: 'Storyboarding 101', link: '/start/storyboarding/' },
						{ label: 'notOSU! Setup', link: '/start/notosu/' },
						{ label: 'My First Effect', link: '/start/firsteffect/' },
					],
				},
				{
					label: 'Effects',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Available Effects', link: '/effects/effects/' },
					],
				},
				{
					label: 'Render | Draw',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Available Renders', link: '/render/renders/' },
					],
				},
			],
		}),
	],
});
