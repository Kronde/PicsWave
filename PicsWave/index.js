document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez le conteneur .containerImg où nous ajoutons nos images
    const container = document.querySelector("#mainContainer");
    let numberOfPostStart = 3;

    function generateRandomName() {
        const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Antoine", "Marielle", "Thomas", "Louis","Romain","Adrien", "Nicolas", "Hugo", "Simon"];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    function generateRandomNumber() {
        return Math.floor(Math.random() * 800000);
    }

    // Créez un tableau pour stocker les nombres de likes pour chaque publication
    let likePictureNumbers = [];

    function newPost(number) {
        let liked = false;

        const newContainer = document.createElement("div");
        newContainer.classList.add("container");

        const containerFlex = document.createElement("div");
        containerFlex.classList.add("containerPicName");

        const profilPic = document.createElement("img");
        profilPic.classList.add("profilPic");
        const randomProfilPicId = Math.floor(Math.random() * 1000);
        profilPic.src = `https://picsum.photos/800/600/?random=${randomProfilPicId}`;

        const name = document.createElement("h3");
        name.innerHTML = generateRandomName();

        containerFlex.appendChild(profilPic);
        containerFlex.appendChild(name);

        const img = document.createElement("img");
        img.classList.add("containerImg");

        const randomImageId = Math.floor(Math.random() * 1000);
        img.src = `https://picsum.photos/800/600/?random=${randomImageId}`;

        const divFlexLikes = document.createElement("div");
        divFlexLikes.classList.add("containerPicName2");

        const likePictureImg = document.createElement("img");
        likePictureImg.classList.add("likeImg");
        likePictureImg.src = "asset/hearth-empty.png";

        // Créez un compteur de likes pour cette publication spécifique
        let likePictureNumber = generateRandomNumber();
        likePictureNumbers.push(likePictureNumber);

        likePictureImg.addEventListener("click", function () {
            if (liked == false) {
                likePictureImg.src = "asset/hearth-full.png";
                liked = true;
                likePictureNumber += 1;
            } else {
                likePictureImg.src = "asset/hearth-empty.png";
                liked = false;
                likePictureNumber -= 1;
            }

            // Mettez à jour le nombre de likes spécifique à cette publication
            likePictureNumberElement.innerHTML = likePictureNumber;
        });

        img.addEventListener("dblclick", function () {
            if (liked == false) {
                likePictureImg.src = "asset/hearth-full.png";
                liked = true;
                likePictureNumber += 1;
            } else {
                likePictureImg.src = "asset/hearth-empty.png";
                liked = false;
                likePictureNumber -= 1;
            }

            // Mettez à jour le nombre de likes spécifique à cette publication
            likePictureNumberElement.innerHTML = likePictureNumber;
        });

        let likePictureNumberElement = document.createElement("h3");
        likePictureNumberElement.innerHTML = likePictureNumber;

        divFlexLikes.appendChild(likePictureImg);
        divFlexLikes.appendChild(likePictureNumberElement);
        newContainer.appendChild(containerFlex);
        newContainer.appendChild(img);
        newContainer.appendChild(divFlexLikes);
        container.appendChild(newContainer);
    }

    for (let i = 0; i < numberOfPostStart; i++) {
        newPost();
    }

    // Écoute l'événement de défilement de la fenêtre
    window.addEventListener("scroll", function () {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const pageHeight = document.body.scrollHeight;
        const triggerOffset = 100;

        if (windowHeight + scrollY >= pageHeight - triggerOffset) {
            newPost();
        }
    });
});
