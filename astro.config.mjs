import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'notOSU! Doc',
			social: {
				github: 'https://github.com/Tunnelbliick/notosu',
				discord: 'https://discord.notosu.sh'
			},
			sidebar: [
				{
					label: 'Initial Setup',
					items: [
						{ label: 'Getting Started', link: '/start/start' },
						{ label: 'Storybrew Setup', link: '/start/storybrew/' },
						{ label: 'Storyboarding 101', link: '/start/storyboarding/' },
						{ label: 'notOSU! Setup', link: '/start/notosu/' },
						{ label: 'My First Effect', link: '/start/firsteffect/' },
					],
				},
				{
					label: 'Sprite Setup',
					items: [
						{ label: 'Folder Structure', link: '/sprites/sprites' },
						{ label: 'Non Arrow Skins', link: '/sprites/nonarrow/' },
					],
				},		
				{
					label: 'Classes',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Playfield', link: '/playfield/playfield' },
						{ label: 'Column', link: '/playfield/column/column' },
						{ label: 'Receptor', link: '/playfield/receptor/receptor' },
						{ label: 'Origin', link: '/playfield/origin/origin' },
						{ label: 'Note', link: '/playfield/note/note' },
					],
				},
				{
					label: 'Render',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'OriginToReceptor', link: '/render/origin2receptor/' },
						{ label: 'ByEquation', link: '/render/byequation/' },
						{ label: 'Stutter', link: '/render/stutter/' },
						{ label: 'ByAnchors', link: '/render/byanchors/' },
						{ label: 'PathWay', link: '/render/pathway/' },
					],
				},
				{
					label: 'Utility',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Utility', link: '/utility/utility' },
					],
				},
			],
		}),
	],
});
