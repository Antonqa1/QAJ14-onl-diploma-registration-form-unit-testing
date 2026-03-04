class RegistrationForm {
    validateUsername(username: string): { isValid: boolean, error?: string } {
        if (username.length === 0) {
            return {isValid: false, error: `Username is empty`};
        }
        if (username.length > 14) {
            return {isValid: false, error: `Username is too long`};
        }
        if (username.length < 3) {
            return {isValid: false, error: `Username is too short`};
        }

        return {isValid: true};
    }

    validateEmail(email: string): { isValid: boolean, error?: string } {
        if (email.length === 0) {
            return {isValid: false, error: `Email is empty`};
        }
        if (email.length > 14) {
            return {isValid: false, error: `Email is too long`};
        }
        if (email.length < 5) {
            return {isValid: false, error: `Email is too short`};
        }
        if (!email.includes("@")) {
            return {isValid: false, error: `Email isn't valid`};
        }
        const notValidValues = /[ ,:;<>()[\]\\\/а-яА-ЯёЁ]/;
        if (notValidValues.test(email)) {
            return {isValid: false, error: `Email contains invalid Cyrillic values or forbidden values`};
        }

        return {isValid: true};
    }

    validatePassword(password: string): { isValid: boolean, error?: string } {
        if (password.length === 0) {
            return {isValid: false, error: `Password is empty`};
        }
        if (password.length > 14) {
            return {isValid: false, error: `Password is too long`};
        }
        if (password.length < 8) {
            return {isValid: false, error: `Password is too short`};
        }
        const hasUpper = /[A-Z]/;
        if (!hasUpper.test(password)) {
            return {isValid: false, error: `Password doesn't have upper symbol`};
        }
        const hasSpecialSymbols = /[!@#$%^&*(),.?":{}|<>]/;
        if (!hasSpecialSymbols.test(password)) {
            return {isValid: false, error: `Password doesn't have special symbol`};
        }

        return {isValid: true};
    }

    confirmPassword(password: string, confirmPassword: string): { isValid: boolean, error?: string } {
        if (password !== confirmPassword) {
            return {isValid: false, error: `Confirm password value isn't the same like value in the password field`};
        }
        return {isValid: true};
    }

    validateTerms(validateTerms: boolean): { isValid: boolean, error?: string } {
        if (!validateTerms) {
            return {isValid: false, error: `Please accept the terms and conditions`};
        }
        return {isValid: true};
    }
}

export const registrationForm = new RegistrationForm();
