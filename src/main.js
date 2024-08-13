import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'tailwindcss/tailwind.css';
import './style.css';
import router from './router';

const app = createApp(App);

app.use(router);

app.mixin({
    mounted() {
        const select = (el, all = false) => {
            el = el.trim();
            if (all) {
                return [...document.querySelectorAll(el)];
            } else {
                return document.querySelector(el);
            }
        };

        const on = (type, el, listener, all = false) => {
            if (all) {
                select(el, all).forEach(e => e.addEventListener(type, listener));
            } else {
                select(el).addEventListener(type, listener);
            }
        };

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener);
        };

        // Sidebar toggle
        const toggleSidebarBtn = select('.toggle-sidebar-btn');
        if (toggleSidebarBtn) {
            on('click', '.toggle-sidebar-btn', function () {
                select('body').classList.toggle('toggle-sidebar');
            });
        }

        // Search bar toggle
        const searchBarToggle = select('.search-bar-toggle');
        if (searchBarToggle) {
            on('click', '.search-bar-toggle', function () {
                select('.search-bar').classList.toggle('search-bar-show');
            });
        }

        // Navbar links active state on scroll
        const navbarlinks = select('#navbar .scrollto', true);
        const navbarlinksActive = () => {
            let position = window.scrollY + 200;
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return;
                let section = select(navbarlink.hash);
                if (!section) return;
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active');
                } else {
                    navbarlink.classList.remove('active');
                }
            });
        };
        window.addEventListener('load', navbarlinksActive);
        onscroll(document, navbarlinksActive);

        // Toggle .header-scrolled class to #header when page is scrolled
        const selectHeader = select('#header');
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled');
                } else {
                    selectHeader.classList.remove('header-scrolled');
                }
            };
            window.addEventListener('load', headerScrolled);
            onscroll(document, headerScrolled);
        }

        // Back to top button
        const backtotop = select('.back-to-top');
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                } else {
                    backtotop.classList.remove('active');
                }
            };
            window.addEventListener('load', toggleBacktotop);
            onscroll(document, toggleBacktotop);
        }

        // Form validation
        const needsValidation = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(needsValidation)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
    }
});

app.mount('#app');
