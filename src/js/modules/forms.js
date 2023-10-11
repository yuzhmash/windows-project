import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

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
                thanks[i].style.padding = '4rem 5rem';
                thanks[i].style.fontSize = '20px';

                setTimeout(() => {
                    thanks[i].textContent = '';
                    thanks[i].innerHTML = `
                        <h2>Запишитесь сегодня на <br><span>бесплатный замер</span></h2>
                        <input class="form-control form_input" name="user_name" required type="text" placeholder="Введите ваше имя">
                        <input class="form-control form_input" name="user_phone" required type="text" placeholder="Введите телефон">
                        <button class="text-uppercase btn-block button" name="submit" type="submit">Вызвать замерщика!</button>
                        <p class="form_notice">Ваши данные конфиденциальны</p>
                    `
                }, 10000);
            }   
            const formData = new FormData(f);
            if (f.getAttribute('data-calc') === "end") {
                for (let key in state) formData.append(key, state[key])
            }

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