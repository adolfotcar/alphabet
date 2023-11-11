import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public isPressing: boolean = false;
  //by default we start in A, if different route we trat in the onInit
  public charCode: number = 65; 
  //object containing the charcodes of each letter as keys and the animal names as values, used to retrieve animal names
  private animalChars: any = { 65: 'antelope', 66: 'bear', 67: 'cow', 68: 'dog', 69: 'elephant', 70: 'frog', 71: 'giraffe', 
                              72: 'hipo', 73: 'iguana', 74: 'jaguar', 75: 'koala', 76: 'lion', 77: 'monkey', 78: 'narwhal', 
                              79: 'ostrich', 80: 'penguin', 81: 'quail', 82: 'rat', 83: 'shark', 84: 'turtle', 85: 'urchin', 
                              86: 'viper', 87: 'whale', 88: 'xantus', 89: 'yak', 90: 'zebra'
                            };

  constructor(private router: Router, private elem: ElementRef) { }

  ngOnInit(): void {
    //if different route passed we extract the first letter of that route and get the charcode of it
    if (this.router.url!=='/') {
      let path = this.router.url.substring(1, 2);
      this.charCode = path.toUpperCase().charCodeAt(0);
    }

    //when pressing and releasing a key compares it to the equivalent letter to the current charcode
    document.addEventListener('keydown', (event) => {
      if (event.key.toUpperCase() === String.fromCharCode(this.charCode)) {
        this.isPressing = true;
      }
    });
    document.addEventListener('keyup', (event) => {
      if (event.key.toUpperCase() === String.fromCharCode(this.charCode)) {
        this.isPressing = false;
      }
    });
  }

  //get the equivalent letter to the current charcode
  public getLetter():string{
    return String.fromCharCode(this.charCode);
  }

  //generates the image src
  public getImage():string{
    return `/assets/images/${this.animalChars[this.charCode]}.jpg`;
  }

  //returns the animal name, making first letter capital
  public getAnimalName():string{
    return this.animalChars[this.charCode].substring(0, 1).toUpperCase() + //capitalizing first letter
            this.animalChars[this.charCode].substring(1, this.animalChars[this.charCode].length); //appending other letters
  }

  //moves to the previous letter
  previous(){
    //only goes prev if we're not in A (char 65)
    if (this.charCode>65) {
      this.charCode--;
      this.router.navigate([String.fromCharCode(this.charCode).toLowerCase()]);
    }
  }

  //moves to the next letter
  public next(): void{
    //only goes next if we're not in Z (char 90)
    if (this.charCode<90) {
      this.charCode++;
      this.router.navigate([String.fromCharCode(this.charCode).toLowerCase()]);
    }
  }

}
