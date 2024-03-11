import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 3000,
	timerProgressBar: false,
	showCloseButton: true,
	customClass: {
		container: 'toast-custom-container',
		popup: 'toast-custom',
	},
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer);
		toast.addEventListener('mouseleave', Swal.resumeTimer);
	}
});

// export function ToastHTML(type: 'success' | 'error' | 'waving-hand', title: string, description: string) {
// 	const toastHTML = `<div class="d-flex align-items-center">
// 	<img src="assets/images/icons/info.svg" alt="${type}">
// 	<h3 class="px-3 mb-0">${title}</h3>
// 	</div>
// 	<hr class="my-3">
// 	<p class="mb-0">${description}</p>`;
// 	return toastHTML;
// }
export function ToastHTML(type: 'success' | 'error' | 'waving-hand', title: string, description: string) {
		const toastHTML = 
		`<div class="d-flex align-items-center">
		<img src="assets/images/icons/info.svg" class="type-icon" alt="${type}">
		<h4 class="px-3 mb-0">${title}</h4>
		</div>
		<hr class="my-3">
		<p class="mb-0">${description}</p>`;
		return toastHTML;
	}

export const ToastConfirm = Swal.mixin({
	showCancelButton: true,
	cancelButtonText: 'Keep it',
	confirmButtonText: 'Yes, delete it',
	showCloseButton: true,
	buttonsStyling: false,
	reverseButtons: false,
	padding: '1rem',
	heightAuto: false,
	customClass: {
		container: 'confirm-custom-container',
		confirmButton: 'btn btn-primary',
		cancelButton: 'btn btn-outline-primary',
		actions: 'd-flex flex-gap gap-3 w-100 justify-content-center',
		popup: 'justify-content-start align-items-star text-start',
		htmlContainer: 'm-0 text-center mb-2 pe-4',
		input: 'form-control m-0',
		closeButton: 'confirm-close',
		title: 'text-center mb-3 p-0 pe-4'
	},
})


