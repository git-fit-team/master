import {
  Component,
  OnInit
} from '@angular/core';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  checkButton() {
  const radios = (<HTMLFormElement>(document.getElementsByName('gender')));
  //console.log(radios);
  debugger;
  for (let i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked === false) {
      debugger;
      this.calculateFemale();
      //console.log(radios[i].value);
      break;
    } else {
      this.calculatemale();
      break;
    }
  }
}

 calculateFemale() {

  const feetValue = parseFloat((<HTMLInputElement>document.getElementById('feetList')).value);
  const inchValue = parseFloat((<HTMLInputElement>document.getElementById('inchList')).value);
  const pounds = parseFloat((<HTMLInputElement>document.getElementById('weight')).value);
  const ageInput = parseFloat((<HTMLInputElement>document.getElementById('age')).value);
  const activityValue = parseFloat((<HTMLInputElement>document.getElementById('activityList')).value);

  // Gender BMR Value
  const femaleBMR = (447.593);

  // Height Equation for male and female
  const femaleHeightTotal = ((feetValue + inchValue) * 2.54) * 3.098;
  //console.log('height Inch', feetValue + inchValue);
  // Weight equation for male and female
  const femalePoundsTotal = ((pounds * 0.453592) * 9.247);

  // Age equation for male and female
  const  femaleAgeTotal = ageInput * 4.330;

  // BMR Total equation for activity list and Base BMR
  const femaleBMRTotal = (activityValue);

  //console.log('femaleBMR', femaleBMR);
  //console.log('Height', femaleHeightTotal);
  //console.log('pounds', femalePoundsTotal);
  //console.log('age', femaleAgeTotal);
  //console.log('Activity', femaleBMRTotal);

  // Calulate female calories
  const a = (femaleBMR);
  const b = (femaleHeightTotal);
  const c = (femalePoundsTotal);
  const d = (femaleAgeTotal);
  const e = (femaleBMRTotal);
  let result;
  result = (a + b + c - d) * e;
  //console.log(result);
  let baseBMR;
  baseBMR = (a + b + c - d);
  //console.log(baseBMR);
  document.getElementById('Answer').innerHTML = ('Your base BMR is ' + baseBMR.toFixed(0) + ' calories per day.' + '<br>' + 'To maintain your current weight at your exercise level youll need ' + result.toFixed(0) + ' calories per day.');
  //document.getElementById('seePlan').style.display = 'block';
}


 calculatemale() {

  const feetValue = parseFloat((<HTMLInputElement>document.getElementById('feetList')).value);
  const inchValue = parseFloat((<HTMLInputElement>document.getElementById('inchList')).value);
  const pounds = parseFloat((<HTMLInputElement>document.getElementById('weight')).value);
  const ageInput = parseFloat((<HTMLInputElement>document.getElementById('age')).value);
  const activityValue = parseFloat((<HTMLInputElement>document.getElementById('activityList')).value);

  // Gender BMR Value
  const maleBMR = (88.362);

  // Height Equation for male and female
  const maleHeightTotal = ((feetValue + inchValue) * 2.54) * 4.799;

  // Weight equation for male and female
  const malePoundsTotal = (pounds * 0.453592) * 13.397;

  // Age equation for male and female
  const maleAgeTotal = ageInput * 5.677;

  // BMR Total equation for activity list and Base BMR
  const maleBMRTotal = (activityValue);
  //console.log(maleBMR);
  //console.log(maleHeightTotal);
  //console.log(malePoundsTotal);
  //console.log(maleAgeTotal);
  //console.log(maleBMRTotal);

  // Calulate female calories
  const a = (maleBMR);
  const b = (maleHeightTotal);
  const c = (malePoundsTotal);
  const d = (maleAgeTotal);
  const e = (maleBMRTotal);
  let result;
  result = (a + b + c - d) * e;
  //console.log(result);
  let baseBMR;
  baseBMR = (a + b + c - d);
  //console.log(baseBMR);

  document.getElementById('Answer').innerHTML = ('Your base BMR is ' + baseBMR.toFixed(0) + ' calories per day.' + '<br>' + 'To maintain your current weight at your exercise level youll need ' + result.toFixed(0) + ' calories per day.');
  document.getElementById('seePlan').style.display = 'block';
}

// Reset form button
 resetForm() {
  const male = ((<HTMLInputElement>document.getElementById('male')).checked = false);
  const female = ((<HTMLInputElement>document.getElementById('female')).checked = false);
  const feetList = ((<HTMLInputElement>document.getElementById('feetList')).value = 'Feet');
  const inchList = ((<HTMLInputElement>document.getElementById('inchList')).value = 'Inch');
  const weight = ((<HTMLInputElement>document.getElementById('weight')).value = '');
  const age = ((<HTMLInputElement>document.getElementById('age')).value = '');
  const activityList = ((<HTMLInputElement>document.getElementById('activityList')).value = 'Activity');
  const Answer = ((<HTMLInputElement>document.getElementById('Answer')).innerHTML = '');
}

}
// End