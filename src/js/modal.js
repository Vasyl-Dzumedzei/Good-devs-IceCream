(() => {
    const refs = {

        // якорей которых у Вас нет в файле HTML и к ним функции коменнтируйте,
        //а то скрипт не будет работать

        //кнопки открытия
        openModalBtn: document.querySelector('[data-modal-open]'),
        openModalBtn1: document.querySelector('[data-modal-open-1]'),
        openModalBtn2: document.querySelector('[data-modal-open-2]'),
        openModalBtn3: document.querySelector('[data-modal-open-3]'),
        openModalBtn4: document.querySelector('[data-modal-open-4]'),
        openModalBtn5: document.querySelector('[data-modal-open-5]'),
        //кнопки закрытия
        closeModalBtn: document.querySelector('[data-modal-close]'),
        closeModalBtn2: document.querySelector('[data-modal-close-2]'),
        closeModalBtn3: document.querySelector('[data-modal-close-3]'),
        closeModalBtn4: document.querySelector('[data-modal-close-4]'),
        closeModalBtn5: document.querySelector('[data-modal-close-5]'),

        //якоря для куда будет помещен класс is-hidden
        modal: document.querySelector('[data-modal]'),
        modal2: document.querySelector('[data-modal-2]'),
        modal3: document.querySelector('[data-modal-3]'),
        modal4: document.querySelector('[data-modal-4]'),
        modal5: document.querySelector('[data-modal-5]'),
    };

    //нажатия на кнопку открытия
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal2);
    refs.openModalBtn3.addEventListener('click', toggleModal3);
    refs.openModalBtn4.addEventListener('click', toggleModal4);
    refs.openModalBtn5.addEventListener('click', toggleModal5);
    //нажатия на кнопку закрытия
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn2.addEventListener('click', toggleModal2);
    refs.closeModalBtn3.addEventListener('click', toggleModal3);
    refs.closeModalBtn4.addEventListener('click', toggleModal4);
    refs.closeModalBtn5.addEventListener('click', toggleModal5);

    //добавления(удаления) класса is-hidden
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    function toggleModal2() {
        refs.modal2.classList.toggle('is-hidden');
    }
    function toggleModal3() {
        refs.modal3.classList.toggle('is-hidden');
    }
    function toggleModal4() {
        refs.modal4.classList.toggle('is-hidden');
    }
    function toggleModal5() {
        refs.modal5.classList.toggle('is-hidden');
    }

})();