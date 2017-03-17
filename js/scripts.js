//jQuery
$(function() {

    $('#fullpage').fullpage();




    //particleJS shit
    // particlesJS.load('particles-js', 'js/particles.json', function() {
    //     console.log('callback - particles.js config loaded');
    // });
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 1200
                }
            },
            "color": {
                "value": ["#aa73ff", "#f8c210", "#000000", "#ffffff"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 0.5,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#919191",
                "opacity": 0.4,
                "width": 1
            },
        },
        "interactivity": {
            "detect_on": "canvas",
            // "events": {
            //     "onhover": {
            //         "enable": true,
            //         "mode": "grab"
            //     },
            //     "onclick": {
            //         "enable": false
            //     },
            //     "resize": true
            // },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    //delay load four items
    $("#vic").delay(500).show('bounce', 1000);
    $(".type-wrap").delay(1600).show('fade');
    $("#header").delay(6700).show('fade', 1500);
    $("#yes").delay(5500).show('fade', 1500);

    $("#dropDown").delay(6700).show('fade', 1500);
    $("#typed").typed({
        stringsElement: $('#typed-strings'),
        typeSpeed: 50,
        backDelay: 500,
        startDelay: 2300,
        contentType: 'html'
    }); //typed.js
}); //jQuery
