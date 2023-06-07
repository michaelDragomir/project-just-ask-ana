import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const UserModal = () => {
	const [open, setOpen] = useState(true);

	const handleClose = () => setOpen(false);

	return (
		<div>
			<Modal open={open} onClose={handleClose}>
				<Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 bg-slate-200 border-2 border-sky-500 shadow-lg'>
					<div className='text-center p-2'>
						<Typography className='text-center'>
							Click on a header item in table to sort data.
						</Typography>
						<button
							type='button'
							className='text-sky-600 hover:text-sky-400 pt-4'
							onClick={handleClose}
						>
							close modal
						</button>
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default UserModal;
