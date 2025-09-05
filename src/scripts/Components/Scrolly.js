export default class Scrolly {
    constructor(container) {
        this.container = container;
        this.options = {
            rootMargin: '0px',
            threshold: 0.1
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver(this.watch.bind(this), this.options);
        const items = this.container.querySelectorAll('[data-scrolly]');

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            observer.observe(item);

            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                item.classList.add('is-active');
            }
        }

        window.addEventListener('resize', () => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    item.classList.add('is-active');
                }
            }
        });
    }

    watch(entries, observer) {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const target = entry.target;

            if (entry.isIntersecting) {
                target.classList.add('is-active');
                if (target.hasAttribute('data-no-repeat')) {
                    observer.unobserve(target);
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.your-container');
    if (container) new Scrolly(container);
});
