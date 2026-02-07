import {registrationForm} from "../src/registrationForm";
import {expect} from "chai";

describe("Test for registration form", () => {
    describe('Test for validation username', () => {
        it("Check the user enters valid username", () => {
            expect(registrationForm.validateUsername('Anton').isValid).to.be.true;
        });
        it("Check the username with min values is valid", () => {
            expect(registrationForm.validateUsername('Ant').isValid).to.be.true;
        });
        it("Check the username with max values is valid", () => {
            expect(registrationForm.validateUsername('AntonAntonAnto').isValid).to.be.true;
        });
        it("Check the username can have numbers", () => {
            expect(registrationForm.validateUsername('Anton123').isValid).to.be.true;
        });
        it("Check that username can't be empty", () => {
            expect(registrationForm.validateUsername('').isValid).to.be.false;
            expect(registrationForm.validateUsername('').error).to.equal('Username is empty');
        });
        it("Check that username can't be less than 3 symbols", () => {
            expect(registrationForm.validateUsername('An').isValid).to.be.false;
            expect(registrationForm.validateUsername('An').error).to.equal(`Username is too short`);
        });
        it("Check that username can't be more than 14 symbols", () => {
            expect(registrationForm.validateUsername('AntonAntonAnton').isValid).to.be.false;
            expect(registrationForm.validateUsername('AntonAntonAnton').error).to.equal(`Username is too long`);
        });
    });

    describe('Test for validation email', () => {
        it("Check the user enters valid email", () => {
            expect(registrationForm.validateEmail('ant@gmail.com').isValid).to.be.true;
        });
        it("Check the email with min values is valid", () => {
            expect(registrationForm.validateEmail('a@g.c').isValid).to.be.true;
        });
        it("Check the email with max values is valid", () => {
            expect(registrationForm.validateEmail('anto@gmail.com').isValid).to.be.true;
        });
        it("Check the email can have numbers", () => {
            expect(registrationForm.validateEmail('ant1@gmail.com').isValid).to.be.true;
        });
        it("Check that email can't be without @", () => {
            expect(registrationForm.validateEmail('ant1gmail.com').isValid).to.be.false;
            expect(registrationForm.validateEmail('ant1gmail.com').error).to.equal(`Email isn't valid`);
        });
        it("Check that user can't use the email with forbidden symbols", () => {
            expect(registrationForm.validateEmail('an<@gmail.com').isValid).to.be.false;
            expect(registrationForm.validateEmail('an<@gmail.com').error).to.equal(`Email contains invalid Cyrillic values or forbidden values`);
        });
        it("Check that user can't use the email with less than 3 symbols", () => {
            expect(registrationForm.validateEmail('a@t').isValid).to.be.false;
            expect(registrationForm.validateEmail('a@t').error).to.equal(`Email is too short`);
        });
        it("Check that user can't use the email with less more 14 symbols", () => {
            expect(registrationForm.validateEmail('ant12@gmail.com').isValid).to.be.false;
            expect(registrationForm.validateEmail('ant12@gmail.com').error).to.equal(`Email is too long`);
        });
        it("Check that user can't use Cyrillic symbols in the email", () => {
            expect(registrationForm.validateEmail('aнt@gmail.com').isValid).to.be.false;
            expect(registrationForm.validateEmail('aнt@gmail.com').error).to.equal(`Email contains invalid Cyrillic values or forbidden values`);
        });
        it("Check that user can't enter empty email", () => {
            expect(registrationForm.validateEmail('').isValid).to.be.false;
            expect(registrationForm.validateEmail('').error).to.equal(`Email is empty`);
        });
    });

    describe('Test for validation password', () => {
        it("Check the user enters valid password", () => {
            expect(registrationForm.validatePassword('123456A@123').isValid).to.be.true;
        });
        it("Check the password with min values is valid", () => {
            expect(registrationForm.validatePassword('123456A@').isValid).to.be.true;
        });
        it("Check the password with max values is valid", () => {
            expect(registrationForm.validatePassword('123456A@999999').isValid).to.be.true;
        });
        it("Check the password can have numbers", () => {
            expect(registrationForm.validatePassword('123456A@123').isValid).to.be.true;
        });
        it("Check the password can have special symbols", () => {
            expect(registrationForm.validatePassword('123456A@123').isValid).to.be.true;
        });
        it("Check that user can't use the password with less than 8 symbols", () => {
            expect(registrationForm.validatePassword('12345A@').isValid).to.be.false;
            expect(registrationForm.validatePassword('12345A@').error).to.equal(`Password is too short`);
        });
        it("Check that user can't use the password with more than 14 symbols", () => {
            expect(registrationForm.validatePassword('123456A@9123456').isValid).to.be.false;
            expect(registrationForm.validatePassword('123456A@9123456').error).to.equal(`Password is too long`);
        });
        it("Check that user can't use the password without upper symbols", () => {
            expect(registrationForm.validatePassword('123456a@').isValid).to.be.false;
            expect(registrationForm.validatePassword('123456a@').error).to.equal(`Password doesn't have upper symbol`);
        });
        it("Check that user can't use the password without special symbols", () => {
            expect(registrationForm.validatePassword('123456A8').isValid).to.be.false;
            expect(registrationForm.validatePassword('123456A8').error).to.equal(`Password doesn't have special symbol`);
        });
        it("Check that user can't leave the password empty", () => {
            expect(registrationForm.validatePassword('').isValid).to.be.false;
            expect(registrationForm.validatePassword('').error).to.equal(`Password is empty`);
        });
    });

    describe('Test for confirmation password', () => {
        it("Check the user enters valid confirmation password", () => {
            expect(registrationForm.confirmPassword('123456A@123', '123456A@123').isValid).to.be.true;
        });
        it("Check the user enters valid password and invalid confirmation password", () => {
            expect(registrationForm.confirmPassword('123456A@123', '12345A@123').isValid).to.be.false;
            expect(registrationForm.confirmPassword('123456A@123', '12345A@123').error).to.equal(`Confirm password value isn't the same like value in the password field`);
        });
        it("Check the user cannot use different register in the password and confirmation password", () => {
            expect(registrationForm.confirmPassword('123456A@123', '123456a@123').isValid).to.be.false;
            expect(registrationForm.confirmPassword('123456A@123', '123456a@123').error).to.equal(`Confirm password value isn't the same like value in the password field`);
        });
    });

    describe('Test for validation terms', () => {
        it("Check the user enters accept terms and conditions", () => {
            expect(registrationForm.validateTerms(true).isValid).to.be.true;
        });
        it("Check the user should accept terms and conditions", () => {
            expect(registrationForm.validateTerms(false).isValid).to.be.false;
            expect(registrationForm.validateTerms(false).error).to.equal(`Please accept the terms and conditions`);
        });
    });
});
