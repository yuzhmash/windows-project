const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(e => {
        e.addEventListener('input', () => e.value = e.value.replace(/\D/, ''));
    });

    const message = {
        loading: 'Загрузка...',
        succses: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => inputs.forEach(e => e.value = '');

    form.forEach((f, i) => {
        f.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            f.appendChild(statusMessage);

            const thanks = (mess) => {
                const thanks = document.querySelectorAll('.form');
                thanks[i].textContent = mess;
                thanks[i].style.cssText = `
                    padding: 4rem 5rem',
                    fontSize: 20px
                `;
            }   
            const formData = new FormData(f);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    thanks(message.succses);
                })
                .catch(() =>{
                    thanks(message.failure);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => statusMessage.remove(), 5000);
                })
        });
    });
};

export default forms;