const input = prompt("enter a number: ").split('').reverse()

const numbers = {
    0: "Zero",
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
   10:'Ten' ,
   11:'Eleven', 
   12:'Twelve', 
   13:'Thirteen', 
   14:'Fourteen', 
   15:'Fifteen', 
   16:'Sixteen', 
   17:'Seventeen', 
   18:'Eighteen', 
   19:'Nineteen', 
   20 :"Twenty",
   30 : "Thirty",
   40 : "Forty",
   50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety'
}


const big_names = {
    3: "Billion",
    2: "Million",
    1: "Thousand"
}


let first_divided = [];


for(let i = 0; i< input.length; i+=3){

    first_divided.push(input.slice(i, i+3).reverse()) 

}

first_divided.reverse()

function naming_first(base_arr){

    let output_1 = ''

    for(let i=0; i<base_arr.length; i++){
        
        if(i!=0 && base_arr[i].join('') > 0 && Number(base_arr[i].join('')[0])!=0 ){
            
            output_1 += ' '
        }

        if((base_arr.length - 1 - i)!=0 && base_arr[i].join('')>0){
            
            output_1 = output_1 + (second_naming(base_arr[i].join('')) + " " + big_names[base_arr.length - 1 - i]) 
        
        }else if(base_arr[i].join('')>0){
            
            output_1 = output_1 + (second_naming(base_arr[i].join('')))
        
        }else if(base_arr[i].join('') == 0){
            
            output_1 = output_1 + (second_naming(base_arr[i].join('')))
        
        }
    }

    return output_1
}

function second_naming(num){

    let output = ''

    if(num.length == 3 && Number(num)!=0){

        if(Number(num[0]) != 0){
            output = output + numbers[Number(num[0])] + ' Hundred'
        }


        if(Number(num.slice(1,3)) >=10 && Number(num.slice(1,3)) <=99){
                
            if(Number(num.slice(1,3)) >= 11 && Number(num.slice(1,3)) <= 19 || Number(num.slice(1,3)) %10 == 0){
                    
                output = output + " " + numbers[Number(num.slice(1,3))]
                
            }else{
                    
                output = output + " " + numbers[Number(num[1] + "0")] + " " + numbers[Number(num[2])]
                
            }

        }else if(Number(num[1]) == 0 && Number(num[2]) != 0){
 
            output = output + " " + numbers[Number(num[2])]

        }else if(Number(num[1]) == 0 && Number(num[2]) == 0){

            output = output + ""

        }


    }else if(num.length == 2){

        if(Number(num) >= 11 && Number(num) <= 19 || Number(num) %10 == 0){
            
            output = output + numbers[Number(num)]
        
        }else{
           
            output = output + numbers[Number(num[0] + "0")] + " " + numbers[Number(num[1])]
        
        }

    }else if (num.length == 1){
        
        output = output + numbers[Number(num)]
    
    }

    return output
}

console.log(naming_first(first_divided))

