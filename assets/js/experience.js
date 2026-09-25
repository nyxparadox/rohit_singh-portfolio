/* =========================================================
   EXPERIENCE PAGE
   Experience-specific interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CERTIFICATE LIGHTBOX
       ===================================================== */

    const certificateButton =
        document.querySelector(".credential-view-btn");

    if (!certificateButton) {
        return;
    }

    certificateButton.addEventListener("click", () => {

        const imageSource =
            certificateButton.dataset.lightboxImage;

        if (!imageSource) {
            console.warn(
                "Experience: Certificate image path not found."
            );
            return;
        }

        openCertificateLightbox(imageSource);

    });


    /* =====================================================
       OPEN LIGHTBOX
       ===================================================== */

    function openCertificateLightbox(imageSource) {

        // Prevent multiple lightboxes
        if (
            document.querySelector(
                ".experience-lightbox"
            )
        ) {
            return;
        }


        /* ---------------------------------------------
           CREATE LIGHTBOX
           --------------------------------------------- */

        const lightbox =
            document.createElement("div");

        lightbox.className =
            "experience-lightbox";

        lightbox.setAttribute(
            "role",
            "dialog"
        );

        lightbox.setAttribute(
            "aria-modal",
            "true"
        );

        lightbox.setAttribute(
            "aria-label",
            "UltraTech Cement training certificate"
        );


        /* ---------------------------------------------
           LIGHTBOX HTML
           --------------------------------------------- */

        lightbox.innerHTML = `

            <div
                class="experience-lightbox-backdrop"
            ></div>


            <div
                class="experience-lightbox-content"
            >

                <button
                    class="experience-lightbox-close"
                    type="button"
                    aria-label="Close certificate"
                >
                    ×
                </button>


                <img
                    src="${imageSource}"
                    alt="UltraTech Cement industrial training certificate"
                    class="experience-lightbox-image"
                >

            </div>

        `;


        /* ---------------------------------------------
           ADD TO PAGE
           --------------------------------------------- */

        document.body.appendChild(
            lightbox
        );


        document.body.classList.add(
            "lightbox-open"
        );


        /* ---------------------------------------------
           ANIMATION
           --------------------------------------------- */

        requestAnimationFrame(() => {

            lightbox.classList.add(
                "is-visible"
            );

        });


        /* ---------------------------------------------
           ELEMENT REFERENCES
           --------------------------------------------- */

        const closeButton =
            lightbox.querySelector(
                ".experience-lightbox-close"
            );


        const backdrop =
            lightbox.querySelector(
                ".experience-lightbox-backdrop"
            );


        /* ---------------------------------------------
           CLOSE FUNCTION
           --------------------------------------------- */

        const closeCertificateLightbox = () => {

            lightbox.classList.remove(
                "is-visible"
            );


            document.body.classList.remove(
                "lightbox-open"
            );


            document.removeEventListener(
                "keydown",
                handleEscape
            );


            setTimeout(() => {

                if (lightbox) {
                    lightbox.remove();
                }

            }, 300);

        };


        /* ---------------------------------------------
           CLOSE BUTTON
           --------------------------------------------- */

        closeButton.addEventListener(
            "click",
            closeCertificateLightbox
        );


        /* ---------------------------------------------
           BACKDROP CLICK
           --------------------------------------------- */

        backdrop.addEventListener(
            "click",
            closeCertificateLightbox
        );


        /* ---------------------------------------------
           ESCAPE KEY
           --------------------------------------------- */

        function handleEscape(event) {

            if (event.key === "Escape") {

                closeCertificateLightbox();

            }

        }


        document.addEventListener(
            "keydown",
            handleEscape
        );


        /* ---------------------------------------------
           PREVENT IMAGE CLICK FROM CLOSING
           --------------------------------------------- */

        const certificateImage =
            lightbox.querySelector(
                ".experience-lightbox-image"
            );


        certificateImage.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

            }
        );

    }

});