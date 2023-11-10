function setcon(){
    const name = document.getElementById("name").value;
    const filetype = document.getElementById("filetype").value;
    const version = document.getElementById("version").value;
    const language = document.getElementById("language").value;
    const engine = document.getElementById("engine").value;
    // 저장이 필요할까봐 폴더경로 지정하는 거 설정하려 했는데 잘 안 됨.. 파일 밖에 안 됨..
    const forder = document.getElementById("folder").value;
    //여기서부턴 너가 만들 때 필요없는거임
    const explanation = document.getElementById("explanation").value;
    const color = document.getElementById("color").value;

    document.getElementById("result").innerText = name, filetype, version, language, engine, forder, explanation, color;
}

