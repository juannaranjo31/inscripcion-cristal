import emailjs from 'emailjs-com';

export const SendEmail = async(nombre, curso, email) => {
    const params = {nombre, curso, email};
    const serviceID = 'egresados-email';
    const templateID = 'template_kg7ffwf';
    const publicKey = 'uERWIlltEp9N9jNrC';

    await emailjs.send(serviceID, templateID, params, publicKey);

    return 'Done!';
}
