import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing';

describe('CalculatorService', () => {

    let calculator:CalculatorService;
    let loggerSpy: any;

    beforeEach(()=>{
        console.log("Calling beforeEach");
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
       
        TestBed.configureTestingModule({
            providers:[
                CalculatorService,
                {provide:LoggerService, useValue:loggerSpy}
            ]
        });

        calculator = TestBed.inject(CalculatorService);
    })


    it('should add two numbers', () => {
        console.log("adding two numbers");
        const result = calculator.add(2, 2);

        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        console.log("subtract two numbers");
        const result = calculator.subtract(4, 3);
        expect(result).toBe(1,"unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
});