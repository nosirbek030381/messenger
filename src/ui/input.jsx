const Input = ({ label, state, setState, type = 'text' }) => {
	return (
		<div className='form-outline mb-4'>
			<label className='form-label' htmlFor='form3Example4cg'>
				{label}
			</label>
			<input
				type={type}
				id='form3Example4cg'
				value={state}
				placeholder={label}
				className='form-control form-control-lg'
				onChange={e => setState(e.target.value)}
			/>
		</div>
	);
};

export default Input;
