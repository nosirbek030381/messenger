import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<h1>Hello</h1>
			<Link to={'/register'}>Register</Link>
		</div>
	);
};

export default Main;
