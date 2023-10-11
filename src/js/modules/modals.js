const modals = () => {
    function bindModal(triggerSelectore, modalSelectore, closeSelectore, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelectore),
              modal = document.querySelector(modalSelectore),
              close = document.querySelector(closeSelectore),
              windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(e => {
            e.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();

                windows.forEach(e=> e.style.display = 'none');
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open')
            });
        })

        close.addEventListener('click', () => {
            windows.forEach(e=> e.style.display = 'none');
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(e=> e.style.display = 'none');
                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');
            }
        });
    }

    function showModalByTime(selectore, time) {
        setTimeout(() => {
            document.querySelector(selectore).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;