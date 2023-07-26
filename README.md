# GameArt Backend Developer Assignment

This repository contains the technical assignments for the GameArt back-end developer job interview. The project includes JavaScript functions to perform various operations on an array of integers and a simple ping-pong API implemented using Node.js.

## JavaScript Functions: Map, Filter & Reduce

In the `src/functions.js` file, you will find the following JavaScript functions:

1. `getUniqueNumbers(arr)`: Returns all unique numbers from the input array, ordered from larger to smaller.

2. `multiplyByTwo(arr)`: Returns an array with each element of the input array multiplied by two.

3. `getOddNumbers(arr)`: Returns an array with all odd numbers from the input array.

4. `sumOfNumbers(arr)`: Returns the sum of all numbers in the input array.

5. `sumOfNumbersDivisibleByThree(arr)`: Returns the sum of all numbers in the input array that are divisible by three.

## Simple Ping-Pong API

The `index.js` file contains a simple REST API built with Express.js. It listens on the path `/ping` and responds with "pong" when accessed.

## Usage

1. Clone this repository to your local machine.

2. Install the dependencies by running the following command:
    npm install

3. Run the server using the following command:
    node index.js


The server will start running on http://localhost:3000.

4. Access the following endpoints:

- `http://localhost:3000/ping`: Responds with "pong".
- `http://localhost:3000/unique-numbers`: Responds with all unique numbers from the input array.
- `http://localhost:3000/multiplied-by-two`: Responds with all numbers from the input array multiplied by two.
- `http://localhost:3000/odd-numbers`: Responds with all odd numbers from the input array.
- `http://localhost:3000/sum-of-numbers`: Responds with the sum of all numbers from the input array.
- `http://localhost:3000/sum-of-numbers-divisible-by-three`: Responds with the sum of all numbers from the input array that are divisible by three.

## Contact

For any questions related to this assessment or any other inquiries, please get in touch with our lead developer Izak Lipnik via email at izak.lipnik@gameart.net.

Happy coding!

