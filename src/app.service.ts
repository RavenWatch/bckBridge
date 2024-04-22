import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let vr = 1.2 // * 10 | % 10
    return 'Hello World!';
  }
  
  checkNumberOfEvenNumbers(num:number){
    let startingTime=new Date()
    console.log( (startingTime.getSeconds() * 1000) + startingTime.getMilliseconds() )
    console.log(startingTime)
    let listOfPrimoNumbers=[]
    if(
      num < 2 
      ||
     ( (num * 10) % 10 ) !=0 //Testando se o número é inteiro, se não for é invalido
    ){
      console.log("INVALIDO")
      return {numbers:-1,time:-1}
    }
    for(let numTeste=2;numTeste < num ; numTeste++){
      if(this.isNumberPrimo(numTeste)){
        listOfPrimoNumbers=[...listOfPrimoNumbers,numTeste]
      }
    }

    let endingTime=new Date()
    console.log(endingTime)
    console.log( (endingTime.getSeconds() * 1000) + endingTime.getMilliseconds() )

    let calculationTime = ((endingTime.getSeconds() * 1000) + endingTime.getMilliseconds()) -  ((startingTime.getSeconds() * 1000)+startingTime.getMilliseconds())
    
    console.log(calculationTime)
    return {numbers:listOfPrimoNumbers.length,time:calculationTime} 
  }

  isNumberPrimo(num:number){
    let numberOfDivisors=0
    for(let ind = 2 ; ind < num ; ind ++){
      if( (num % ind) == 0 ){
        numberOfDivisors +=  1
      }
    }
    return numberOfDivisors == 0
     
  }
}
