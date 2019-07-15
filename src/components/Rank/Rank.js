import React from 'react';

const Rank = ({name,entries}) => {
	return(
		<div>
			<div className='center white f3'>
				<p>{`${name}, The number of pictures you have submitted is... `}</p>
			</div>
			<div className='center white f2'>
				<p className='mt0'>{entries}</p>
			</div>
		</div>
	);
}
export default Rank;