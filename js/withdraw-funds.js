document.addEventListener('DOMContentLoaded', () => {
    methodOptions.forEach(option => option.style.display = 'none'); // Hides it initially 
    const methods = document.querySelectorAll('.method');
    const methodOptions = document.querySelectorAll('.method-options');

    methods.forEach(method => {
        method.addEventListener('click', () => {
            methodOptions.forEach(option => option.style.display = 'none');
            const selectedMethod = method.getAttribute('data-method');
            document.getElementById(`${selectedMethod}-options`).style.display = 'block';
        });
    });
});
