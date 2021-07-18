(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        openModalBtn1: document.querySelector('[data-modal-open-1]'),
        openModalBtn2: document.querySelector('[data-modal-open-2]'),
        openModalBtn3: document.querySelector('[data-modal-open-3]'),
        openModalBtn4: document.querySelector('[data-modal-open-4]'),
        openModalBtn5: document.querySelector('[data-modal-open-5]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        closeModalBtn2: document.querySelector('[data-modal-close-2]'),
        closeModalBtn3: document.querySelector('[data-modal-close-3]'),
        closeModalBtn4: document.querySelector('[data-modal-close-4]'),
        closeModalBtn5: document.querySelector('[data-modal-close-5]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn1.addEventListener('click', toggleModal);
    refs.openModalBtn2.addEventListener('click', toggleModal);
    refs.openModalBtn3.addEventListener('click', toggleModal);
    refs.openModalBtn4.addEventListener('click', toggleModal);
    refs.openModalBtn5.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn2.addEventListener('click', toggleModal);
    refs.closeModalBtn3.addEventListener('click', toggleModal);
    refs.closeModalBtn4.addEventListener('click', toggleModal);
    refs.closeModalBtn5.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();