import { test } from '@jest/globals';
import { jmfcool } from '../jmfcool.js';

describe('Functions', () => {

    test('jmfcool.hook should be a function', () => {
        expect(jmfcool.hook).toBeInstanceOf(Function);
    }); 

    test('jmfcool.model should be a function', () => {
        expect(jmfcool.model).toBeInstanceOf(Function);
    }); 

    test('jmfcool.view should be a function', () => {
        expect(jmfcool.view).toBeInstanceOf(Function);
    }); 

    test('jmfcool.init should be a function', () => {
        expect(jmfcool.init).toBeInstanceOf(Function);
    }); 

    test('jmfcool.display should be a function', () => {
        expect(jmfcool.display).toBeInstanceOf(Function);
    }); 

    test('jmfcool.render should be a function', () => {
        expect(jmfcool.render).toBeInstanceOf(Function);
    }); 

    test('jmfcool.template should be a function', () => {
        expect(jmfcool.template).toBeInstanceOf(Function);
    }); 

    test('jmfcool.evaluator should be a function', () => {
        expect(jmfcool.evaluator).toBeInstanceOf(Function);
    }); 

    test('jmfcool.getObject should be a function', () => {
        expect(jmfcool.getObject).toBeInstanceOf(Function);
    }); 

    test('jmfcool.getFormatter should be a function', () => {
        expect(jmfcool.getFormatter).toBeInstanceOf(Function);
    }); 

});