document.addEventListener('DOMContentLoaded', function() {
    // Crear y agregar la imagen
    const img = document.createElement('img');
    img.src = './images/paisa.jfif';
    img.alt = 'Imagen de una bandeja paisa';
    img.style.width = '40%';
    img.style.margin = '0 auto';
    img.style.display = 'block';
    img.style.borderRadius = '10px';
    document.body.appendChild(img);

    // Crear y agregar el formulario
    const form = document.createElement('form');
    form.style.marginTop = '20px';
    form.style.textAlign = 'center';

    // Crear y agregar el campo de texto
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Escribe tu nombre';
    input.style.marginRight = '10px';
    form.appendChild(input);

    // Crear y agregar el botón de envío
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Enviar';
    form.appendChild(button);

    // Agregar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert(`Nombre enviado: ${input.value}`);
        console.log(`Nombre enviado: ${input.value}`);
    });

    // Agregar el formulario al cuerpo del documento
    document.body.appendChild(form);
});