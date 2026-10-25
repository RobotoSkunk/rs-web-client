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
				description: `Hola, soy Edgar Lima, un ingeniero en sistemas computacionales.`,
			},

			identity: {
				name: `Edgar Lima`,
				career: `Ingeniero en Sistemas Computacionales`,
			},
		},
		portfolio: {
			meta: {
				title: `Portafolio`,
				description: `Una lista de algunos de los proyectos en los que he trabajado.`,
			},

			title: `Portafolio`,
			content: `Una lista de algunos de los proyectos en los que he trabajado.`,
		},
		illustrations: {
			meta: {
				title: `Ilustraciones`,
				description: `Una colección de mis ilustraciones favoritas.`,
			},

			title: `Ilustraciones`,
			content: `Una colección de mis ilustraciones favoritas.`,

			card: {
				untitled: `Sin Título`,
				description: `No se ha proveído una descripción para esta imagen.`,
			},
		},
		error: {
			notFound: {
				phrases: () =>
				{
					const list = [
						`¿Perdiste algo?`,
						`¿Necesitas un mapa?`,
						`¿Qué estás haciendo?`,
						`¿Es este el camino hacia El Dorado?`,
						`¡La princesa está en otro castillo!`,
						`¿Has visto a un perro blanco durmiendo por aquí?`,
						`Nemo y tú se llevarían muy bien.`,
						`¡La página es una mentira!`,
						`KRIS, ¿¿DÓNDE M***** ESTAMOS??`,
					];

					return list[Math.floor(Math.random() * list.length)];
				},
			},
		},
	},
	layout: {
		nav: {
			home: `Inicio`,
			blog: `Blog`,
			portfolio: `Portafolio`,
			illustrations: `Ilustraciones`,
			contact: `Contacto`,
		},
		footer: {
			copyright: ({ year }: { year: number }) =>
			{
				return `© Copyright ${year} RobotoSkunk.`;
			},
			builtFrom: ({ hash }: { hash: string }) =>
			{
				return `Compilado de ${hash}.`;
			},
			terms: `Términos de Uso`,
			privacy: `Aviso de Privacidad`,
			acknowledgements: `Reconocimientos`,
			openSource: `Código Abierto`,
		},
	},
};
