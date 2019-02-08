"use strict";
const requiredProps = (object, props) => {
    // Create a list containing the undefined items.
    const unefinedProps = props.filter(prop => typeof object[prop] === 'undefined');
    // Check for undefined items
    if (unefinedProps.length) {
        const message = `
This method requires "${props.join(', ')}"
but "${unefinedProps.join(', ')}" are undefined.

Set with "eobotInstance.setAccount({ prop: value });".`;
        // Send message
        console.error(message);
        // Node.js?
        if (process) {
            // stop code
            process.exit();
        }
    }
};
module.exports = requiredProps;
