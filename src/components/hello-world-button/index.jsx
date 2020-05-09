import './hello-world-button.scss';

class HelloWorldButton {
    helloWorldText = 'hello-world-text';

    render() {
        const button = document.createElement('button');
        const body = document.querySelector('body');

        button.innerHTML = 'Hello Worl';

        button.classList.add('hello-world-button');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World is clicked';
            p.classList.add(this.helloWorldText);
            body.appendChild(p);
        };

        body.appendChild(button);
    }
}

export default HelloWorldButton;
