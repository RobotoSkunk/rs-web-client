/**
 * robotoskunk.com front client. The frontend part of robotoskunk.com
 * Copyright (C) 2026  Edgar Lima (RobotoSkunk)
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
**/

export default {
	pages: {
		home: {
			meta: {
				title: `RobotoSkunk`,
				description: `Hi, I'm Edgar Lima, a computer system's engineer.`,
			},

			identity: {
				name: `Edgar Lima`,
				career: `Computer Systems Engineer`,
			},
		},
		portfolio: {
			meta: {
				title: `Portfolio`,
				description: `A list of some of the projects I've worked on.`,
			},

			title: `Portfolio`,
			content: `A list of some of the projects I've worked on.`,
		},
		illustrations: {
			meta: {
				title: `Illustrations`,
				description: `A collection of my favorite illustrations.`,
			},

			title: `Illustrations`,
			content: `A collection of my favorite illustrations.`,

			card: {
				untitled: `Untitled`,
				description: `Not description provided for this picture.`,
			},
		},
		error: {
			notFound: {
				phrases: () =>
				{
					const list = [
						`Did you lose something?`,
						`Do you need a map?`,
						`Where are you going?`,
						`Is this the road to El Dorado?`,
						`The princess is in another castle!`,
						`Have you seen a white dog sleeping around here?`,
						`Nemo and you would get along great.`,
						`The page is a lie!`,
						`KRIS, WHERE THE F*** ARE WE??`,
					];

					return list[Math.floor(Math.random() * list.length)];
				},
			},
		},
	},
	layout: {
		nav: {
			home: `Home`,
			blog: `Blog`,
			portfolio: `Portfolio`,
			illustrations: `Illustrations`,
			contact: `Contact`,
		},
		footer: {
			copyright: ({ year }: { year: number }) =>
			{
				return `© Copyright ${year} RobotoSkunk.`;
			},
			builtFrom: ({ hash }: { hash: string }) =>
			{
				return `Built from ${hash}.`;
			},
			terms: `Terms of Use`,
			privacy: `Privacy Policy`,
			acknowledgements: `Acknowledgements`,
			openSource: `Open Source`,
		},
	},
};
