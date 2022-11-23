let numbers = [ -15, -5, 10, 20, 30, 40, 50, 60, 70];

function ascenDscen (array, target){
    let start = 0;
    let end = array.length - 1;
    let mid;
    let asc;

    if(array[start] < array[end]){
        asc = true;
    }

    else{
        ase = false;
    }

    while (start <= end ){
        mid = Math.floor(( start + end ) / 2);
            if (array[mid] === target){
                return 'data found at index' + mid;
            }

                if(asc){
                    if(array[mid] < target){
                        start = mid + 1;
                    }

                    else{
                        end = mid - 1;
                    }
                } 
                else{
                    if(array[mid] > target){
                        start = mid - 1;
                    }

                    else{
                        end = mid + 1;
                    }
                }
            
    }
    
    return 'data not found'
}


console.log(ascenDscen(numbers, 10));
console.log(ascenDscen(['apple', 'banana', 'mango', 'orange'], 'mango'));