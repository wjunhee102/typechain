class LeepYear {
  private year:number;
  private month:number;
  private day:number;

  private checkingInt = (num:number):boolean => num > 0? true : false;

  constructor (year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  private getYear = ():number => this.year;
  private getMonth = ():number => this.month;
  private getDay = ():number => this.day;

  private checkingLeepYear = ():boolean => 
    (this.getYear() % 4 === 0 && this.getYear() % 100 !== 0) || this.getYear() % 400 === 0? true : false;

  private checkingYear = ():boolean => this.checkingInt(this.getYear());
  private checkingMonth = ():boolean => 
    this.checkingInt(this.getYear()) && this.getMonth() <= 12? true : false;

  private checkingDay = ():boolean => {
    const monthWith31days = [1, 3, 5, 7, 8, 10, 12];

    if(!this.checkingInt(this.getDay()) || this.getDay() > 31) {
      return false;
    } else {

      if(this.getMonth() === 2) {

        if(this.getDay() > 29) {
          return false;
        } else {
          if(this.getDay() === 29) {
            return this.checkingLeepYear()? true : false;
          } else {
            return true;
          }
        }

      } else {

        if(this.getDay() === 31) {

          for(const month of monthWith31days) {
            if(month === this.getMonth()) {
              return true;
            }
          }
          
          return false;
        } else {
          return true;
        }

      }

    }

  };

  private resultMessage = ():string => {

    if(this.checkingYear() && this.checkingMonth() && this.checkingDay()) {
      return this.checkingLeepYear()? "은 윤년입니다." : "은 윤년이 아닙니다."
    } else {
      const error = []
      let errorMessage;

      if(!this.checkingYear()) {
        error.push("연도");
      }
      if(!this.checkingMonth()) {
        error.push("월");
      }
      if(!this.checkingDay()) {
        error.push("일");
      }

      error.map((element) => {
        if(!errorMessage) {
          return errorMessage = element;
        } else {
          return errorMessage = `${errorMessage}, ${element}`;
        }
      });

      return `:${errorMessage}의 입력값을 확인해주세요.`
    }
  }

  public result = ():string => {
    return `${this.getYear()}년 ${this.getMonth()}월 ${this.getDay()}일${this.resultMessage()}`
  }

}

const testCase1 = new LeepYear(1900, 10, 31);
const testCase2 = new LeepYear(2004, 2, 29);
const testCase3 = new LeepYear(1988, 2, 29);
const testCase4 = new LeepYear(2100, 2, 28);
const testCase5 = new LeepYear(2133, 2, 29);
const testCase6 = new LeepYear(-1, -2, 300);

console.log(testCase1.result());
console.log(testCase2.result());
console.log(testCase3.result());
console.log(testCase4.result());
console.log(testCase5.result());
console.log(testCase6.result());

export {};