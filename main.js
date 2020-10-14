gj.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "js2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script"); //创建style标签
        script.innerHTML = request.response; //填写style内容
        document.body.appendChild(script); //插入到head
      }
    }
  };
  request.send();
};

gh.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "html3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div"); //创建div标签
        div.innerHTML = request.response; //填写div内容
        document.body.appendChild(div); //插入到body
      } else {
        console.log("去死吧");
        alert("傻B你写错了");
      }
    }
  };
  request.send();
};

gs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style"); //创建JS
        style.innerHTML = request.response; //填写js内容
        document.head.appendChild(style); //插入到body
      } else {
        alert("傻B你写错了");
      }
    }
  };
  request.send();
};

gx.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "XML4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      const dom = request.responseXML;
      const test = dom.getElementsByTagName("warning")[0].textContent;
      console.log(test.trim());
    }
  };
  request.send();
};

gn.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "json4.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const object = JSON.parse(request.response);
      console.log(object);
      myName.textContent = object.name;
    }
  };
  request.send();
};
