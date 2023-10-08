const tabs = (parentSelectore, tabSelectore, contentSelectore, activeClass) => {
    const tabsParent = document.querySelector(parentSelectore),
          tab = document.querySelectorAll(tabSelectore),
          content = document.querySelectorAll(contentSelectore);


    const hideTabContent = () => {
        content.forEach(e => e.style.display = 'none');
        tab.forEach(e => e.classList.remove(activeClass))
    };

    const showTabContent = (i = 0) => {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelectore.replace(/\./, '')) || target.parentNode.classList.contains(tabSelectore.replace(/\./, '')))) {
            tab.forEach((e,i)=>{
                if (target == e || target.parentNode == e) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })
};

export default tabs;