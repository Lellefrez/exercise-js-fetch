/*
# Esercizio 1 - Posts
Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, vengono create delle card nel documento: per ogni card mostra titolo e contenuto.
*/
window.addEventListener('load', async (event) => {
    const posts = await fetchPosts();
    createNodes(posts);
})

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Posts
    const posts = await response.json();
    return posts;
}

function createNodes(posts) {
    const cardList = document.getElementById('list');

    posts.forEach(post => {
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        p1.textContent = 'Titolo: ' + post.title;
        const p2 = document.createElement('p');
        p2.textContent = 'Descrizione: ' + post.body;
        div.appendChild(p1);
        div.appendChild(p2);
        div.classList.add('card');
        cardList.appendChild(div);
    });
}

/*



# Esercizio 2 - Barzellette
Studiati come funzionano le API di https://v2.jokeapi.dev/.
Crea una pagina HTML in cui l’utente può decidere quante barzellette visualizzare. Dopo che l’utente ha deciso e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di barzellette che contiene tante barzellette (a tema Programming) quante ne ha richieste l’utente.

# Esercizio 3 - Ricerca paesi per lingua
Studiati come funzionano le API di https://restcountries.com/.
Crea una pagina HTML in cui l’utente può inserire del testo ed effettuare una ricerca di paesi a partire dalla lingua. Dopo che l’utente ha scritto del testo e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di cards, di cui ciascuna card è un risultato della ricerca. Ogni card rappresenta un paese cercato a partire dalla stringa inserita dall’utente (una lingua parlata nel paese).
*/

