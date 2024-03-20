
showQuotes();

function showQuotes() {
    const quotesHtml = document.getElementById('citations');
    for (let i = 0; i < quotes.length; i++) {
        const p = document.createElement('p');
        p.innerText = `${quotes[i].content} \n \n ${quotes[i].author}: ${quotes[i].title} `;
        quotesHtml.appendChild(p);
        const button = document.createElement('a');
        p.appendChild(button);
       
        button.innerHTML = '<i class="fa-solid fa-heart fa-xl"></i>';
        button.style.cssText = 'margin-left:20px; margin-bottom:10px;padding:10px';
        button.style.background = 'none';
        button.style.border = 'none';

        // Vérifier si la citation est liké et mettre à jour le style du bouton en conséquence
        if (localStorage.getItem(`liked-${quotes[i].id}`) === 'true') {
            button.style.color = 'red';
        }

        // Ajouter le click
        button.addEventListener('click', function() {
            const isLiked = localStorage.getItem(`liked-${quotes[i].id}`) === 'true';
            localStorage.setItem(`liked-${quotes[i].id}`, !isLiked);
            
            // MàJ la couleur du bouton selon l'etat.
            button.style.color = !isLiked ? 'red' : 'black';
            button.style.transition = 'color 0.5s';
        });
    }
}
