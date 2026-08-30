/* =====================================================
   GREAT SHAPE
   JAVASCRIPT
   ===================================================== */


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");

const navigation = document.getElementById("navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("show");

    });


    const links = navigation.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("show");

        });

    });

}


/* ================= RESERVATION WHATSAPP ================= */

const reservationForm =
    document.getElementById("reservationForm");


if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();


            const phone =
                document.getElementById("phone").value.trim();


            const address =
                document.getElementById("address").value.trim();


            const service =
                document.getElementById("service").value;


            const date =
                document.getElementById("date").value;


            const time =
                document.getElementById("time").value;


            const message =
                document.getElementById("message").value.trim();


            const whatsappNumber =
                "237680128822";


            const whatsappMessage =

                "Bonjour GREAT SHAPE 👋" +

                "\n\n" +

                "Je souhaite réserver une coiffure à domicile." +

                "\n\n" +

                "👤 Nom : " +
                name +

                "\n📱 Téléphone : " +
                phone +

                "\n📍 Adresse : " +
                address +

                "\n✂️ Prestation : " +
                service +

                "\n📅 Date : " +
                date +

                "\n🕐 Heure : " +
                time +

                "\n💬 Message : " +
                (message || "Aucun message supplémentaire.");


            const whatsappURL =

                "https://wa.me/" +

                whatsappNumber +

                "?text=" +

                encodeURIComponent(
                    whatsappMessage
                );


            window.open(
                whatsappURL,
                "_blank"
            );

        });

}