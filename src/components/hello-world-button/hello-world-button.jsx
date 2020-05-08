import "./hello-world-button.scss";

class HelloWorldButton {
  helloWorldText = "hello-world-text";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello Worl";
    button.classList.add("hello-world-button");
    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello World is clicked";
      p.classList.add(this.helloWorldText);
      body.appendChild(p);
    };

    const body = document.querySelector("body");
    body.appendChild(button);
  }
}

export default HelloWorldButton;
