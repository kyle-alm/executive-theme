// Example JavaScript to showcase syntax highlighting

/**
 * Greets a user with a personalized message.
 * @param {string} name - The user's name.
 * @returns {string}
 */
function greet(name) {
    const greeting = `Hello, ${name}! 🎉`;
    console.log(greeting);
    return greeting;
}

// Create a list of users
const users = ["Alice", "Bob", "Charlie"];

// Greet each user
users.forEach((user, index) => {
    greet(user);
    console.log(`User #${index + 1} greeted at ${new Date().toISOString()}`);
});

// Example of an object with nested properties
const config = {
    theme: "dark",
    version: 1.2,
    features: {
        highlight: true,
        autoSave: false,
    },
};

console.table(config);
