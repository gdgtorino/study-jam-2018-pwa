const CACHE_NAME = 'main-cache-v1';

const urlsToCache = ['bower_components/app-layout/app-drawer-layout/app-drawer-layout.html', 'bower_components/app-layout/app-drawer/app-drawer.html', 'bower_components/app-layout/app-header-layout/app-header-layout.html', 'bower_components/app-layout/app-header/app-header.html', 'bower_components/app-layout/app-layout-behavior/app-layout-behavior.html', 'bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html', 'bower_components/app-layout/app-scroll-effects/app-scroll-effects.html', 'bower_components/app-layout/app-scroll-effects/effects/blend-background.html', 'bower_components/app-layout/app-scroll-effects/effects/fade-background.html', 'bower_components/app-layout/app-scroll-effects/effects/material.html', 'bower_components/app-layout/app-scroll-effects/effects/parallax-background.html', 'bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html', 'bower_components/app-layout/app-scroll-effects/effects/resize-title.html', 'bower_components/app-layout/app-scroll-effects/effects/waterfall.html', 'bower_components/app-layout/app-toolbar/app-toolbar.html', 'bower_components/app-layout/helpers/helpers.html', 'bower_components/app-route/app-location.html', 'bower_components/app-route/app-route-converter-behavior.html', 'bower_components/app-route/app-route.html', 'bower_components/grain-masonry/grain-masonry-import.html', 'bower_components/grain-masonry/grain-masonry.html', 'bower_components/grain-responsive-behavior/grain-responsive-behavior.html', 'bower_components/grain-update-inline-style-behavior/grain-update-inline-style-behavior.html', 'bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html', 'bower_components/iron-ajax/iron-ajax.html', 'bower_components/iron-ajax/iron-request.html', 'bower_components/iron-behaviors/iron-button-state.html', 'bower_components/iron-behaviors/iron-control-state.html', 'bower_components/iron-flex-layout/iron-flex-layout-classes.html', 'bower_components/iron-flex-layout/iron-flex-layout.html', 'bower_components/iron-icon/iron-icon.html', 'bower_components/iron-icons/communication-icons.html', 'bower_components/iron-icons/device-icons.html', 'bower_components/iron-icons/iron-icons.html', 'bower_components/iron-iconset-svg/iron-iconset-svg.html', 'bower_components/iron-image/iron-image.html', 'bower_components/iron-location/iron-location.html', 'bower_components/iron-location/iron-query-params.html', 'bower_components/iron-media-query/iron-media-query.html', 'bower_components/iron-menu-behavior/iron-menu-behavior.html', 'bower_components/iron-menu-behavior/iron-menubar-behavior.html', 'bower_components/iron-meta/iron-meta.html', 'bower_components/iron-pages/iron-pages.html', 'bower_components/iron-resizable-behavior/iron-resizable-behavior.html', 'bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html', 'bower_components/iron-selector/iron-multi-selectable.html', 'bower_components/iron-selector/iron-selectable.html', 'bower_components/iron-selector/iron-selection.html', 'bower_components/iron-selector/iron-selector.html', 'bower_components/masonry/dist/masonry.pkgd.min.js', 'bower_components/paper-behaviors/paper-inky-focus-behavior.html', 'bower_components/paper-behaviors/paper-ripple-behavior.html', 'bower_components/paper-card/paper-card.html', 'bower_components/paper-icon-button/paper-icon-button.html', 'bower_components/paper-ripple/paper-ripple.html', 'bower_components/paper-spinner/paper-spinner-behavior.html', 'bower_components/paper-spinner/paper-spinner-lite.html', 'bower_components/paper-spinner/paper-spinner-styles.html', 'bower_components/paper-styles/color.html', 'bower_components/paper-styles/default-theme.html', 'bower_components/paper-styles/element-styles/paper-material-styles.html', 'bower_components/paper-styles/shadow.html', 'bower_components/paper-tabs/paper-tab.html', 'bower_components/paper-tabs/paper-tabs-icons.html', 'bower_components/paper-tabs/paper-tabs.html', 'bower_components/polymer/lib/elements/array-selector.html', 'bower_components/polymer/lib/elements/custom-style.html', 'bower_components/polymer/lib/elements/dom-bind.html', 'bower_components/polymer/lib/elements/dom-if.html', 'bower_components/polymer/lib/elements/dom-module.html', 'bower_components/polymer/lib/elements/dom-repeat.html', 'bower_components/polymer/lib/legacy/class.html', 'bower_components/polymer/lib/legacy/legacy-element-mixin.html', 'bower_components/polymer/lib/legacy/mutable-data-behavior.html', 'bower_components/polymer/lib/legacy/polymer-fn.html', 'bower_components/polymer/lib/legacy/polymer.dom.html', 'bower_components/polymer/lib/legacy/templatizer-behavior.html', 'bower_components/polymer/lib/mixins/dir-mixin.html', 'bower_components/polymer/lib/mixins/element-mixin.html', 'bower_components/polymer/lib/mixins/gesture-event-listeners.html', 'bower_components/polymer/lib/mixins/mutable-data.html', 'bower_components/polymer/lib/mixins/property-accessors.html', 'bower_components/polymer/lib/mixins/property-effects.html', 'bower_components/polymer/lib/mixins/template-stamp.html', 'bower_components/polymer/lib/utils/array-splice.html', 'bower_components/polymer/lib/utils/async.html', 'bower_components/polymer/lib/utils/boot.html', 'bower_components/polymer/lib/utils/case-map.html', 'bower_components/polymer/lib/utils/debounce.html', 'bower_components/polymer/lib/utils/flattened-nodes-observer.html', 'bower_components/polymer/lib/utils/flush.html', 'bower_components/polymer/lib/utils/gestures.html', 'bower_components/polymer/lib/utils/import-href.html', 'bower_components/polymer/lib/utils/mixin.html', 'bower_components/polymer/lib/utils/path.html', 'bower_components/polymer/lib/utils/render-status.html', 'bower_components/polymer/lib/utils/resolve-url.html', 'bower_components/polymer/lib/utils/settings.html', 'bower_components/polymer/lib/utils/style-gather.html', 'bower_components/polymer/lib/utils/templatize.html', 'bower_components/polymer/lib/utils/unresolved.html', 'bower_components/polymer/polymer-element.html', 'bower_components/polymer/polymer.html', 'bower_components/shadycss/apply-shim.html', 'bower_components/shadycss/apply-shim.min.js', 'bower_components/shadycss/custom-style-interface.html', 'bower_components/shadycss/custom-style-interface.min.js', 'bower_components/webcomponentsjs/webcomponents-loader.js', 'images/favicon.ico', 'images/favicon.png', 'images/logo-horiz.png', 'images/logo.png', 'index.html', 'manifest.json', 'src/blog-view.html', 'src/contacts-view.html', 'src/events-view.html', 'src/gdg-torino-pwa.html', 'src/home-view.html', 'src/my-icons.html', 'src/not-found-view.html', 'src/shared-styles.html', 'src/team-view.html'];

self.addEventListener('install', event => {

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});