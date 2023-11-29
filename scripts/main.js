let iceCream = "Chocolate"
if (iceCream == "Chocolate") {
    alert("我最喜欢吃剁椒鱼头了。");
}else{
    alert("但是巧克力才是我的最爱呀...")
}

document.querySelector("ol1").addEventListener("click",() => {
    alert("√");
});
document.querySelector("ol2").addEventListener("click",() => {
    alert("X");
});
document.querySelector("ol3").addEventListener("click",() => {
    alert("X");
});

let myImage = document.querySelector("img");
myImage.onclick = () => {
    let myImageSrc = myImage.getAttribute("src");
    if (myImageSrc == "images/雷哥.jpg") {
        myImage.setAttribute("src", "images/雷哥2.jpg");
        alert("别戳我，好痛啊！！！")
    } else {
        myImage.setAttribute("src", "images/雷哥.jpg");
        alert("别戳我，好爽啊！！！")
    }
};
  
const answer = document.querySelector(".answer")
const setText = document.querySelector("#set-text");
setText.addEventListener("click", () => {
    answer.textContent = "雷哥哦！！！"
})
const clearText = document.querySelector("#clear-text")
clearText.addEventListener("click", () => {
    answer.textContent = ""
})


const newname = document.querySelector(".newname")

const addChild = document.querySelector("#add-child")
addChild.addEventListener("click",()=>{
    if (newname.childNodes.length > 2){
    return        
    }
    const Add = document.createElement("div");
    Add.classList.add("child");
    Add.textContent = "雷帝！！！";
    newname.appendChild(Add);
});

const removeChild = document.querySelector("#remove-child");
removeChild.addEventListener("click",()=>{
    const Remove = document.querySelector (".child");
    newname.removeChild(Remove);
});

let switchuser = document.querySelector("#switch-user");
let myheading = document.querySelector("h1");

switchuser.onclick = function(){
    setHeadingName();
}

function setHeadingName() {
    let myName = prompt("请输入你的名字哦");
    if(!myName){
        setHeadingName
    } else {
    localStorage.setItem("name", myName)
    myheading.textContent = "酷毙了! " + myName
    }
}

if(!localStorage.getItem("name")){
    setHeadingName();
} else{
    let storedName = localStorage.getItem("name");
    myheading.textContent = "酷毙了！" + storedName
}  