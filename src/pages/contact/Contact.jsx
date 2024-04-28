import React from 'react';
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
		<main>
			<Helmet>
				<title>Home page</title>
			</Helmet>
			<BreadCrumbs />
		</main>
	);
}

export default Contact;
