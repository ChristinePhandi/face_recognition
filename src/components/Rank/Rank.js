import React from 'react';

const Rank = ({name,entries}) => {
	return(
		<div>
			<div className='center white f3'>
				<p>{`Welcome ${name}, number of picts you have submitted ... `}</p>
			</div>
			<div className='center white f2'>
				<p className='mt0'>{entries}</p>
			</div>
		</div>
	);
}
export default Rank;