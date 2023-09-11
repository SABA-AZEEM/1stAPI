
const btnEl=document.querySelector('button');

btnEl.addEventListener('click',async()=>{
    const inputEl=document.querySelector('input[type="text"]').value;
    try{
        let response=await fetch(`/api/${inputEl}`);
        const data=await response.json();
        console.log(data)
        document.querySelector('.class').textContent=data.class;
        document.querySelector('.name').textContent=data.name;
        document.querySelector('.age').textContent=data.age;
    }catch(error){
        console.log("The error is:"+error);
    }
    
})