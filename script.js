window.onload = function() {
    includeHTML();
};

let shoppingCart = [];

window.onscroll = function() {
    let shoppingCartContainer = document.getElementById('shoppingCartContainer');
    console.log(window.scrollY);
    if (window.scrollY < 128) {
        shoppingCartContainer.style.top = (128 - window.scrollY) + 'px';
    } else {
        shoppingCartContainer.style.top = '0px';
    }
};

function checkPassword(password) {
    const pwdenc = ['15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'bcb15f821479b4d5772bd0ca866c00ad5f926e3580720659cc80d39c9d09802a', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 'c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646', '8bb0cf6eb9b17d0f7d22b456f121257dc1254e1f01665370476383ea776df414', 'daaad6e5604e8e17bd9f108d91e26afe6281dac8fda0091040a7a6d7bd9b43b5', '91b4d142823f7d20c5f08df69122de43f35f057a988d9619f6d3138485c9a203', 'c0c4a69b17a7955ac230bfc8db4a123eaa956ccf3c0022e68b8d4e2f5b699d1f', 'e69fc66a299ad7fd3303c1480f5f51f94b09a2a25a7dbd42221cfa8ed4c5baca', '6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090', '0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '9a900403ac313ba27a1bc81f0932652b8020dac92c234d98fa0b06bf0040ecfd', 'a320480f534776bddb5cdb54b1e93d210a3c7d199e80a23c1b2178497b184c76', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', '28f0116ef42bf718324946f13d787a1d41274a08335d52ee833d5b577f02a32a', 'e4ad93ca07acb8d908a3aa41e920ea4f4ef4f26e7f86cf8291c5db289780a5ae', '481f6cc0511143ccdd7e2d1b1b94faf0a700a8b49cd13922a70b5ae28acaa8c5', '94edf28c6d6da38fd35d7ad53e485307f89fbeaf120485c8d17a43f323deee71', '8a9bcf1e51e812d0af8465a8dbcc9f741064bf0af3b3d08e6b0246437c19f7fb', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'f707fdda7c874ff49ebfb2c88a2860c5ff4ce3d94a21efb76566ad0f92c9ad57', '18138372fad4b94533cd4881f03dc6c69296dd897234e0cee83f727e2e6b1f63', '72ab994fa2eb426c051ef59cad617750bfe06d7cf6311285ff79c19c32afd236', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '8c1cdb9cb4dbac6dbb6ebd118ec8f9523d22e4e4cb8cc9df5f7e1e499bba3c10'];
    return sha256(password) == pwdenc[new Date().getDate()];
}


function checkPassword2(password) {
    const pwdenc = ['5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', '65e84be33532fb784c48129675f9eff3a682b27168c0ea744b2cf58ee02337c5', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'bcb15f821479b4d5772bd0ca866c00ad5f926e3580720659cc80d39c9d09802a', '96cae35ce8a9b0244178bf28e4966c2ce1b8385723a96a6b838858cdd6ca0a1e', 'c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646', '8bb0cf6eb9b17d0f7d22b456f121257dc1254e1f01665370476383ea776df414', 'daaad6e5604e8e17bd9f108d91e26afe6281dac8fda0091040a7a6d7bd9b43b5', '91b4d142823f7d20c5f08df69122de43f35f057a988d9619f6d3138485c9a203', 'c0c4a69b17a7955ac230bfc8db4a123eaa956ccf3c0022e68b8d4e2f5b699d1f', 'e69fc66a299ad7fd3303c1480f5f51f94b09a2a25a7dbd42221cfa8ed4c5baca', '6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090', '0b14d501a594442a01c6859541bcb3e8164d183d32937b851835442f69d5c94e', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '9a900403ac313ba27a1bc81f0932652b8020dac92c234d98fa0b06bf0040ecfd', 'a320480f534776bddb5cdb54b1e93d210a3c7d199e80a23c1b2178497b184c76', 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f', '28f0116ef42bf718324946f13d787a1d41274a08335d52ee833d5b577f02a32a', 'e4ad93ca07acb8d908a3aa41e920ea4f4ef4f26e7f86cf8291c5db289780a5ae', '481f6cc0511143ccdd7e2d1b1b94faf0a700a8b49cd13922a70b5ae28acaa8c5', '94edf28c6d6da38fd35d7ad53e485307f89fbeaf120485c8d17a43f323deee71', '8a9bcf1e51e812d0af8465a8dbcc9f741064bf0af3b3d08e6b0246437c19f7fb', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'f707fdda7c874ff49ebfb2c88a2860c5ff4ce3d94a21efb76566ad0f92c9ad57', '18138372fad4b94533cd4881f03dc6c69296dd897234e0cee83f727e2e6b1f63', '72ab994fa2eb426c051ef59cad617750bfe06d7cf6311285ff79c19c32afd236', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', '8c1cdb9cb4dbac6dbb6ebd118ec8f9523d22e4e4cb8cc9df5f7e1e499bba3c10', '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225'];
    return sha256(password) == pwdenc[new Date().getDate()];
}

function loginWithPassword() {
    let password = document.getElementById('password').value;
    if (checkPassword(password)) {
        window.location.href = './login-success.html';
    }

}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'marie.curie@hacker-email.com' && checkPassword2(password)) {
        window.location.href = './login-success.html';
    }

}


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}


function encrypt(value) {
    var result = "";
    for (i = 0; i < value.length; i++) {
        if (i < value.length - 1) {
            result += value.charCodeAt(i) + 10;
            result += "-";
        } else {
            result += value.charCodeAt(i) + 10;
        }
    }
    return result;
}

function decrypt(value) {
    var result = "";
    var array = value.split("-");

    for (i = 0; i < array.length; i++) {
        result += String.fromCharCode(array[i] - 10);
    }
    return result;
}

//Google Tag Manager -->
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-MLQNJ4P');
//End Google Tag Manager -->