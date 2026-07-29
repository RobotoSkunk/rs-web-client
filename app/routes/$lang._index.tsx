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


import type {
	Route,
} from './+types/$lang._index'

import {
	NavLink,
} from 'react-router';

import skunko from '~/assets/img/alex-happy.webp';


export default function PageHome({ params }: Route.LoaderArgs)
{
	return (<>
		<h1>Does this work?</h1>
		<h2>Does this work?</h2>
		<h3>Does this work?</h3>
		<h4>Does this work?</h4>
		<h5>Does this work?</h5>
		<h6>Does this work?</h6>
		<img src={ skunko }/>
		<NavLink to={ `/${params.lang}/another` }>Go to another site.</NavLink>
	</>);
}
