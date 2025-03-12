describe('DOM Manipulation', function() {
    beforeAll(function() {
        // Configurar el entorno del DOM
        document.body.innerHTML = '';
    });

    it('should create and append an image', function() {
        // Ejecutar el script
        require('./script.js');

        const img = document.querySelector('img');
        expect(img).not.toBeNull();
        expect(img.src).toContain('images/paisa.jfif');
        expect(img.alt).toBe('Imagen de una bandeja paisa');
        expect(img.style.width).toBe('40%');
        expect(img.style.margin).toBe('0 auto');
        expect(img.style.display).toBe('block');
        expect(img.style.borderRadius).toBe('10px');
    });

    it('should create and append a form with an input and a button', function() {
        // Ejecutar el script
        require('./script.js');

        const form = document.querySelector('form');
        expect(form).not.toBeNull();
        expect(form.style.marginTop).toBe('20px');
        expect(form.style.textAlign).toBe('center');

        const input = form.querySelector('input');
        expect(input).not.toBeNull();
        expect(input.type).toBe('text');
        expect(input.placeholder).toBe('Escribe tu nombre');
        expect(input.style.marginRight).toBe('10px');

        const button = form.querySelector('button');
        expect(button).not.toBeNull();
        expect(button.type).toBe('submit');
        expect(button.textContent).toBe('Enviar');
    });
});