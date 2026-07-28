import {
	StrictMode,
} from 'react';

import {
	createRoot,
} from 'react-dom/client';

import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router';

import Layout from '@app/layout';

import PageHome from '@app/page';

(import.meta.hot.data.root ??= createRoot(document.body)).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={ <Layout/> }>
					<Route path='/' element={ <PageHome/> }/>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
