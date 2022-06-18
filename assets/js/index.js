function generateCopyCodeButton() {
  const codeSnippet = document.querySelectorAll("pre.highlight");
  codeSnippet.forEach(function (pre) {
    //  Create button element
    let button = document.createElement("button");
    let copyText = "Copy";
    button.className = "copy";
    button.type = "button";
    button.ariaLabel = "Copy code to clipboard";
    button.innerText = copyText;
    // Add button event
    button.addEventListener("click", function () {
      let code = pre.querySelector("code").innerText.trim();
      navigator.clipboard.writeText(code);
      button.innerText = "Copied";
      setTimeout(function () {
        button.innerText = copyText;
      }, 4000);
    });
    // Add button to snippet
    pre.appendChild(button);
  });
}

function resizeIframe(object) {
  object.style.height = object.contentWindow.document.body.scrollHeight + 50 + "px";
  console.log(object.style.height);
}

function generateCodeOutput() {
  const codeSnippet = document.querySelectorAll("div.highlight");
  codeSnippet.forEach(function (codeSnippet) {
    let pre = codeSnippet.querySelector("pre.highlight");
    let languageDiv = codeSnippet.parentElement;
    if (languageDiv.classList.contains("language-html")) {
      let iframe = document.createElement("iframe");
      let code = pre.querySelector("code").innerText.trim();
      iframe.srcdoc = code;
      iframe.className = "code-output";
      languageDiv.parentElement.insertBefore(iframe, languageDiv.nextElementSibling);
      iframe.onload = () => {
        resizeIframe(iframe);
      };
    }
  });
}

generateCopyCodeButton();
generateCodeOutput();
