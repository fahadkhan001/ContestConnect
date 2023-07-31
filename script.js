let imagesurl = [

    `https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.webp`,`https://img.freepik.com/free-vector/digital-coding-background-with-numbers-zero-one_1017-30363.jpg`,`https://repository-images.githubusercontent.com/72586805/05dd0b80-6b7c-11e9-9cf5-15d6d7efb700`,`https://diginovation.multimatics.co.id/images/banner-1-min.jpg`,`https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage01-398f220e.jpeg`,`https://technerds.com/wp-content/uploads/2021/06/Twilio-Api-Marketplace.png`,`https://blog.testproject.io/wp-content/uploads/2020/07/Using-Java-Enums-in-Test-Automation-Code.jpg`,`https://multimatics.co.id/images/back-services.jpg`,`https://venturebeat.com/wp-content/uploads/2022/05/GettyImages-1049267674-Andrey-Suslov-e1676502561607.jpg?fit=400%2C199&strip=all`,`https://media.wired.com/photos/5cc244cc2c90a35c66b7d930/master/w_2560%2Cc_limit/Coding-Becomes-Criminal.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVO5u_FI3kznvgFyi4AnyT5VxILlXP0eEY9A&usqp=CAU`,`https://img.freepik.com/free-vector/coding-round-composition_1284-40752.jpg?w=2000`,`https://img.freepik.com/free-vector/young-programmer-working-laptop-computer-cartoon-character_24797-2123.jpg`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WMWml9rvzWwQVE2Ve9YmJm8VYOkderrX5Vgnlm0WqMuavpMqv_3sFWVoq7NNm9xNB0g&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRucFFCz2vrGKp2UdAQCmTNQ8-RtW-fnJIxa2fWccXGQZS0seA2VLB-MEd6gnRQ54fo4hY&usqp=CAU`,`https://img.etimg.com/thumb/width-1200,height-900,imgsize-23350,resizemode-75,msid-91734050/small-biz/entrepreneurship/curiousjr-how-to-learn-coding-without-computers.jpg`,
    `https://images.cointelegraph.com/images/240_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDEvMTU4MDI5YWYtYTg2YS00MDJmLWE1YjUtZTkxNWNjNjlmMTM4LkpQRw==.jpg`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRll8c4v1KPzy4sdExnEeSLHEq_aMu3wEZq7A&usqp=CAU`,`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR91WUCT9mmgRCd--xsi-41TzN3Cp8iNSSgMNLGWweslB8pxh2Ly7DUxQDY9b_TQ_oSt2o&usqp=CAU`,`https://spectrum.ieee.org/media-library/deep-tabnine-is-a-software-autocompleter-that-uses-a-deep-learning-model-to-support-coding-in-22-programming-languages-includin.jpg?id=25589514&width=400&height=240`,`https://codequotient.com/blog/wp-content/uploads/2022/05/10-Python-Coding-Questions-To-Practice-and-Enhance-Logical-Thinking.jpg`,`https://img.freepik.com/premium-vector/young-woman-working-computer-programmer-developer-create-code-programming-language_530733-2998.jpg`

];
const imgrandom =()=>{
    return imagesurl[Math.floor(Math.random()*imagesurl.length)]
}
console.log(imgrandom)



let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests)=>{
    console.log(contests)
    ihtml =""
    let bgimg = imgrandom()
    let c =0;
    for(item in contests){
        if(c==1){
            c=0
            bgimg=imgrandom();
        }
        c++
        console.log(contests[item])
        ihtml += `
        <div class="card" style="width: 18rem;">
        <img src="${bgimg}" class="card-img-top" alt="...">
        <div class="card-body" style="padding:16px">
            <h5 class="card-title">${contests[item].name}</h5>
            <p class="card-text">Status is: ${contests[item].status} and the site is:${contests[item].name} </p>
            <p class="card-text">In 24 Hours: ${contests[item].in_24_hours}</p>
            <p>Starts at: ${contests[item].start_time}</p>
            <p>Ends at: ${contests[item].end_time}</p>
            <a href="${contests[item].url}" class="btn btn-primary">Visirt contest</a>
         
        </div>
        
    </div>
        `
    
    }
    cardcontainer.innerHTML = ihtml
})

