class Modal {

    render = false

    open(template) {
        document.body.insertAdjacentHTML('afterbegin', template)
        this.render = true
    }

    close() {
        document.getElementById('modal').remove()
        this.render = false
    }

}
