class ModalAuth extends Modal {

    constructor() {
        super()
        this.run()
    }

    run() {
        document.getElementById('btnAuth').addEventListener('click', () => {
            if (!this.render) {
                this.open(this.template())
                document.getElementById('modalClose').addEventListener('click', () => this.close())
                document.getElementById('modalLayer').addEventListener('click', () => this.close())
            }
        })
    }

    template() {
        return `
            <div id="modal" class="modal">
                <div id="modalLayer" class="modal__layer">test</div>
                    <form class="modal__form" action="#">
                        <h2>Авторизация</h2>
                        <input required class="modal__field" type="email">
                        <input required type="password">
                        <button class="" type="button">Войти</button>
                        <button id="modalClose" class="" type="button">Закрыть</button>
                    </form>
            </div>
        `
    }

}
