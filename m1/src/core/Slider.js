class Slider {

    constructor() {
        this.init()
    }

    init() {
        let offset = 0

        const slider = document.getElementById('slider')
        const track = document.getElementById('sliderTrack')
        const prev = document.getElementById('sliderPrev')
        const next = document.getElementById('sliderNext')
        const sliderWidth = parseInt(window.getComputedStyle(slider).width)
        const trackWidth = track.scrollWidth

        const prevSlide = () => {
            if (Math.abs(offset) > trackWidth) {
                offset = 0
                track.style.left = `${offset}px`
                return
            }
            offset -= sliderWidth
            track.style.left = `${offset}px`
        }

        const nextSlide = () => {
            if (offset === 0) return
            offset += sliderWidth
            track.style.left = `${offset}px`
        }

        prev.addEventListener('click', () => prevSlide())
        next.addEventListener('click', () => nextSlide())
        setInterval(() => {
            nextSlide()
        }, 4000)
    }
}
