const modals = () => {
    function bindModal(triggerSelectore, modalSelectore, closeSelectore) {
        const trigger = document.querySelectorAll(triggerSelectore),
              modal = document.querySelector(modalSelectore),
              close = document.querySelector(closeSelectore);


        trigger.forEach(e => {
            e.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open')
            });
        })

        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
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
    // showModalByTime('.popup', 60000);
};

export default modals;