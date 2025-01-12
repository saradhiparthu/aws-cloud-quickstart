const serverless = require('serverless-http');
const app = require('./handlers/app');

module.exports.handler = serverless(app);

/*
const calculator = require('./services/calculator-service');
exports.handler = async (event) => {
    try {
        const { num1, num2, operation } = event;
        // Validate the inputs
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Both num1 and num2 should be numbers." })
            };
        }
        let result;

        // Perform the operation based on the 'operation' parameter
        switch (operation) {
            case 'add':
                result = calculator.add(num1, num2);
                break;
            case 'subtract':
                result = calculator.sub(num1, num2);
                break;
            case 'multiply':
                result = calculator.multiply(num1, num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    return {
                        statusCode: 400,
                        body: JSON.stringify({ message: "Cannot divide by zero." })
                    };
                }
                result = calculator.divide(num1, num2);
                break;
            default:
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: "Invalid operation. Please choose add, subtract, multiply, or divide." })
                };
        }

        // Return the result
        return {
            statusCode: 200,
            body: JSON.stringify({ result })
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error" }),
        };
    }
};
*/