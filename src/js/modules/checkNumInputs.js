const checkNumInputs = (selectore) => {
    const numInputs = document.querySelectorAll(selectore);

    numInputs.forEach(e => e.addEventListener('input', () => e.value = e.value.replace(/\D/, '')));
};

export default checkNumInputs;