var cubeList = document.getElementById("shuffleAndSort"),
numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9']; 

function shuffleAndSortCubes(shuffleSort){
    var index = 0;
    numbersList = shuffleSort === 'shuffle' ? numbersList.sort(() => Math.random() - 0.5) : numbersList.sort((a, b) => a - b );
    cubeList.innerHTML = '';
    while (index < numbersList.length) {
        var cubeItem = document.createElement("li");
        cubeItem.setAttribute('class', 'li-'+numbersList[index])
        cubeItem.innerHTML = numbersList[index]
        cubeList.appendChild(cubeItem)
        ++index;
    }
}
