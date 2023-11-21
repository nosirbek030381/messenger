import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../../slice/auth';
import { Input } from '../../ui';
import AuthService from './../../service/auth';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const registerHandler = async e => {
		e.preventDefault();
		dispatch(signUserStart());
		const user = { firstname: name, email, phone, password };
		try {
			const response = await AuthService.userRegister(user);
			console.log(response);
			dispatch(signUserSuccess());
		} catch (error) {
			dispatch(signUserFailure());
		}
	};

	return (
		<section
			className='vh-100 bg-image'
			style={{
				backgroundImage:
					"url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
			}}
		>
			<div className='mask d-flex align-items-center h-100 gradient-custom-3'>
				<div className='container '>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col-12 col-md-9 col-lg-7 col-xl-6'>
							<div className='card' style={{ borderRadius: '15px' }}>
								<div className='card-body'>
									<h2 className='text-uppercase text-center mb-5'>Create an account</h2>

									<Input label={'Name'} state={name} setState={setName} />
									<Input label={'Email'} state={email} setState={setEmail} type={'email'} />
									<Input label={'Phone'} type={'tel'} state={phone} setState={setPhone} />
									<Input
										label={'Password'}
										type={'password'}
										state={password}
										setState={setPassword}
									/>

									<div className='d-flex justify-content-center'>
										<button
											type='button'
											className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'
											onClick={registerHandler}
										>
											Register
										</button>
									</div>

									<p className='text-center text-muted mt-5 mb-0'>
										Have already an account?{' '}
										<a href={'/login'} className='fw-bold text-body'>
											<u>Login here</u>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
