import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const SWAL = withReactContent(Swal);

export default (deleted, setDeleted, deleteFunc, id, returnId) => {
	SWAL.fire({
		title: 'Are you sure you want to delete?',
		text: 'You will not be able to restore the data!',
		icon: 'error',
		confirmButtonText: 'Ok',
		reverseButtons: true,
		cancelButtonText: 'Cancel',
		showCancelButton: true,
		confirmButtonColor: 'red',
		didOpen: () => {},
		didClose: () => {},
	}).then((result) => {
		if (result.isConfirmed) {
			deleteFunc(id, deleted, setDeleted, returnId);
		} else {
			setDeleted(!deleted);
		}
	});
};
