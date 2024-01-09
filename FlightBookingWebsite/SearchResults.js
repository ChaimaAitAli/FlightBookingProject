document.addEventListener('DOMContentLoaded', function () {
    var blue_box = document.querySelector(".blue_box");
    var ticket1 = document.getElementById("ticket1");
    var ticket2 = document.getElementById("ticket2");
    var ticket3 = document.getElementById("ticket3");
    var ticket4 = document.getElementById("ticket4");
    var arrow = document.querySelector(".arrow");
    var Reservation = document.querySelector(".Reservation");
    var reserveButton = document.querySelector(".reserveButton");
    var flightButtons = document.querySelectorAll('.Flight_Info');
    var checkIcon = document.querySelector('.check-icon');

    flightButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var clickedFlight = button.parentElement;
            adjustLeftAndTop(clickedFlight);
            animateAirplaneEntrance();
            revealSeatsWithZoom();
            addSeatClickListeners();
            hideOtherFlights(clickedFlight.id);
            scrollToTop();  // Scroll to the top of the page
        });
    });

    reserveButton.addEventListener('click', function () {
        hideSeatsAndAirplane();
        showCheckIcon();
    });

    function adjustLeftAndTop(flightElement) {
        var flightElements = document.querySelectorAll('.Flight');
        flightElements.forEach(function (element) {
            if (element === flightElement) {
                element.style.left = '5%';
                element.style.top = '20%';  // Set top to 20% for the clicked flight
                element.classList.add('slide-to-top');  // Add the sliding animation class
            } else {
                element.style.display = 'none';
            }
        });
    }

    function hideOtherFlights(clickedFlightId) {
        blue_box.classList.remove("hidden");
        blue_box.classList.remove("zoomIn");
        arrow.classList.remove("hidden");
        var flightElements = document.querySelectorAll('.Flight');
        flightElements.forEach(function (element) {
            if (element.id !== clickedFlightId) {
                element.style.display = 'none';
            }
        });
    }

    function animateAirplaneEntrance() {
        var airplaneImage = document.querySelector('.airplane');
        if (airplaneImage) {
            airplaneImage.classList.remove('hidden');
            airplaneImage.classList.add('enter-from-bottom');
        }
    }

    function revealSeatsWithZoom() {
        var seatElements = document.querySelectorAll('.seat');
        seatElements.forEach(function (seatElement) {
            seatElement.classList.remove('hidden');
            seatElement.classList.add('zoomIn');
        });
    }

    function addSeatClickListeners() {
        var seatElements = document.querySelectorAll('.seat.empty');
        var selectedSeat = null;

        seatElements.forEach(function (seatElement) {
            seatElement.addEventListener('click', function () {
                if (selectedSeat) {
                    // If a seat is already selected, deactivate it
                    selectedSeat.classList.remove('selected');
                    selectedSeat.style.backgroundColor = 'white';
                    selectedSeat.style.color = 'gray';
                }

                // Activate the clicked seat
                seatElement.classList.add('selected');
                seatElement.style.backgroundColor = 'black';
                seatElement.style.color = 'white';
                selectedSeat = seatElement;
                reserveButton.classList.remove("hidden");
            });
        });
    }

    function hideSeatsAndAirplane() {
        var seatElements = document.querySelectorAll('.seat');
        seatElements.forEach(function (seatElement) {
            seatElement.style.opacity = '0';
            seatElement.style.transition = 'opacity 1s ease-out';
        });
    
        var airplaneImage = document.querySelector('.airplane');
        if (airplaneImage) {
            airplaneImage.style.opacity = '0';
            airplaneImage.style.transition = 'opacity 1s ease-out';
        }
    
        reserveButton.classList.add('hidden');
        blue_box.style.backgroundColor = "white";
        arrow.classList.add("hidden");
        Reservation.classList.remove("hidden");
        Reservation.classList.add("zoomIn1");
    
        ticket1.classList.remove("hidden");
        ticket1.classList.add("zoomIn1");
    
        setTimeout(function () {
            ticket2.classList.remove("hidden");
            ticket2.classList.add("Rotate2");
        }, 500);
    
        setTimeout(function () {
            ticket3.classList.remove("hidden");
            ticket3.classList.add("Rotate3");
        }, 1000);
    
        setTimeout(function () {
            ticket4.classList.remove("hidden");
            ticket4.classList.add("Rotate4");
        }, 1500);
    
        setTimeout(function () {
            seatElements.forEach(function (seatElement) {
                seatElement.style.display = 'none';
            });
        }, 1000);
    
        if (airplaneImage) {
            airplaneImage.classList.remove('enter-from-bottom');
            airplaneImage.classList.add('exit-to-top');
        }
    }    
    
    

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function showCheckIcon() {
        checkIcon.classList.remove('hidden');
        setTimeout(function () {
            checkIcon.style.display = 'block';
        }, 10);
    }
    
});
