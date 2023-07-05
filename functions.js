function typeWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => 
        setTimeout(() => (element.innerHTML += letter), 95 * i)
    );
    setInterval(() => typeWriter(element), 8000);
}

element = document.getElementById("titulo");
typeWriter(element);

