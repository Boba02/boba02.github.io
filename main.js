function getIndex(index){
    localStorage.setItem("index", index)

    var globalVar={
        mealIndex: localStorage.getItem("index")
    };
};

