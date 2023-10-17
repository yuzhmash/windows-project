const modals = () => {
    function bindModal(triggerSelectore, modalSelectore, closeSelectore, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelectore),
              modal = document.querySelector(modalSelectore),
              close = document.querySelector(closeSelectore),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();


        trigger.forEach(e => {
            e.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();

                windows.forEach(e=> e.style.display = 'none');
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open')
            });
        })

        close.addEventListener('click', () => {
            windows.forEach(e=> e.style.display = 'none');
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(e=> e.style.display = 'none');
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = '0px';
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

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden'

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 60000);
};

export default modals;