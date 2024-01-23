console.log("script running");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburge').addEventListener("click", ()=>{
document.querySelector('.sidebar').classList.toggle('sidebarGo')
})