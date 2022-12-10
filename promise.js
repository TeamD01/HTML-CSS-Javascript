const client_id = "nd4O68YcKTEuAs2-eH-34EpJgYJ9LLOLFW7zC2HIXnU";
const searchStr = "cookies";

fetch(
    'https;//api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}'
)
.then((response) => response.json())
.then((data) => {
const container = document.querySelector(".container");    
    for(let i = 0; i < data.results.length - 1; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", data.results[i].urls.thumb);

        container.append(img);
    }
});