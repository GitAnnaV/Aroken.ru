(function() {

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (burgerIcon) {
            e.preventDefault()
        }

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    /* Создание модального окна */
    const modal = document.querySelector('.modal')
    /* Создание кнопки вызова модального окна */
    const modalButton = document.querySelector('.about__img-button')

    /* Кликабельная кнопка открытия */
    modalButton.addEventListener('click', openModal)
    /* Закрытие окна */
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        /* Отмена стандартного поведения */
        e.preventDefault()
        /* Навешиваем класс body--opened-modal - открывается*/
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        /* Отмена стандартного поведения */
        e.preventDefault()

        /* Элемент target на сам элемент, на который кликнули */
        const target = e.target

        /* Если элемент .modal__cancel ( или имеет такого родителя) или если кликнули на сам modal, то */
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

})()