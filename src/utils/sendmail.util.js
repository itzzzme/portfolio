import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const sendmail = (formRef, serviceId, templateId, publicKey) => {
    const toastId = toast.info("Sending message...", { autoClose: false });
    emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
            () => {
                console.log('SUCCESS!');
                toast.update(toastId, { render: "Message sent!", type: "success", autoClose: 2000 });
            },
            (error) => {
                console.error('FAILED...', error);
                toast.update(toastId, { render: error.text, type: "error", autoClose: 2000 });
            }
        );
};

export default sendmail;