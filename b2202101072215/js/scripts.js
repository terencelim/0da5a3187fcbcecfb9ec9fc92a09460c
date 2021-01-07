/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    function loadMap() {
    // LeafletJS
    // TODO
    // =====
    // - [x] Remove controls
    // - [x] Make static
    // - [ ] Re-style
    //
    // Creating map options
    var geoLoc = [-33.8687, 151.2093];
    var mapOptions = {
        // center: [-33.8604, 151.2092],
        center: geoLoc,
        zoom: 18,
        zoomControl: false
    };

    // Creating a map object
    var map = new L.map('map', mapOptions);

    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        maxZoom: 18,
        // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        //              'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        // attribution: 'Attribution',
        // tileSize: 512,
        // zoomOffset: -1
    });

    var greenIcon = L.icon({
        //  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg',
        //  shadowUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg',
        iconUrl: '../assets/img/20201219 - Aigilist Map Marker.svg',
        shadowUrl: '../assets/img/20201219 - Aigilist Map Marker.svg',

        iconSize:     [64, 64], // size of the icon
        shadowSize:   [64, 64], // size of the shadow
        iconAnchor:   [32, 64], // point of the icon which will correspond to marker's location
        shadowAnchor: [32, 64],  // the same for the shadow
        popupAnchor:  [0, -64] // point from which the popup should open relative to the iconAnchor
    });

    var marker = L.marker(geoLoc, {
        icon: greenIcon,
        bubblingMouseEvents: false
    }).addTo(map).bindPopup("<b>Aigelist Consulting Group</b>");

    L.circle(geoLoc, 50, {
        color: '#006fa9',
        fillColor: '#006fa9',
        fillOpacity: 0.25
    }).addTo(map);
    // .bindPopup("I am a circle.");

    // Adding layer to the map
    map.addLayer(layer);

    // $('#map').mousedown( function() {
    //    map.dragging.disable();
    // });

    // $('html').mouseup( function() {
    //    map.dragging.enable();
    // });

    // $('div').on("mousedown mousewheel click dblclick", L.DomEvent.stopPropagation());
    // $('#location').on('mousedown mousewheel click dblclick', function(e) {
    //     e.stopPropagation();
    //     L.DomEvent.stopPropagation();
    //     return false;
    // });
}


(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $(".navbar-brand").addClass("top-nav-logo-show");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $(".navbar-brand").removeClass("top-nav-logo-show");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
