import Swal from "sweetalert2";

export const ModalConfirm = (email) => {
  Swal.fire('Registro Exitoso!', 'Ahora podrás ser parte de una generación DISTINTA.\n'+'Te enviamos un correo con la confirmación a '+email, 'success');
}
