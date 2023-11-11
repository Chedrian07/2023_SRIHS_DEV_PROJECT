function setCon(){ //오타 신경쓸 것. 또한 label for={input tag id값으로 설정} 주의!
    alert("test")
    const name = document.getElementById("name").value;
    const filetype = document.getElementById("filetype").value;
    const version = document.getElementById("version").value;
    const language = document.getElementById("language").value;
    const engine = document.getElementById("engine").value;
    // 저장이 필요할까봐 폴더경로 지정하는 거 설정하려 했는데 잘 안 됨.. 파일 밖에 안 됨..
    const forder = document.getElementById("forder").value; //forder를 원하는 거지만 id설정이 location으로 되어있음.
    //여기서부턴 너가 만들 때 필요없는거임
    const explanation = document.getElementById("explanation").value;
    const color = document.getElementById("color").value;
    console.log(name,filetype,version,language,engine,forder,explanation)
    document.getElementById("result").innerText = name, filetype, version, language, engine, forder, explanation, color;
}