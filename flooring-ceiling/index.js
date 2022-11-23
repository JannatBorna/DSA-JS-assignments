let numbers = [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
let target =30; // flooring = 25; ceiling= 35;  


function flooring (array, target){
    let start = 0;
    let end = array.length - 1;
    let mid; 
    let asc;

    if(array[start] < array[end]){
       asc = true;
    }

    else{
        asc = false;
    }

    while (start <= end){
        mid = Math.floor((start + end) / 2);
        
        if(array[mid] === target){
            return `flooring is at ${mid - 1} and ceiling is at ${mid + 1}`;
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
                if(array[mid] > target ){
                    start = mid - 1;

                }

                else{
                    end = mid + 1;
                }
            }
           
    } 
    
    return 'data not found';
}

console.log(flooring(numbers, target));