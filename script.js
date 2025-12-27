function sendEmail() {
    const serviceID = 'service_ytwefn7';
    const templateID = 'template_3k7oy7i';
    const publicKey = 'XQZyR9KMvyaWExifH';

    emailjs.send(serviceID, templateID, {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }, publicKey)
    .then(res => {
        console.log(res);
    })
}