

const url="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result");
const btn= document.getElementById("search_button")



btn.addEventListener("click", () => {
    let inputword = document.getElementById("input_word").value;
    fetch(`${url}${inputword}`).then((response) => response.json()).then((data)=>{
        console.log(data);
        result.innerHTML=`
            <div class="word">
                <h2>${inputword}</h2>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic || "phonetic not found"}</p>
            </div>
            <p class="word_meaning">
               ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="example">
                Example
            </p>
            <p class="word_example">
            ${data[0].meanings[0].definitions[0].example || " " }
            </p>`
    }).catch(()=>{
        result.innerHTML= "<h3 class='error'>Word not found</h3>"
    })
})