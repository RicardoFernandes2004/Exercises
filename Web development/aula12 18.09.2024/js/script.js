const lista = document.getElementById('lista')

onload(fetch('https://jsonplaceholder.typicode.com/posts').then((resp) => resp.json()).then((data) => {
    data.forEach(post => {
        let titulo = post.title;
        let corpo = post.body;
        const li = document.createElement('li');
        li.innerHTML = "<h4>"+ titulo + "</h4>" + "<p>" + corpo + "</p>";
        lista.append(li);
    });
})
)

